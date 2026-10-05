export type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

export type GithubStats = {
  total: number;
  days: Day[];
  repos: number | null;
  followers: number | null;
  prs: { total: number; orgs: { owner: string; count: number }[] } | null;
};

const REVALIDATE = 60 * 60; // refresh hourly

function headers(): HeadersInit {
  const token = process.env.GITHUB_TOKEN;
  return {
    Accept: "application/vnd.github+json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

async function getJSON<T>(url: string, init?: RequestInit): Promise<T | null> {
  try {
    const res = await fetch(url, { ...init, next: { revalidate: REVALIDATE } });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function getGithubStats(user: string): Promise<GithubStats> {
  const [contrib, profile, prs] = await Promise.all([
    getJSON<{ total: { lastYear: number }; contributions: Day[] }>(
      `https://github-contributions-api.jogruber.de/v4/${user}?y=last`,
    ),
    getJSON<{ public_repos: number; followers: number }>(
      `https://api.github.com/users/${user}`,
      { headers: headers() },
    ),
    getJSON<{ total_count: number; items: { repository_url: string }[] }>(
      `https://api.github.com/search/issues?q=author:${user}+type:pr+-user:${user}&per_page=100`,
      { headers: headers() },
    ),
  ]);

  let prSummary: GithubStats["prs"] = null;
  if (prs) {
    const counts = new Map<string, number>();
    for (const item of prs.items) {
      const owner = item.repository_url.split("/repos/")[1]?.split("/")[0];
      if (owner) counts.set(owner, (counts.get(owner) ?? 0) + 1);
    }
    prSummary = {
      total: prs.total_count,
      orgs: [...counts.entries()]
        .map(([owner, count]) => ({ owner, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5),
    };
  }

  return {
    total: contrib?.total.lastYear ?? 0,
    days: contrib?.contributions ?? [],
    repos: profile?.public_repos ?? null,
    followers: profile?.followers ?? null,
    prs: prSummary,
  };
}

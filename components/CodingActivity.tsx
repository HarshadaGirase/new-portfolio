import { getGithubStats } from "@/lib/github";
import { profile } from "@/data/portfolio";
import Section from "./Section";
import ActivityPanel from "./ActivityPanel";

export default async function CodingActivity() {
  const stats = await getGithubStats(profile.githubUser);
  return (
    <Section id="activity" title="Coding Activity">
      <ActivityPanel stats={stats} user={profile.githubUser} />
    </Section>
  );
}

// All site content lives here. Edit this file to update the portfolio.
// Images: drop files into /public/images and point the paths below at them.
// Any missing image falls back to a monogram / placeholder automatically.

export const profile = {
  name: "Harshada Girase",
  title: "Software Engineer",
  tagline: ["Software Engineer", "AIML"],
  photo: "/images/profile.jpg",
  banner: "/images/banner.jpg",
  bannerQuote: "Quiet code. Loud results.",
  openToWork: true,
  githubUser: "HarshadaGirase",
  links: {
    github: "https://github.com/HarshadaGirase",
    x: "https://x.com/harshadajg2001",
    linkedin: "https://www.linkedin.com/in/harshada-girase/",
    leetcode: "https://leetcode.com/u/harshadajg2001/",
    resume:
      "https://drive.google.com/file/d/1WfgYpW0eZtJyDf2AbN-Zcrm304tB-6vx/view?usp=drive_link",
    // TODO: paste your email address
    email: "",
  },
};

export type EmploymentType = "Full-time" | "Contract" | "Internship" | "Part-time";

/** How a logo sits in its round badge. `crop: "left"` shows just the icon of a wide wordmark. */
export type LogoStyle = { bg?: string; crop?: "left"; zoom?: number; focus?: string };

export type Experience = {
  company: string;
  logo: string;
  logoStyle?: LogoStyle;
  role: string;
  type: EmploymentType;
  start: string;
  end: string;
  location: string;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Sky Elemental Ltd.",
    logo: "/images/logos/logo.svg",
    logoStyle: { bg: "#ffffff", crop: "left" },
    role: "Software Engineer",
    type: "Contract",
    start: "Jul '25",
    end: "Jun '26",
    location: "London (Remote)",
    points: ["Built SaaS Product"],
    stack: ["Angular", "Node.js", "TypeScript", "MongoDB", "Docker", "CI/CD", "WebSocket"],
  },
  {
    company: "XII Capital",
    logo: "/images/logos/xiicapital_logo.jpeg",
    role: "Web Development Intern",
    type: "Internship",
    start: "Nov '24",
    end: "Jul '25",
    location: "London (Remote)",
    points: ["Built SaaS Product"],
    stack: [
      "React.js",
      "Angular",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Docker",
      "CI/CD",
      "WebSocket",
      "Jest",
    ],
  },
];

export const education = [
  {
    college: "DPGU School of Management & Research – Dr. D. Y. Patil Unitech Society",
    short: "DPGU SMR",
    logo: "/images/logos/dpgusmr_logo.jpeg",
    logoStyle: { bg: "#ffffff", zoom: 3, focus: "50% 40%" },
    degree: "Master of Computer Applications",
    start: "2022",
    end: "2024",
    location: "Pune, India",
  },
];

export type Project = {
  slug: string;
  name: string;
  summary: string;
  description: string[];
  features: string[];
  stack: string[];
  image: string;
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "suraksha-ai",
    name: "Suraksha AI",
    summary: "A real-time voice agent that intercepts Hinglish scam calls, and when the money has already gone — turns a panicking victim's speech... ",
    // TODO: paste the full write-up for the /projects/suraksha-ai page
    description: [
      "A real-time voice agent that intercepts Hinglish scam calls, and when the money has already gone — turns a panicking victim's speech into an action.",
    ],
    // TODO: paste the feature list
    features: [],
    stack: [
      "Python",
      "AssemblyAI Universal-3 Pro (STT)",
      "Google Gemini Flash",
      "JSON function-calling",
      "React 18",
      "Tailwind",
      "PostgreSQL (Docker)",
      "edge-tts (MD5 disk cache)",
      "FastAPI",
    ],
    image: "/images/projects/suraksha-ai.png",
    github: "https://github.com/HarshadaGirase/Suraksha-AI",
    live: "https://frontend-nu-navy-77.vercel.app/",
  },
];

export const techStack: { group: string; items: string[] }[] = [
  {
    group: "LLM Engineering",
    items: [
      "LLMs",
      "RAG",
      "AI Agents",
      "Multi-Agent Systems",
      "Prompt Engineering",
      "Fine-Tuning / LoRA",
      "Evals",
      "Context Engineering",
      "Tool Calling",
      "MCP",
      "Embeddings",
      "Multi-Modal AI",
      "Voice AI Agents",
    ],
  },
  {
    group: "AI Frameworks",
    items: [
      "LangChain",
      "LlamaIndex",
      "CrewAI",
      "Ollama",
      "Anthropic",
      "OpenAI",
      "OpenCV",
      "OCR",
      "Tesseract",
      "TrOCR",
    ],
  },
  {
    group: "Full-stack",
    items: [
      "TypeScript",
      "JavaScript",
      "React.js",
      "Next.js",
      "Angular",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Tailwind",
      "WebSocket",
      "Jest",
    ],
  },
  {
    group: "Cloud & AI Infra",
    items: [
      "Python",
      "FastAPI",
      "AWS",
      "GCP",
      "Vertex AI",
      "Firebase",
      "Docker",
      "Git",
      "GitHub Actions",
      "Streamlit",
      "Postman",
      "LiveKit",
      "n8n",
    ],
  },
];

export type Hackathon = {
  name: string;
  organizer: string;
  logo: string;
  logoStyle?: LogoStyle;
  start: string;
  end: string;
  mode: string;
  certificate: string;
  project: {
    name: string;
    problem: string;
    stack: string[];
    slug?: string;
    github?: string;
    live?: string;
  };
};

export const hackathons: Hackathon[] = [
  {
    name: "AssemblyAI Voice Agent Hackathon",
    organizer: "lablab.ai × AssemblyAI",
    logo: "/images/logos/assemblyai_logo.jpeg",
    start: "1 Sep 2026",
    end: "30 Sep 2026",
    mode: "Online",
    certificate:
      "https://lablab.ai/u/@harshadajg200139829/ai-hackathons/assemblyai-voice-agent-hackathon/certificate",
    project: {
      name: "Suraksha AI",
      problem:
        "Scam callers target people in Hinglish, and existing call filters can't follow a code-switched conversation as it happens. Suraksha AI listens to the call in real time, spots scam patterns, and steps in with a spoken warning before the victim shares money or OTPs.",
      stack: [
        "AssemblyAI Streaming STT",
        "Google Gemini Flash",
        "FastAPI",
        "React 18",
        "PostgreSQL",
        "edge-tts",
      ],
      slug: "suraksha-ai",
      github: "https://github.com/HarshadaGirase/Suraksha-AI",
      live: "https://frontend-nu-navy-77.vercel.app/",
    },
  },
];

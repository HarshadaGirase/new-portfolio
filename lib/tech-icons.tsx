import type { IconType } from "react-icons";
import {
  SiAnthropic,
  SiAngular,
  SiCrewai,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiGooglecloud,
  SiGooglegemini,
  SiJavascript,
  SiJest,
  SiLangchain,
  SiLivekit,
  SiMongodb,
  SiN8N,
  SiNextdotjs,
  SiNodedotjs,
  SiOllama,
  SiOpencv,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiStreamlit,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { RiOpenaiFill } from "react-icons/ri";
import {
  LuBot,
  LuBraces,
  LuBrain,
  LuCloud,
  LuEye,
  LuFlaskConical,
  LuGitBranch,
  LuLayers,
  LuMic,
  LuNetwork,
  LuPlug,
  LuRadio,
  LuScanLine,
  LuScanText,
  LuSearch,
  LuShare2,
  LuSlidersHorizontal,
  LuSpeech,
  LuWandSparkles,
  LuWorkflow,
  LuWrench,
} from "react-icons/lu";

type Entry = { icon: IconType; color: string };

const map: Record<string, Entry> = {
  // LLM engineering
  LLMs: { icon: LuBrain, color: "#c4a7ff" },
  RAG: { icon: LuSearch, color: "#5ec8ff" },
  "AI Agents": { icon: LuBot, color: "#ff7a8a" },
  "Multi-Agent Systems": { icon: LuNetwork, color: "#9aa4ff" },
  "Prompt Engineering": { icon: LuWandSparkles, color: "#f2b84b" },
  "Fine-Tuning / LoRA": { icon: LuSlidersHorizontal, color: "#4fd1a1" },
  Evals: { icon: LuFlaskConical, color: "#ff6b5b" },
  "Context Engineering": { icon: LuLayers, color: "#4aa8ff" },
  "Tool Calling": { icon: LuWrench, color: "#a58bff" },
  MCP: { icon: LuPlug, color: "#ff8a3d" },
  Embeddings: { icon: LuShare2, color: "#b98cff" },
  "Multi-Modal AI": { icon: LuEye, color: "#3fd0c0" },
  "Voice AI Agents": { icon: LuMic, color: "#ff5d73" },

  // AI frameworks
  LangChain: { icon: SiLangchain, color: "#2ec4a0" },
  LlamaIndex: { icon: LuLayers, color: "#b07cff" },
  CrewAI: { icon: SiCrewai, color: "#ff5a50" },
  Ollama: { icon: SiOllama, color: "#e8e6e1" },
  Anthropic: { icon: SiAnthropic, color: "#d4a27f" },
  OpenAI: { icon: RiOpenaiFill, color: "#e8e6e1" },
  OpenCV: { icon: SiOpencv, color: "#6a7bff" },
  OCR: { icon: LuScanLine, color: "#4fd1a1" },
  Tesseract: { icon: LuScanText, color: "#5ec8ff" },
  TrOCR: { icon: LuScanText, color: "#f2b84b" },

  // Full-stack
  TypeScript: { icon: SiTypescript, color: "#3178c6" },
  JavaScript: { icon: SiJavascript, color: "#f0db4f" },
  "React.js": { icon: SiReact, color: "#61dafb" },
  "React 18": { icon: SiReact, color: "#61dafb" },
  "Next.js": { icon: SiNextdotjs, color: "#e8e6e1" },
  Angular: { icon: SiAngular, color: "#dd0031" },
  "Node.js": { icon: SiNodedotjs, color: "#5fa04e" },
  Express: { icon: SiExpress, color: "#e8e6e1" },
  MongoDB: { icon: SiMongodb, color: "#47a248" },
  PostgreSQL: { icon: SiPostgresql, color: "#4f8cc9" },
  "PostgreSQL (Docker)": { icon: SiPostgresql, color: "#4f8cc9" },
  Tailwind: { icon: SiTailwindcss, color: "#38bdf8" },
  WebSocket: { icon: LuRadio, color: "#f2b84b" },
  Jest: { icon: SiJest, color: "#c63d14" },
  "CI/CD": { icon: LuGitBranch, color: "#4fd1a1" },

  // Cloud & infra
  Python: { icon: SiPython, color: "#4b8bbe" },
  FastAPI: { icon: SiFastapi, color: "#05998b" },
  AWS: { icon: FaAws, color: "#ff9900" },
  GCP: { icon: SiGooglecloud, color: "#4285f4" },
  "Vertex AI": { icon: LuCloud, color: "#34a853" },
  Firebase: { icon: SiFirebase, color: "#ffca28" },
  Docker: { icon: SiDocker, color: "#2496ed" },
  Git: { icon: SiGit, color: "#f05032" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088ff" },
  Streamlit: { icon: SiStreamlit, color: "#ff4b4b" },
  Postman: { icon: SiPostman, color: "#ff6c37" },
  LiveKit: { icon: SiLivekit, color: "#1fd5f9" },
  n8n: { icon: SiN8N, color: "#ea4b71" },

  // Project-specific
  "Google Gemini Flash": { icon: SiGooglegemini, color: "#8ab4f8" },
  "JSON function-calling": { icon: LuBraces, color: "#f2b84b" },
  "AssemblyAI Universal-3 Pro (STT)": { icon: LuSpeech, color: "#5ec8ff" },
  "AssemblyAI Streaming STT": { icon: LuSpeech, color: "#5ec8ff" },
  "edge-tts (MD5 disk cache)": { icon: LuMic, color: "#ff5d73" },
  "edge-tts": { icon: LuMic, color: "#ff5d73" },
};

const fallback: Entry = { icon: LuWorkflow, color: "#8a8780" };

export function techIcon(name: string): Entry {
  return map[name] ?? fallback;
}

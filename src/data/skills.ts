import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    label: "Backend & Systems",
    skills: ["Java", "Spring", "Node.js", "Python", "REST APIs", "Kafka", "Microservices"],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    id: "data-cloud",
    label: "Data & Cloud",
    skills: ["PostgreSQL", "MongoDB", "Redis", "AWS"],
  },
  {
    id: "ai-ml",
    label: "AI & Machine Learning",
    skills: [
      "LLMs & Agents",
      "LangChain / LangGraph",
      "Prompt Engineering",
      "Computer Vision",
      "PyTorch",
    ],
  },
  {
    id: "tooling",
    label: "Tooling & Practices",
    skills: ["Git", "CI/CD", "Agile", "GitHub Copilot"],
  },
];

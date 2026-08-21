import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "first-light",
    title: "First Light",
    category: "Agentic AI · Computer Vision",
    description:
      "An offline disaster-triage system built on a single NVIDIA DGX Spark for the NVIDIA Spark Hackathon, converting aerial imagery into damage grades, priority rankings, routes, and rescue plans. Ran Nemotron Nano 9B/12B VL, Nemotron Lightning, YOLOv8x, xView2, BGE, vLLM, NemoClaw, and OpenShell entirely locally, with no cloud dependency.",
    technologies: ["Nemotron", "vLLM", "YOLOv8x", "xView2", "NemoClaw", "OpenShell"],
    award: "Winner — Best Use of NemoClaw + OpenShell, NVIDIA Spark Hackathon",
    metrics: [
      { label: "Person-detection recall", value: "98%" },
      { label: "Batch latency", value: "27s / 6 tiles" },
    ],
    image: "/images/first-light.jpg",
    imageFit: "contain",
    featured: true,
  },
  {
    id: "stock-analysis-agent",
    title: "Stock Analysis & Recommendation Agent",
    category: "AI Agents",
    description:
      "An intelligent stock analysis system built with LangChain and LangGraph that integrates real-time market data, news understanding, and user-specific risk preferences to generate context-aware investment insights, powered by OpenAI models and Claude Code.",
    technologies: ["LangChain", "LangGraph", "OpenAI", "Python"],
    image: "/images/stock-analysis-agent.jpg",
    github: "https://github.com/PSanjana/Stock-Analysis",
    featured: true,
  },
  {
    id: "skin-cancer-detection",
    title: "Skin Cancer Detection",
    category: "Machine Learning",
    description:
      "A deep ensemble for skin lesion classification combining ResNet50, EfficientNetB0/B3, and Swin Transformer, using stratified splits, targeted augmentation, and logit-averaging / majority-vote inference for robust model evaluation.",
    technologies: ["PyTorch", "ResNet50", "EfficientNet", "Swin Transformer"],
    image: "/images/skin-cancer-detection.jpg",
    github: "https://github.com/PSanjana/skin-lesion-classification-ensemble",
    featured: true,
  },
  {
    id: "multimodal-misinformation-detection",
    title: "Multimodal Misinformation Detection",
    category: "NLP + Computer Vision",
    description:
      "A RoBERTa–CLIP hybrid model for fake news detection from image-text pairs, with data cleaning and preprocessing across multimodal datasets, and LLaVA integrated to generate interpretable natural-language explanations for model predictions.",
    technologies: ["RoBERTa", "CLIP", "LLaVA"],
    image: "/images/misinformation-detection.jpg",
    github: "https://github.com/PSanjana/multimodal-misinformation-detection",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const additionalProjects = projects.filter((p) => !p.featured);

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

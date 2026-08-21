import { motion } from "framer-motion";
import { Github, ArrowUpRight, Trophy, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "@/data/types";
import { ProjectTech } from "./ProjectTech";
import { ProjectMetrics } from "./ProjectMetrics";

export function FeaturedProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12"
    >
      <div className={`lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}>
        <Link
          to={`/projects/${project.id}`}
          className="group block overflow-hidden rounded-2xl border border-border bg-surface"
        >
          {project.image ? (
            <div
              className={`aspect-[16/10] w-full ${
                project.imageFit === "contain" ? "flex items-center justify-center bg-[#0b0b0e] p-3" : ""
              }`}
            >
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                className={
                  project.imageFit === "contain"
                    ? "max-h-full max-w-full rounded-md object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    : "h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                }
              />
            </div>
          ) : (
            <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 bg-accent-surface text-accent">
              {project.award ? (
                <Trophy className="h-9 w-9" aria-hidden="true" />
              ) : (
                <Sparkles className="h-9 w-9" aria-hidden="true" />
              )}
              <span className="font-display text-sm font-medium">{project.title}</span>
            </div>
          )}
        </Link>
      </div>

      <div className={`lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}>
        {project.award && (
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted">
            <Trophy className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            {project.award}
          </div>
        )}

        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {project.category}
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          <Link to={`/projects/${project.id}`} className="hover:underline">
            {project.title}
          </Link>
        </h3>
        <p className="mt-4 text-[15px] leading-relaxed text-muted">
          {project.description}
        </p>

        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-6">
            <ProjectMetrics metrics={project.metrics} />
          </div>
        )}

        <div className="mt-6">
          <ProjectTech technologies={project.technologies} max={6} />
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent"
            >
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              Live demo
            </a>
          )}
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink"
          >
            Case study
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

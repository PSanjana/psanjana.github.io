import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ArrowUpRight, Trophy } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { getProjectById } from "@/data/projects";
import { ProjectMetrics } from "@/components/projects/ProjectMetrics";

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Sanjana Paniyadi`;
    }
    return () => {
      document.title = "Sanjana Paniyadi — Software Engineer";
    };
  }, [project]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <article className="pb-24 pt-28 sm:pt-32">
      <Container className="max-w-4xl">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to projects
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8"
        >
          {project.award && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted">
              <Trophy className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              {project.award}
            </div>
          )}

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {project.category}
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
            {project.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                View source
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
          </div>
        </motion.header>

        {project.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`mt-10 overflow-hidden rounded-2xl border border-border ${
              project.imageFit === "contain" ? "bg-[#0b0b0e] p-3 sm:p-6" : ""
            }`}
          >
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className={
                project.imageFit === "contain"
                  ? "mx-auto max-h-[70vh] w-auto rounded-md object-contain"
                  : "w-full object-cover"
              }
            />
          </motion.div>
        )}

        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-12">
            <ProjectMetrics metrics={project.metrics} />
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">Overview</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-base">
              {project.description}
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-ink">
              Technologies
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </article>
  );
}

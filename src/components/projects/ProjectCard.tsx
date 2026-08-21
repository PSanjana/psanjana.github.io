import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "@/data/types";
import { Card } from "@/components/ui/Card";
import { ProjectTech } from "./ProjectTech";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col overflow-hidden transition-colors hover:border-ink/20">
        <Link to={`/projects/${project.id}`} className="block overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <div className="aspect-[16/10] w-full bg-accent-surface" />
          )}
        </Link>

        <div className="flex flex-1 flex-col p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            {project.category}
          </p>
          <h3 className="mt-2 font-display text-lg font-semibold text-ink">
            <Link to={`/projects/${project.id}`} className="hover:underline">
              {project.title}
            </Link>
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="mt-5">
            <ProjectTech technologies={project.technologies} max={3} />
          </div>

          <div className="mt-5 flex items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-ink hover:text-accent"
              >
                <Github className="h-3.5 w-3.5" aria-hidden="true" />
                Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-ink hover:text-accent"
              >
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                Demo
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

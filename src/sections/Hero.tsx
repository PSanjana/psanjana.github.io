import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { socialLinks, resumeHref } from "@/data/social";
import { experience } from "@/data/experience";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  const current = experience[0];
  const github = socialLinks.find((l) => l.icon === "github");
  const linkedin = socialLinks.find((l) => l.icon === "linkedin");

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-24 sm:pt-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[70vh] bg-[radial-gradient(60%_50%_at_50%_0%,rgb(var(--color-accent-surface))_0%,transparent_70%)] opacity-60"
      />

      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div
            custom={0}
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Currently building at {current.company}
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            className="font-display text-[clamp(2.5rem,6vw,4.25rem)] font-semibold leading-[1.05] tracking-tight text-ink"
          >
            Sanjana Paniyadi
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="mt-5 text-[clamp(1.125rem,2.4vw,1.5rem)] font-medium leading-snug text-ink/80"
          >
            Software engineer building scalable systems and AI-powered applications
            across backend, full-stack, and AI engineering.
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            4+ years shipping distributed APIs, full-stack products, and LLM-driven
            tools — from high-scale platform infrastructure at Zoho to agentic AI
            systems today.
          </motion.p>

          <motion.div custom={4} variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <ButtonLink href="#work">View My Work</ButtonLink>
            <ButtonLink
              href={resumeHref}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </ButtonLink>

            <div className="ml-1 flex items-center gap-1">
              {github && (
                <a
                  href={github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-ink"
                >
                  <Github className="h-5 w-5" aria-hidden="true" />
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-ink"
                >
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

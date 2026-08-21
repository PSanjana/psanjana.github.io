import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { socialLinks, email } from "@/data/social";

const icons = { github: Github, linkedin: Linkedin, mail: Mail };

export function Contact() {
  return (
    <Section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl border border-border bg-surface px-6 py-16 text-center sm:px-12 sm:py-24"
      >
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
          Have something interesting to build?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base text-muted sm:text-lg">
          I'm always glad to talk backend architecture, full-stack products, or
          applied AI. Reach out.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href={`mailto:${email}`}>
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email me
          </ButtonLink>

          <div className="flex items-center gap-2">
            {socialLinks
              .filter((l) => l.icon !== "mail")
              .map((link) => {
                const Icon = icons[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink transition-colors hover:bg-raised"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

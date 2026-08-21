import { Github, Linkedin, Mail } from "lucide-react";
import { Container } from "./Container";
import { socialLinks } from "@/data/social";

const icons = { github: Github, linkedin: Linkedin, mail: Mail };

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-sm font-semibold text-ink">Sanjana Paniyadi</p>
          <p className="mt-1 text-xs text-muted">
            &copy; {year} · Built with React &amp; TypeScript
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = icons[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-ink/30 hover:text-ink"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </Container>
    </footer>
  );
}

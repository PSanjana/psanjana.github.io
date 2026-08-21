import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

export function ExternalLink({
  href,
  children,
  className = "",
  showIcon = true,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  showIcon?: boolean;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-1 text-ink underline decoration-border decoration-1 underline-offset-4 transition-colors hover:decoration-accent ${className}`}
    >
      {children}
      {showIcon && <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />}
    </a>
  );
}

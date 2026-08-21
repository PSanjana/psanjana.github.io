import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { resumeHref } from "@/data/social";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
  closeIcon: ReactNode;
}

export function MobileMenu({ open, onClose, links, closeIcon }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-bg md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex h-16 items-center justify-between px-5 sm:px-8">
            <span className="font-display text-base font-semibold text-ink">Menu</span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink"
            >
              {closeIcon}
            </button>
          </div>

          <motion.nav
            initial="closed"
            animate="open"
            variants={{
              open: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
            }}
            className="flex flex-col gap-2 px-5 pt-6 sm:px-8"
            aria-label="Mobile primary"
          >
            {links.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={onClose}
                variants={{
                  closed: { opacity: 0, y: 12 },
                  open: { opacity: 1, y: 0 },
                }}
                className="border-b border-border py-4 font-display text-2xl font-semibold text-ink"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>

          <div className="px-5 pt-8 sm:px-8">
            <ButtonLink
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full"
            >
              Resume
            </ButtonLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

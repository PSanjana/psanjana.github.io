import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" className="bg-surface/40">
      <SectionHeading
        eyebrow="Career"
        title="Professional experience"
        description="Roles spanning platform infrastructure, full-stack product work, and applied AI."
      />

      <div className="relative mt-14 sm:mt-16">
        <div
          aria-hidden="true"
          className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-border sm:block"
        />

        <ol className="flex flex-col gap-12">
          {experience.map((role, index) => (
            <motion.li
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="relative sm:pl-10"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-1.5 hidden h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg sm:block"
              />

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_2fr] sm:gap-8">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                    {role.start} — {role.end}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                    {role.role}
                  </h3>
                  <p className="text-sm text-accent">{role.company}</p>
                </div>

                <div>
                  <p className="text-[15px] leading-relaxed text-muted">{role.summary}</p>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {role.achievements.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-sm leading-relaxed text-ink/90"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {role.technologies && role.technologies.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                      {role.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-border bg-bg px-2.5 py-1 font-mono text-[11px] text-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow="Toolkit" title="Engineering toolkit" />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <h3 className="font-display text-sm font-semibold text-ink">{group.label}</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {group.skills.map((skill) => (
                <li key={skill} className="text-sm text-muted">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

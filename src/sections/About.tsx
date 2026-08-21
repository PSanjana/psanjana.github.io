import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="About" title="A bit about me" />
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-border"
          >
            <img
              src="/images/profile.jpg"
              alt="Portrait of Sanjana Paniyadi"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-5 text-[15px] leading-relaxed text-muted sm:text-base lg:col-span-8 lg:pt-[4.75rem]"
        >
          <p>
            I'm a software engineer with 4+ years of experience building scalable
            backend systems and full-stack products, and more recently, applied AI
            systems.
          </p>
          <p>
            I like problems where the constraints are the interesting part —
            designing APIs that hold up under real load, untangling a query layer
            so it scales past its original assumptions, or wiring an LLM into a
            workflow so it's reliable rather than just impressive in a demo.
          </p>
          <p>
            At Zoho, that meant owning REST APIs and data pipelines processing up
            to 200,000 records per job inside a microservices ecosystem. More
            recently, it's meant building AI-powered systems, like a stock
            recommendation agent that blends real-time market data, sentiment
            analysis, and user risk profiling into a single set of insights.
          </p>
          <p>
            I'm currently completing a Master's in Computer Science (AI/ML) at the
            University at Buffalo, sharpening the ML foundations behind that work.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

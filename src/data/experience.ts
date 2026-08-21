import type { ExperienceRole } from "./types";

export const experience: ExperienceRole[] = [
  {
    id: "holiday-channel",
    company: "Holiday Channel",
    role: "Software Engineer",
    start: "Jun 2026",
    end: "Present",
    summary:
      "Building the vendor-facing operations platform used to run orders, customers, and regional performance.",
    achievements: [
      "Built a vendor-facing operations dashboard using Next.js to manage orders, customers, geographic distribution, and business metrics across 5+ operational views, improving visibility into vendor activity and regional performance.",
      "Implemented multi-tenancy, role-based access control, and authorization workflows to securely isolate data across multiple vendor accounts and support permission-based access for 3+ user roles.",
    ],
    technologies: ["Next.js", "RBAC", "Multi-tenancy"],
  },
  {
    id: "kubby",
    company: "Kubby",
    role: "Software Engineer",
    start: "May 2025",
    end: "Nov 2025",
    summary:
      "Shipped internal platform features, AI-assisted backend services, and a headless-CMS marketing site.",
    achievements: [
      "Built a scalable employee web platform used by internal stakeholders with responsive UI and reusable components, reducing onboarding time by 50% and improving user experience across workflows using React, Tailwind CSS, and JavaScript.",
      "Implemented backend services and API integrations using Node.js and Python with AI-assisted coding (GitHub Copilot), leveraging REST APIs and MongoDB on AWS.",
      "Integrated LLM-powered features into product workflows using prompt engineering and external APIs, improving automation and data quality and enabling data-driven decision-making.",
      "Revamped Kubby's marketing website using a headless CMS architecture with Prismic, delivering reusable page templates while meeting accessibility and responsiveness compliance standards using Next.js.",
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", "MongoDB", "AWS", "Prismic"],
  },
  {
    id: "zoho",
    company: "Zoho Corporation",
    role: "Software Developer",
    start: "Jul 2020",
    end: "Jul 2024",
    summary:
      "Owned high-scale REST APIs and query infrastructure inside Zoho CRM's microservices ecosystem.",
    achievements: [
      "Owned the design and implementation of distributed, cloud-native REST APIs and data pipelines for internal platform and bulk data within a microservices ecosystem, supporting high-scale processing of 200,000 records per job for public and internal teams, powered by Java, Spring, ORM-based persistence, and Kafka-driven workflows.",
      "Improved system reliability via callback-based automation for job completion and a Redis-backed fallback, reducing job polling by 34% and supporting monitoring metrics, incident triage, and SLA-driven recovery.",
      "Led the redesign of Zoho CRM's Export UI using Lyte (React), expanding export capacity from 3k to 200k records and introducing a configurable builder with filters and custom views from design to production.",
      "Designed and implemented a declarative distributed query execution layer (COQL) using tree-based query planning and GraphQL-inspired APIs, enabling nested, relational data access up to depth 5 across CRM modules.",
    ],
    technologies: ["Java", "Spring", "Kafka", "PostgreSQL", "Redis", "React"],
  },
  {
    id: "wheels-india",
    company: "Wheels India",
    role: "Winter Intern",
    start: "Dec 2019",
    end: "Mar 2020",
    summary: "Prototyped a defect-detection pipeline for mechanical components.",
    achievements: [
      "Designed, developed, and tested a system to identify defects in mechanical components from original component images using digital image processing.",
    ],
    technologies: ["Digital Image Processing"],
  },
  {
    id: "ramco-systems",
    company: "Ramco Systems Ltd",
    role: "Winter Intern",
    start: "Dec 2018",
    end: "Mar 2019",
    summary: "Built a GPS-based vehicle management system to prevent fleet misuse.",
    achievements: [
      "Designed, developed, and tested Mace Van Management System, a GPS-based system to prevent misuse of vehicles belonging to the organization.",
    ],
    technologies: ["GPS Systems"],
  },
];

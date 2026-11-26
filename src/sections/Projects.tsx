"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { ExternalLink, Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const projects = [
  {
    title: "EduCRM",
    role: "Creator & Full-Stack Developer · 2026",
    description:
      "Live web platform for learning centers, now managing 450+ students and 20+ teachers. Admin and teacher panels, attendance with automatic Telegram notices to parents, debt tracking and cashbox reports exported to Excel / PDF.",
    image: "/projects/educrm.jpg",
    tech: ["Node.js", "React / Next.js", "PostgreSQL"],
    demo: "https://educrm.dev",
    github: "#",
  },
  {
    title: "StudyNext",
    role: "Frontend Developer, team of 2 · 2026",
    description:
      "Directory of Uzbekistan's higher education institutions: 124 universities across all 14 regions, with a score-based finder that shows grant and contract options.",
    image: "/projects/studynext.jpg",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    demo: "https://studynext.uz",
    github: "#",
  },
  {
    title: "Training-center CRM",
    role: "Backend Developer · 2025",
    description:
      "Backend of a modular CRM for an education center: Students, Courses, Payments and Lessons / Attendance modules that work independently and link where needed.",
    image: "/projects/crm.jpg",
    tech: ["Node.js", "Express.js", "PostgreSQL", "Knex.js", "JWT"],
    demo: "https://crm-frontend-beta-inky.vercel.app/login",
    github: "https://github.com/murtazoyevolimjon/crm-frontend.git",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Featured Projects"
          subtitle="Live products I have built for learning centers and university applicants."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card glass className="overflow-hidden border-primary/10 transition-all group-hover:border-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/5 h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <p className="text-sm font-medium text-primary">{project.role}</p>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-4 mt-auto">
                  {project.demo && project.demo !== "#" && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-full items-center justify-center rounded-md border border-input bg-background px-3 text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Link>
                  )}
                  {project.github && project.github !== "#" && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-full items-center justify-center rounded-md border border-input bg-background px-3 text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      <Cpu size={16} className="mr-2" />
                      Code
                    </Link>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


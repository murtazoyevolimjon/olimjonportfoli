"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "LMS",
    location: "Tashkent, Uzbekistan",
    period: "Recent",
    description: "Built a scalable Learning Management System (LMS) platform where students can access online courses, track learning progress, and purchase educational content.",
    responsibilities: [
      "Built frontend and backend modules",
      "Implemented authentication with JWT",
      "Worked with PostgreSQL and Prisma ORM",
      "Developed responsive UI using React.js",
      "Designed scalable backend architecture",
    ],
    tech: ["Node.js", "React.js", "PostgreSQL", "Prisma ORM", "JWT"],
  },
  {
    title: "Backend Developer",
    company: "CRM System",
    location: "Tashkent, Uzbekistan",
    period: "Previous",
    description: "Developed backend architecture for a CRM system used by educational institutions and training centers.",
    responsibilities: [
      "Created modular CRM backend architecture",
      "Managed students, payments, lessons, and attendance modules",
      "Built REST APIs using Express.js",
      "Worked with PostgreSQL and Knex.js",
      "Implemented JWT authorization",
    ],
    tech: ["Node.js", "Express.js", "PostgreSQL", "Knex.js", "JWT"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="bg-accent/5 py-24">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Work Experience"
          subtitle="A history of building impactful systems and scalable architectures."
        />

        <div className="relative mx-auto max-w-4xl space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 h-full w-px bg-border md:left-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:left-1/2" />

              <div className="ml-16 md:ml-0 md:w-1/2 md:px-12">
                <Card glass className="hover:border-primary/20 transition-all">
                  <CardHeader>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <div className="flex items-center text-sm text-primary">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    <CardDescription className="flex items-center text-sm">
                      <Briefcase size={14} className="mr-1" />
                      {exp.company}
                      <span className="mx-2">•</span>
                      <MapPin size={14} className="mr-1" />
                      {exp.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                    <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                          {t}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

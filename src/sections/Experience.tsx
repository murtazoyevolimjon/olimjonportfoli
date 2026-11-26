"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "IT Center, training center",
    period: "Jun 2026 – Present",
    description:
      "Teach an 8-month Frontend course (HTML/CSS, JavaScript, TypeScript, Git, React, Next.js) to ~20 students aged 15+.",
    responsibilities: [
      "Designed the full curriculum and teaching materials (slides, code examples, exercises, exams)",
      "Students finish with a deployed portfolio project on Vercel",
    ],
    tech: ["HTML/CSS", "JavaScript", "TypeScript", "Git", "React", "Next.js"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="bg-accent/5 py-24">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Work Experience"
          subtitle="Where I work and what I do there."
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

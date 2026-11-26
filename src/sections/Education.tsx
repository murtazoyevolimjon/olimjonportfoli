"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    school: "Sharof Rashidov Samarkand State University",
    period: "2023 – 2028 (expected)",
    degree: "B.Sc. Computer Engineering",
    description: "Extramural format (5-year program), studying alongside work.",
  },
  {
    school: "Najot Ta'lim",
    period: "Sep 2025 – Apr 2026",
    degree: "Bootcamp: Full Stack — Node.js + React.js",
    description: "Foundation + Result programs, completed with a certificate.",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Education"
          subtitle="My academic background and continuous learning journey."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card glass className="h-full border-primary/10 hover:border-primary/20 transition-all">
                <CardHeader>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <CardTitle className="text-xl">{edu.school}</CardTitle>
                    <div className="flex items-center text-sm text-primary">
                      <Calendar size={14} className="mr-1" />
                      {edu.period}
                    </div>
                  </div>
                  <CardDescription className="flex items-center text-sm">
                    <GraduationCap size={14} className="mr-1" />
                    {edu.degree}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

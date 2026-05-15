"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    school: "Najot Ta’lim",
    location: "Tashkent, Uzbekistan",
    period: "April 2025 – Present",
    degree: "Foundation of Programming and Full Stack Bootcamp",
    description: "Intensive training on full-stack development, covering core programming principles and modern web technologies.",
  },
  {
    school: "Tashkent University of Information Technologies",
    location: "Tashkent, Uzbekistan",
    period: "Ongoing",
    degree: "Bachelor of Science (B.Sc.) in Software Engineering",
    description: "Currently studying Software Engineering in correspondence format, focusing on software design and development.",
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
                    <span className="mx-2">•</span>
                    <MapPin size={14} className="mr-1" />
                    {edu.location}
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

"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Code2, Database, GraduationCap, ShieldCheck } from "lucide-react";

const stats = [
  { label: "Full-Stack Development", icon: Code2, color: "text-blue-500" },
  { label: "REST APIs & Role-Based Access", icon: ShieldCheck, color: "text-purple-500" },
  { label: "PostgreSQL & Database Design", icon: Database, color: "text-cyan-500" },
  { label: "Teaching Frontend", icon: GraduationCap, color: "text-indigo-500" },
];

export const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="About Me"
          subtitle="I build real products for the education sector."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Products that people use every day</h3>
            <p className="text-lg text-muted-foreground">
              I&apos;m a Full-Stack developer working with Node.js, React / Next.js and PostgreSQL.
              I created EduCRM, a live platform that learning centers use to manage 450+ students
              and 20+ teachers, and built the Next.js interface of StudyNext, a directory of
              124 universities across Uzbekistan, in a team of two.
            </p>
            <p className="text-lg text-muted-foreground">
              I also teach an 8-month Frontend course at IT Center, where I designed the full
              curriculum and help students ship their own deployed projects. I&apos;m comfortable
              with REST APIs, role-based access and relational database design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card glass className="h-full border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="flex flex-col items-center justify-center p-8 text-center space-y-4">
                    <stat.icon className={stat.color} size={40} />
                    <span className="font-semibold">{stat.label}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

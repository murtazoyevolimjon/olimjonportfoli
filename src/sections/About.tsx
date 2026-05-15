"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Code2, Database, Layout, Server } from "lucide-react";

const stats = [
  { label: "Full-Stack Development", icon: Code2, color: "text-blue-500" },
  { label: "Microservices Architecture", icon: Server, color: "text-purple-500" },
  { label: "REST & GraphQL APIs", icon: Layout, color: "text-cyan-500" },
  { label: "Database Design", icon: Database, color: "text-indigo-500" },
];

export const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="About Me"
          subtitle="I build scalable, efficient, and user-centric web applications."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Passionate about Architecture & Scalability</h3>
            <p className="text-lg text-muted-foreground">
              I am a passionate Full-Stack Developer focused on building scalable and interactive web applications.
              I have experience working with modern backend and frontend technologies including
              Node.js, React.js, PostgreSQL, Prisma ORM, Express.js, and Docker.
            </p>
            <p className="text-lg text-muted-foreground">
              I enjoy solving real-world problems, learning from experienced developers,
              and improving my architecture and system design skills. My goal is to create
              impactful solutions that are both high-performing and maintainable.
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

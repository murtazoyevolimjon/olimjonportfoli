"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Cpu } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "LMS Platform",
    description: "Online education platform with course management and student progress tracking.",
    image: "https://images.unsplash.com/photo-1501504905953-f8c97f2d819b?w=800&q=80",
    tech: ["Node.js", "React.js", "PostgreSQL", "Prisma ORM"],
    demo: "#",
    github: "https://github.com/murtazoyevolimjon",
  },
  {
    title: "Educational CRM System",
    description: "CRM platform for managing students, payments, attendance, and courses.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    tech: ["Express.js", "PostgreSQL", "Knex.js", "JWT"],
    demo: "#",
    github: "https://github.com/murtazoyevolimjon",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Featured Projects"
          subtitle="A showcase of my recent work in building complex systems and user-friendly interfaces."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
              <Card glass className="overflow-hidden border-primary/10 transition-all group-hover:border-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/5">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-4">
                  <Button variant="outline" size="sm" className="w-full" onClick={() => window.open(project.demo, "_blank")}>
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="w-full" onClick={() => window.open(project.github, "_blank")}>
                    <Cpu size={16} className="mr-2" />
                    Code
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

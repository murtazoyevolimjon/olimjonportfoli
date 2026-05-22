"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { ExternalLink, Cpu, ImageOff } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "LMS Platform",
    description: "Online education platform with course management and student progress tracking.",
    image: "/projects/lms-platform.jpg",
    tech: ["Node.js", "React.js", "PostgreSQL", "Prisma ORM"],
    demo: "https://lms-platform-demo.vercel.app",
    github: "https://github.com/murtazoyevolimjon",
  },
  {
    title: "Educational CRM System",
    description: "CRM platform for managing students, payments, attendance, and courses.",
    image: "/projects/educational-crm.jpg",
    tech: ["Express.js", "PostgreSQL", "Knex.js", "JWT"],
    demo: "https://edu-crm-demo.vercel.app",
    github: "https://github.com/murtazoyevolimjon",
  },
  {
    title: "Personal Portfolio",
    description: "Modern portfolio website built with Next.js, TypeScript and Tailwind CSS.",
    image: "/projects/portfolio.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demo: "https://portfolio-murtazoyev.vercel.app",
    github: "https://github.com/murtazoyevolimjon",
  },
];

interface ProjectImageProps {
  src: string;
  alt: string;
}

const ProjectImage = ({ src, alt }: ProjectImageProps) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-muted">
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          fill
          quality={100}
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center space-y-2 bg-secondary/20 text-muted-foreground">
          <ImageOff size={40} strokeWidth={1.5} />
          <p className="px-4 text-center text-sm font-medium">{alt}</p>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Featured Projects"
          subtitle="A showcase of my recent work in building complex systems and user-friendly interfaces."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card glass className="flex h-full flex-col overflow-hidden border-primary/10 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/10">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer overflow-hidden"
                >
                  <ProjectImage src={project.image} alt={project.title} />
                </a>

                <CardHeader className="flex-grow">
                  <CardTitle className="transition-colors group-hover:text-primary">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="gap-3 pt-0">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-input bg-background font-medium transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-input bg-background font-medium transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Cpu size={18} />
                    Code
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

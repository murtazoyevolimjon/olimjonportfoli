"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";

const skillCategories = [
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "GraphQL", "REST API", "Socket.io", "Passport.js", "RabbitMQ", "Microservices"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    title: "ORMs & Tools",
    skills: ["Prisma ORM", "Sequelize ORM", "Knex.js", "Mongoose ODM", "Git & GitHub", "Docker", "AWS Cloud", "CI/CD", "Jest", "E2E Testing"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="bg-accent/5 py-24">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="My technical toolkit for building modern web applications."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card glass className="h-full border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-bold text-primary">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-accent/50 px-3 py-1 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

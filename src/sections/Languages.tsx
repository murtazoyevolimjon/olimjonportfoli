"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";

const languages = [
  { name: "Uzbek", level: "Native", percentage: 100 },
  { name: "English", level: "Upper-Intermediate", percentage: 80 },
  { name: "Russian", level: "Basic", percentage: 40 },
];

export const Languages = () => {
  return (
    <section id="languages" className="bg-accent/5 py-24">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Languages"
          subtitle="Communicating effectively across different linguistic backgrounds."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card glass className="border-primary/10">
                <CardContent className="p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold">{lang.name}</h3>
                    <span className="text-sm font-medium text-primary">{lang.level}</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-accent/50">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                    />
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

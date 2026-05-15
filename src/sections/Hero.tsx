"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroScene } from "@/components/HeroScene";

const titles = [
  "Full-Stack Developer",
  "Node.js Developer",
  "React.js Engineer",
  "Backend Enthusiast",
  "Microservices Developer",
];

export const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText.length === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <HeroScene />

      <div className="container relative z-10 mx-auto px-6 text-center md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Available for new opportunities
          </div>

          <h1 className="text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            Hi, I&apos;m <span className="text-gradient">Olimjon</span>
          </h1>

          <div className="h-12 text-2xl font-semibold text-muted-foreground sm:text-3xl md:text-4xl">
            {displayText}
            <span className="animate-pulse text-primary">|</span>
          </div>

          <p className="mx-auto max-w-[800px] text-lg text-muted-foreground md:text-xl">
            I am a Full-Stack Developer eager to learn from experts and work on real scalable projects.
            I have practical experience with Monolith and Microservices architecture, CRM systems,
            SQL transactions, and interactive web applications.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Button size="lg" className="group" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Projects
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
            </Button>
            <Button variant="ghost" size="lg" className="group">
              <Download size={18} className="mr-2" />
              Download CV
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} className="animate-bounce text-muted-foreground" />
      </motion.div>
    </section>
  );
};

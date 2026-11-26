"use client";

import { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown, FileText } from "lucide-react";
import { Button, buttonClasses } from "@/components/ui/Button";
import { CvModal, CV_URL, CV_FILENAME } from "@/components/CvModal";

const HeroScene = dynamic(
  () => import("@/components/HeroScene").then((mod) => mod.HeroScene),
  { ssr: false }
);

export const Hero = () => {
  const [cvOpen, setCvOpen] = useState(false);
  const closeCv = useCallback(() => setCvOpen(false), []);

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

          <p className="text-2xl font-semibold text-muted-foreground sm:text-3xl md:text-4xl">
            Full-Stack Developer
          </p>

          <p className="mx-auto max-w-[800px] text-lg text-muted-foreground md:text-xl">
            Full-Stack developer (Node.js, React / Next.js, PostgreSQL) building education-sector
            products: EduCRM, a live CRM for learning centers, and StudyNext, a university
            admissions directory built in a team of two.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Button size="lg" className="group" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Projects
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
            </Button>
            <Button variant="ghost" size="lg" onClick={() => setCvOpen(true)}>
              <FileText size={18} className="mr-2" />
              View CV
            </Button>
            <a
              href={CV_URL}
              download={CV_FILENAME}
              className={buttonClasses("ghost", "lg")}
            >
              <Download size={18} className="mr-2" />
              Download CV
            </a>
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

      <CvModal open={cvOpen} onClose={closeCv} />
    </section>
  );
};

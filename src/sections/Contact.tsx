"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Send, Mail, Phone, Globe, ArrowUpRight, type LucideIcon } from "lucide-react";

type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  note?: string;
  external?: boolean;
};

const links: ContactLink[] = [
  {
    label: "Telegram",
    value: "@Olimjon_Otabekovich",
    href: "https://t.me/Olimjon_Otabekovich",
    icon: Send,
    note: "Fastest reply",
    external: true,
  },
  {
    label: "Email",
    value: "murtazoyevolimjon03@gmail.com",
    href: "mailto:murtazoyevolimjon03@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+998 88 579 03 09",
    href: "tel:+998885790309",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "Olimjon Murtazoyev",
    href: "https://linkedin.com/in/olimjon-murtazoyev-384840385",
    icon: Globe,
    external: true,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? Feel free to reach out!"
        />

        <div className="mx-auto max-w-4xl space-y-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground"
          >
            I&apos;m currently looking for new opportunities and my inbox is always open.
            Whether you have a question or just want to say hi, I&apos;ll get back to you as soon as I can.
          </motion.p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {links.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative flex items-center gap-4 rounded-xl border border-primary/10 bg-background/50 p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{link.label}</span>
                      {link.note && (
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                          {link.note}
                        </span>
                      )}
                    </p>
                    <p className="truncate font-medium">{link.value}</p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

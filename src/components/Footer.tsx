import { Mail, Phone, Cpu, Globe } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tighter">
              <span className="text-gradient">OM.</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Building scalable and interactive web applications with passion and precision.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="#about" className="hover:text-primary">About</Link>
              <Link href="#experience" className="hover:text-primary">Experience</Link>
              <Link href="#projects" className="hover:text-primary">Projects</Link>
              <Link href="#contact" className="hover:text-primary">Contact</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/murtazoyevolimjon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Cpu size={20} className="hover:text-primary transition-colors" />
              </a>
              <a href="https://linkedin.com/in/olimjon-murtazoyev-384840385" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Globe size={20} className="hover:text-primary transition-colors" />
              </a>
              <a href="mailto:murtazoyevolimjon03@gmail.com" aria-label="Email">
                <Mail size={20} className="hover:text-primary transition-colors" />
              </a>
              <a href="tel:+998885790309" aria-label="Phone">
                <Phone size={20} className="hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Olimjon Murtazoyev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

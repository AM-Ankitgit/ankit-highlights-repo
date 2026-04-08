import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative container text-center">
        <div className="animate-fade-in-up">
          <p className="font-heading text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6">
            <span className="text-gradient">Ankit</span>{" "}
            <span className="text-foreground">Mahalle</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            AI Engineer specializing in{" "}
            <span className="text-primary font-medium">Agentic AI</span> &{" "}
            <span className="text-primary font-medium">Generative AI</span>{" "}
            systems with 3+ years of experience building production-grade AI architectures.
          </p>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href="https://github.com/AM-Ankitgit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-card hover:border-primary hover:text-primary transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ankit-mahalle/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-card hover:border-primary hover:text-primary transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:ankitmahalle12@gmail.com"
              className="p-3 rounded-lg border border-border bg-card hover:border-primary hover:text-primary transition-all"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Scroll indicator */}
          <a href="#about" className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

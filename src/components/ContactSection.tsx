import { Mail, Phone, Github, Linkedin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container max-w-2xl text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">05.</span> Get In Touch
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            I'm always open to discussing AI projects, collaboration opportunities,
            or just having a chat about the latest in Agentic AI and LLM systems.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="mailto:ankitmahalle12@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all font-medium text-sm"
            >
              <Mail size={16} />
              ankitmahalle12@gmail.com
            </a>
            <a
              href="tel:+919168551170"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-all font-medium text-sm"
            >
              <Phone size={16} />
              +91 9168551170
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/AM-Ankitgit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ankit-mahalle/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-all"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;

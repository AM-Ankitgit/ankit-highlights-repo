import { Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    role: "Senior Software Engineer (AI Engineer)",
    company: "Infinite Computer Solutions",
    period: "May 2025 – Present",
    points: [
      "Architected Agentic AI–driven hybrid symbolic–neural system for automated UI flow discovery and analytics tagging across large-scale React codebases.",
      "Built multi-stage AI pipeline using Tree-sitter for AST-based extraction and LLM reasoning to detect CTAs and user journeys.",
      "Orchestrated safe, tool-driven code transformation workflows using LangGraph and MCP with structural validation and rollback safeguards.",
    ],
  },
  {
    role: "Machine Learning Developer",
    company: "Brainwired (Drakon Innovation Pvt. Ltd)",
    period: "May 2023 – May 2025",
    points: [
      "Developed end-to-end ML pipeline for livestock activity prediction, achieving 95% accuracy.",
      "Built and deployed livestock health monitoring RAG agent (Gau Bot) using LangChain, GPT, and ChromaDB.",
      "Led a team of ML engineers from proof of concept to deployment.",
    ],
  },
  {
    role: "Quality Control Engineer",
    company: "Raychem RPG Pvt. Ltd",
    period: "Aug 2021 – Jul 2022",
    points: [
      "Applied statistical methods and 5-Why analysis to identify root causes of quality issues.",
      "Developed real-time dashboards for data-driven decision-making.",
      "Implemented Poka-Yoke mistake-proofing via automated error detection.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">03.</span> Experience
          </h2>
          <div className="w-16 h-0.5 bg-primary mb-12" />
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="relative pl-12 md:pl-16">
                  <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                  <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h3 className="font-heading text-base font-bold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-primary text-sm flex items-center gap-2">
                          <Briefcase size={14} />
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground font-heading mt-1 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1 shrink-0">▹</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

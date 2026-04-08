import { ExternalLink, Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const articles = [
  {
    title: "Building Production-Ready RAG Pipelines with LangChain",
    description:
      "A deep dive into architecting RAG systems that scale — covering chunking strategies, embedding models, and retrieval optimization.",
    date: "2025",
    tags: ["RAG", "LangChain", "Production"],
    link: "https://github.com/AM-Ankitgit",
  },
  {
    title: "Agentic AI Design Patterns for Real-World Applications",
    description:
      "Exploring the core patterns behind autonomous AI agents — from tool-use to multi-step planning and self-correction.",
    date: "2025",
    tags: ["Agentic AI", "Design Patterns"],
    link: "https://github.com/AM-Ankitgit",
  },
  {
    title: "From MLOps to LLMOps: What Changes?",
    description:
      "How traditional MLOps practices evolve when you move to LLM-powered systems — evaluation, monitoring, and deployment differences.",
    date: "2024",
    tags: ["MLOps", "LLMOps", "DevOps"],
    link: "https://github.com/AM-Ankitgit",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding">
      <div className="container">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">06.</span> Blog & Articles
          </h2>
          <div className="w-16 h-0.5 bg-primary mb-12" />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <AnimatedSection key={article.title} delay={index * 0.1}>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full p-6 rounded-lg bg-card border border-border hover:border-primary/40 hover:glow-border transition-all"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar size={12} />
                  {article.date}
                </div>
                <h3 className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-3 leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {article.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded bg-primary/10 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
                  Read more <ExternalLink size={12} />
                </span>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

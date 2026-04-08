import { Brain, Cpu, Workflow } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "LLM & Agentic AI",
    description: "Building autonomous agents with LangGraph, MCP, and multi-stage reasoning pipelines.",
  },
  {
    icon: Cpu,
    title: "ML Engineering",
    description: "End-to-end ML pipelines from data processing to deployment with 95%+ accuracy.",
  },
  {
    icon: Workflow,
    title: "RAG & GenAI",
    description: "Production RAG systems using LangChain, ChromaDB, Pinecone, and vector search.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          <span className="text-primary">01.</span> About Me
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-12" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm an AI Engineer at <span className="text-foreground font-medium">Infinite Computer Solutions</span>, 
              specializing in designing and deploying production-grade AI architectures. My expertise lies in building 
              autonomous LLM agents, hybrid symbolic–neural systems, and RAG pipelines.
            </p>
            <p>
              Previously at <span className="text-foreground font-medium">Brainwired</span>, I developed end-to-end 
              machine learning pipelines for livestock monitoring, led a team of ML engineers, and built health monitoring 
              RAG agents that drove initial revenue generation.
            </p>
            <p>
              I hold a <span className="text-foreground font-medium">B.E. from Priyadarshani JL College of Engineering</span> and 
              am passionate about pushing the boundaries of what AI agents can accomplish in real-world applications.
            </p>
          </div>

          <div className="grid gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-lg bg-card border border-border hover:border-primary/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

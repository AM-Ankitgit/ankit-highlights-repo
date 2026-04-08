import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Complete LangChain & LangGraph",
    description: "Comprehensive guide and implementation of LangChain and LangGraph for building agentic AI workflows and multi-step reasoning pipelines.",
    tags: ["LangGraph", "LangChain", "Agents", "Python"],
    github: "https://github.com/AM-Ankitgit/Complete_LangChain_LangGraph-",
  },
  {
    title: "Agentic AI Patterns",
    description: "Collection of production-ready agentic AI design patterns for building autonomous LLM-powered systems.",
    tags: ["Agentic AI", "LLM", "Patterns"],
    github: "https://github.com/AM-Ankitgit/AGNTIC_AI_PATTERNS",
  },
  {
    title: "Complete MCP",
    description: "Full implementation of Model Context Protocol for orchestrating tool-driven AI agent interactions.",
    tags: ["MCP", "Python", "Agents"],
    github: "https://github.com/AM-Ankitgit/Complete_MCP",
  },
  {
    title: "MLOps with AWS Deployment",
    description: "End-to-end MLOps pipeline from scratch with full deployment on AWS, covering CI/CD and model serving.",
    tags: ["MLOps", "AWS", "CI/CD", "Docker"],
    github: "https://github.com/AM-Ankitgit/MLOPS_with_AWS_Deployment",
  },
  {
    title: "Indian GST Chatbot with Invoice Analysis",
    description: "AI-powered chatbot for Indian GST compliance with automated invoice analysis capabilities.",
    tags: ["RAG", "LLM", "Chatbot", "Finance"],
    github: "https://github.com/AM-Ankitgit/INDIAN-GST-chatbot-with-Invoice-analysis",
  },
  {
    title: "AI-Based Search Engine",
    description: "Intelligent search engine leveraging AI for semantic understanding and improved search relevance.",
    tags: ["Search", "AI", "NLP"],
    github: "https://github.com/AM-Ankitgit/AI_BASED_SEARCH_ENGINE",
  },
  {
    title: "Complete Deep Learning Algorithms",
    description: "Comprehensive collection of deep learning algorithms with TensorFlow and PyTorch, covering CNNs, RNNs, and pretrained models.",
    tags: ["Deep Learning", "TensorFlow", "PyTorch"],
    github: "https://github.com/AM-Ankitgit/Complete-Deep-Learning-Algorithms",
  },
  {
    title: "Eye-Controlled Mouse (OpenCV)",
    description: "Computer vision application using OpenCV for controlling mouse cursor with eye movements.",
    tags: ["OpenCV", "Computer Vision", "Python"],
    github: "https://github.com/AM-Ankitgit/OpenCV_EYE_CONTROLLED_MOUSE",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card/50">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          <span className="text-primary">04.</span> Projects
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-12" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group p-6 rounded-lg bg-background border border-border hover:border-primary/40 hover:glow-border transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug pr-4">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                >
                  <Github size={18} />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded bg-primary/10 text-primary font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/AM-Ankitgit?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all font-medium text-sm"
          >
            View All Projects <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

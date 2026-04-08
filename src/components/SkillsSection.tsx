const skillCategories = [
  {
    title: "AI & Generative AI",
    skills: ["OpenAI", "Gemini", "Claude", "LangGraph", "MCP", "A2A", "LangChain", "LlamaIndex", "RAG Pipelines", "Fine-Tuning", "Prompt Engineering"],
  },
  {
    title: "Machine Learning",
    skills: ["Scikit-Learn", "XGBoost", "PyTorch", "TensorFlow", "Keras", "Model Evaluation"],
  },
  {
    title: "Data & Engineering",
    skills: ["Python", "Pandas", "NumPy", "SQL", "NoSQL", "ChromaDB", "Pinecone", "Weaviate"],
  },
  {
    title: "Deployment & Ops",
    skills: ["Docker", "CI/CD", "DVC", "AWS SageMaker", "EC2", "S3", "Git", "Apache Kafka"],
  },
  {
    title: "Backend & APIs",
    skills: ["FastAPI", "Flask", "REST APIs", "Async Processing"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/50">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          <span className="text-primary">02.</span> Skills
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-lg bg-background border border-border hover:glow-border transition-all"
            >
              <h3 className="font-heading text-sm font-bold text-primary mb-4 tracking-wide">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-md bg-secondary text-secondary-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

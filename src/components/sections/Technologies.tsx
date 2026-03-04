import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";

const techCategories = [
  {
    title: "Languages",
    items: ["TypeScript", "Python", "Go", "Rust", "Java", "C#"],
  },
  {
    title: "Cloud",
    items: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Docker"],
  },
  {
    title: "Frameworks",
    items: ["React", "Node.js", "Django", ".NET", "Spring Boot", "FastAPI"],
  },
  {
    title: "Data & AI",
    items: ["PostgreSQL", "MongoDB", "Redis", "TensorFlow", "PyTorch", "Kafka"],
  },
];

export default function Technologies() {
  return (
    <section className="section-padding gradient-subtle">
      <div className="container-custom">
        <SectionHeader
          badge="Tech Stack"
          title="Powered by Modern Technology"
          description="We leverage best-in-class tools and frameworks to deliver robust, scalable solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-lg border border-border bg-card text-foreground hover:border-accent/30 hover:bg-accent/5 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

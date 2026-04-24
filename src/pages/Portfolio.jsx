import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/shared/SectionHeader";
import CTA from "@/components/sections/CTA";
import PageHero from "@/components/shared/PageHero";
import heroImage from "@/assets/page-portfolio.jpg";

const categories = ["All", "Cloud", "AI/ML", "Security", "Software", "DevOps"];

const projects = [
  {
    title: "Enterprise Cloud Migration",
    category: "Cloud",
    client: "Fortune 500 Bank",
    result: "45% cost reduction",
    description: "Full AWS migration of legacy banking infrastructure.",
  },
  {
    title: "AI Supply Chain Platform",
    category: "AI/ML",
    client: "Global Logistics Co.",
    result: "2M+ daily transactions",
    description: "Predictive analytics platform for supply chain optimization.",
  },
  {
    title: "Zero-Trust Security Framework",
    category: "Security",
    client: "Federal Agency",
    result: "Zero breaches in 3yr",
    description: "Enterprise-wide zero-trust architecture implementation.",
  },
  {
    title: "Real-Time Trading Platform",
    category: "Software",
    client: "FinTech Startup",
    result: "Sub-ms latency",
    description: "High-frequency trading platform handling 100K orders/second.",
  },
  {
    title: "Multi-Cloud Kubernetes Platform",
    category: "DevOps",
    client: "SaaS Enterprise",
    result: "10x deploy frequency",
    description: "Unified Kubernetes platform across AWS and GCP.",
  },
  {
    title: "Fraud Detection Engine",
    category: "AI/ML",
    client: "Insurance Provider",
    result: "$50M fraud prevented",
    description: "ML-powered fraud detection processing millions of claims.",
  },
  {
    title: "Healthcare Data Platform",
    category: "Cloud",
    client: "Hospital Network",
    result: "HIPAA Compliant",
    description: "Secure cloud platform for patient data analytics.",
  },
  {
    title: "SOC-as-a-Service",
    category: "Security",
    client: "Mid-Market Enterprise",
    result: "24/7 monitoring",
    description: "Managed security operations center with threat intelligence.",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="pt-[var(--nav-height)]">
      <PageHero
        badge="Selected Work"
        title={<>Work That <span className="gradient-text">Drives Results</span></>}
        description="From Fortune 500 enterprises to ambitious startups, we partner with bold teams to ship products that move the needle. Real projects. Real impact. Real numbers."
        image={heroImage}
        imageAlt="Mosaic of project dashboards and screens floating in space"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                layout
              >
                <Card className="surface-elevated card-hover h-full group cursor-pointer">
                  <CardContent className="p-8 flex flex-col h-full">
                    <Badge
                      variant="outline"
                      className="w-fit mb-4 text-xs border-accent/20 text-accent bg-accent/5"
                    >
                      {project.category}
                    </Badge>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {project.client}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between border-t border-border pt-4">
                      <span className="text-sm font-semibold text-accent">
                        {project.result}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}

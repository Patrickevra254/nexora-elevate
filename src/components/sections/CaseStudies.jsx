import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/shared/SectionHeader";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    title: "Cloud Migration for Fortune 500 Bank",
    description: "Migrated legacy infrastructure to AWS, reducing operational costs by 45% while improving system reliability to 99.99%.",
    tags: ["Cloud", "AWS", "FinTech"],
    metric: "45% cost reduction",
  },
  {
    title: "AI-Powered Supply Chain Platform",
    description: "Built an intelligent supply chain optimization platform processing 2M+ transactions daily with predictive analytics.",
    tags: ["AI/ML", "Python", "Logistics"],
    metric: "2M+ daily transactions",
  },
  {
    title: "Zero-Trust Security Architecture",
    description: "Designed and implemented enterprise-wide zero-trust security framework for a government agency.",
    tags: ["Security", "Government", "Compliance"],
    metric: "Zero breaches in 3 years",
  },
];

export default function CaseStudies() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader
          badge="Case Studies"
          title="Proven Impact, Real Results"
          description="See how we've helped organizations transform their technology landscape."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="surface-elevated card-hover h-full group cursor-pointer">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-accent/20 text-accent bg-accent/5">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="font-semibold text-lg mb-3 group-hover:text-accent transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                    {study.description}
                  </p>
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <span className="text-sm font-semibold text-accent">{study.metric}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

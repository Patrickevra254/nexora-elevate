import { motion } from "framer-motion";
import { Code2, Cloud, Shield, Brain, Settings, Monitor } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/shared/SectionHeader";

const services = [
  {
    icon: Code2,
    title: "Custom Software Engineering",
    description: "Full-stack development with modern architectures. From MVP to enterprise scale.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "AWS, Azure, and GCP expertise. Migration, optimization, and managed services.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Threat assessment, compliance frameworks, and 24/7 security operations.",
  },
  {
    icon: Brain,
    title: "AI & Automation",
    description: "Machine learning, intelligent automation, and data-driven decision systems.",
  },
  {
    icon: Settings,
    title: "IT Consulting",
    description: "Strategic technology advisory, digital transformation, and roadmap planning.",
  },
  {
    icon: Monitor,
    title: "DevOps & SRE",
    description: "CI/CD pipelines, infrastructure as code, and reliability engineering.",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding gradient-subtle">
      <div className="container-custom">
        <SectionHeader
          badge="Our Services"
          title="Engineering Excellence at Scale"
          description="We deliver end-to-end technology solutions that drive measurable business outcomes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="surface-elevated card-hover h-full group cursor-pointer">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

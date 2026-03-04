import { motion } from "framer-motion";
import { Code2, Cloud, Shield, Brain, Settings, Monitor, ArrowRight, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeader from "@/components/shared/SectionHeader";
import CTA from "@/components/sections/CTA";
import { Link } from "react-router-dom";

const services = [
  {
    id: "software",
    icon: Code2,
    title: "Custom Software Engineering",
    headline: "From architecture to deployment — engineered for scale.",
    description: "We build mission-critical software systems that handle millions of users. Our full-stack teams deliver web applications, APIs, microservices, and mobile platforms with clean architecture and rigorous testing.",
    features: ["Full-Stack Web Applications", "API Design & Development", "Microservices Architecture", "Mobile Applications", "Legacy Modernization", "Performance Optimization"],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Infrastructure",
    headline: "Cloud-native architecture for infinite scalability.",
    description: "Whether you're migrating to the cloud or optimizing existing infrastructure, our certified engineers design, build, and manage cloud environments across AWS, Azure, and GCP.",
    features: ["Cloud Migration", "Infrastructure as Code", "Kubernetes & Container Orchestration", "Cost Optimization", "Multi-Cloud Strategy", "24/7 Managed Services"],
  },
  {
    id: "security",
    icon: Shield,
    title: "Cybersecurity",
    headline: "Enterprise-grade security for a threat-rich world.",
    description: "Our security practice protects critical assets with comprehensive threat assessment, zero-trust architecture, and continuous monitoring. We help organizations achieve and maintain compliance.",
    features: ["Security Architecture", "Penetration Testing", "SOC Operations", "Compliance (SOC2, HIPAA, FedRAMP)", "Zero-Trust Implementation", "Incident Response"],
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI & Automation",
    headline: "Intelligent systems that learn, adapt, and scale.",
    description: "We build production-grade AI solutions — from predictive analytics to natural language processing. Our data scientists and ML engineers turn complex data into actionable intelligence.",
    features: ["Machine Learning Models", "NLP & Computer Vision", "Predictive Analytics", "Process Automation", "Data Pipeline Engineering", "AI Strategy Consulting"],
  },
  {
    id: "consulting",
    icon: Settings,
    title: "IT Consulting",
    headline: "Strategic guidance for digital transformation.",
    description: "Our consultants bring decades of enterprise experience. We help organizations define technology strategy, optimize operations, and build high-performing engineering teams.",
    features: ["Technology Strategy", "Digital Transformation", "Team Augmentation", "Architecture Review", "Vendor Assessment", "Technical Due Diligence"],
  },
  {
    id: "devops",
    icon: Monitor,
    title: "DevOps & SRE",
    headline: "Ship faster. Break nothing. Sleep soundly.",
    description: "We implement world-class CI/CD pipelines, observability platforms, and reliability engineering practices that accelerate delivery while maintaining production stability.",
    features: ["CI/CD Pipelines", "Infrastructure Automation", "Observability & Monitoring", "Chaos Engineering", "SLA Management", "On-Call Engineering"],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-[var(--nav-height)]">
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <h1 className="heading-xl mb-6">Technology Services <span className="gradient-text">Without Compromise</span></h1>
            <p className="text-lg text-muted-foreground">End-to-end technology solutions engineered for enterprise demands.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom space-y-16">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h2 className="heading-md mb-3">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-2">{service.headline}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <Button variant="hero" asChild>
                  <Link to="/contact">Discuss This Service <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <Card className="surface-elevated">
                  <CardContent className="p-8">
                    <h4 className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Capabilities</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-center gap-3">
                          <Check className="h-4 w-4 text-accent shrink-0" />
                          <span className="text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}

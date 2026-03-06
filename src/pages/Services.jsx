import { motion } from "framer-motion";
import { Code2, Globe, Smartphone, Palette, Layers, Monitor, ArrowRight, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import CTA from "@/components/sections/CTA";
import { Link } from "react-router-dom";
import heroServices from "@/assets/hero-services.jpg";

const services = [
  {
    id: "software",
    icon: Code2,
    title: "Software Development",
    headline: "Custom software engineered for your business.",
    description: "We build robust, scalable software systems using modern architectures. From backend APIs to full-stack platforms, we deliver clean, maintainable code that grows with your business.",
    features: ["Full-Stack Development", "API Design & Integration", "SaaS Platforms", "Legacy Modernization", "Performance Optimization", "Quality Assurance"],
  },
  {
    id: "webdesign",
    icon: Globe,
    title: "Web Design",
    headline: "Websites that captivate and convert.",
    description: "We design and develop stunning, responsive websites that make a lasting impression. Every pixel is intentional, every interaction is smooth, and every page is optimized for conversion.",
    features: ["Responsive Design", "Landing Pages", "Corporate Websites", "E-Commerce", "CMS Integration", "SEO Optimization"],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    headline: "Apps people love to use, every day.",
    description: "Native and cross-platform mobile applications for iOS and Android. We focus on performance, beautiful interfaces, and seamless user experiences that keep users coming back.",
    features: ["iOS & Android Apps", "React Native / Flutter", "App Store Optimization", "Push Notifications", "Offline Support", "Analytics Integration"],
  },
  {
    id: "webapp",
    icon: Monitor,
    title: "Web App Development",
    headline: "Powerful web applications at scale.",
    description: "Complex web applications with rich interfaces and robust backends. We build dashboards, portals, and SaaS products that handle real-world complexity with elegance.",
    features: ["Single Page Applications", "Progressive Web Apps", "Real-Time Features", "Admin Dashboards", "Data Visualization", "Cloud Deployment"],
  },
  {
    id: "uiux",
    icon: Palette,
    title: "Product Design (UI/UX)",
    headline: "Design that users feel, not just see.",
    description: "Research-driven design process that puts users first. We create intuitive interfaces, cohesive design systems, and interactive prototypes that bridge the gap between vision and reality.",
    features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Design Systems", "Usability Testing", "Interaction Design"],
  },
  {
    id: "strategy",
    icon: Layers,
    title: "Digital Strategy",
    headline: "Strategic guidance for the digital age.",
    description: "We help organizations define their digital roadmap, optimize their tech stack, and make informed decisions that drive growth and efficiency.",
    features: ["Technology Consulting", "Digital Transformation", "Brand Strategy", "Competitor Analysis", "Product Roadmapping", "Technical Audits"],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-[var(--nav-height)]">
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroServices} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <h1 className="heading-xl mb-6">Digital Services <span className="gradient-text">Without Compromise</span></h1>
            <p className="text-lg text-muted-foreground">End-to-end digital solutions crafted for businesses that demand excellence.</p>
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

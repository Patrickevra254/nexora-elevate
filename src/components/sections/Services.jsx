import { motion } from "framer-motion";
import { Code2, Globe, Smartphone, Palette, Layers, Monitor } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/shared/SectionHeader";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Custom software solutions built with modern architectures. From MVP to enterprise scale.",
  },
  {
    icon: Globe,
    title: "Web Design",
    description: "Stunning, responsive websites that convert visitors into customers with pixel-perfect design.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android that users love.",
  },
  {
    icon: Monitor,
    title: "Web App Development",
    description: "Powerful, scalable web applications with seamless user experiences and robust backends.",
  },
  {
    icon: Palette,
    title: "Product Design (UI/UX)",
    description: "User-centered design that balances beauty with usability. Research-driven, pixel-perfect interfaces.",
  },
  {
    icon: Layers,
    title: "Digital Strategy",
    description: "Strategic digital consulting, brand identity, and technology roadmap planning.",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding gradient-subtle">
      <div className="container-custom">
        <SectionHeader
          badge="Our Services"
          title="Digital Excellence at Scale"
          description="We deliver end-to-end digital solutions that drive measurable business outcomes."
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

import { motion } from "framer-motion";
import { Target, Zap, Users, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const reasons = [
  {
    icon: Target,
    title: "Precision Engineering",
    description: "Every solution is architected with meticulous attention to scalability, security, and performance.",
    metric: "99.9%",
    metricLabel: "Delivery Accuracy",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Agile methodology with accelerated timelines. From concept to production in weeks, not months.",
    metric: "3x",
    metricLabel: "Faster Delivery",
  },
  {
    icon: Users,
    title: "Elite Talent",
    description: "Senior engineers with deep domain expertise across industries and technology stacks.",
    metric: "150+",
    metricLabel: "Senior Engineers",
  },
  {
    icon: TrendingUp,
    title: "Measurable ROI",
    description: "Data-driven approach ensures every engagement delivers quantifiable business value.",
    metric: "40%",
    metricLabel: "Avg. Cost Reduction",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader
          badge="Why Nexora"
          title="Built for Enterprise Demands"
          description="We combine deep technical expertise with strategic thinking to deliver solutions that matter."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="surface-elevated rounded-xl p-8 card-hover flex gap-6"
            >
              <div className="shrink-0">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <reason.icon className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{reason.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-accent">{reason.metric}</span>
                  <span className="text-xs text-muted-foreground">{reason.metricLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

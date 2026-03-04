import { motion } from "framer-motion";
import { ArrowRight, Shield, Cloud, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }} />

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/3 rounded-full blur-3xl animate-float animation-delay-200" />

      <div className="container-custom relative z-10 pt-32 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Enterprise Technology Partner
            </span>
          </motion.div>

          <motion.h1 variants={item} className="heading-xl mb-6 text-balance">
            We Engineer the
            <br />
            <span className="gradient-text">Digital Future</span>
          </motion.h1>

          <motion.p variants={item} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Nexora Technologies delivers enterprise-grade software engineering, cloud infrastructure,
            and cybersecurity solutions for organizations that demand excellence.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 mb-20">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Start a Project
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border/50 pt-10">
            {[
              { value: "200+", label: "Projects Delivered" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "50+", label: "Enterprise Clients" },
              { value: "12+", label: "Years of Excellence" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

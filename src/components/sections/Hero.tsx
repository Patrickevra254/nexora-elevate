import { motion } from "framer-motion";
import { ArrowRight, Shield, Cloud, Cpu, Code2, Lock } from "lucide-react";
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Enterprise Technology Partner
              </span>
            </motion.div>

            <motion.h1 variants={item} className="heading-xl mb-6 text-balance !font-black !tracking-tighter">
              We Engineer the
              <br />
              <span className="gradient-text">Digital Future</span>
            </motion.h1>

            <motion.p variants={item} className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Nexora Technologies delivers enterprise-grade software engineering, cloud infrastructure,
              and cybersecurity solutions for organizations that demand excellence.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
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
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full border border-accent/20 animate-float" />
              <div className="absolute inset-4 rounded-full border border-accent/10 animate-float animation-delay-200" />
              <div className="absolute inset-8 rounded-full border border-accent/5 animate-float animation-delay-400" />
              
              {/* Center orb */}
              <div className="absolute inset-16 rounded-full bg-accent/10 backdrop-blur-sm flex items-center justify-center glow-accent">
                <Code2 className="h-16 w-16 text-accent/60" />
              </div>

              {/* Floating icons */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 p-3 rounded-xl surface-elevated shadow-lg"
              >
                <Cloud className="h-6 w-6 text-accent" />
              </motion.div>
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 left-4 p-3 rounded-xl surface-elevated shadow-lg"
              >
                <Shield className="h-6 w-6 text-accent" />
              </motion.div>
              <motion.div
                animate={{ y: [-6, 10, -6] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 left-0 p-3 rounded-xl surface-elevated shadow-lg"
              >
                <Cpu className="h-6 w-6 text-accent" />
              </motion.div>
              <motion.div
                animate={{ y: [6, -10, 6] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-0 p-3 rounded-xl surface-elevated shadow-lg"
              >
                <Lock className="h-6 w-6 text-accent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";

const testimonials = [
  {
    quote: "Nexora delivered a platform that handles millions of transactions daily without a hitch. Their engineering rigor is unmatched in the industry.",
    author: "Sarah Chen",
    role: "CTO, FinanceFlow",
    company: "Fortune 500 Financial Services",
  },
  {
    quote: "The cybersecurity framework Nexora implemented has become the gold standard in our organization. Three years, zero incidents.",
    author: "Marcus Williams",
    role: "CISO, Federal Agency",
    company: "US Government",
  },
  {
    quote: "Working with Nexora felt like extending our own team with world-class talent. The AI solution they built transformed our operations.",
    author: "Elena Rodriguez",
    role: "VP Engineering, LogiPro",
    company: "Global Logistics",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding gradient-subtle">
      <div className="container-custom">
        <SectionHeader badge="Testimonials" title="Trusted by Industry Leaders" />

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <Quote className="h-10 w-10 text-accent/30 mx-auto mb-8" />
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                "{current.quote}"
              </blockquote>
              <div>
                <div className="font-semibold">{current.author}</div>
                <div className="text-sm text-muted-foreground">{current.role}</div>
                <div className="text-xs text-accent mt-1">{current.company}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-10">
            <Button variant="outline" size="icon" onClick={prev} className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-accent" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={next} className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

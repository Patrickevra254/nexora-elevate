import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";

const testimonials = [
  {
    quote: "Basiprog delivered a platform that handles millions of transactions daily without a hitch. Their engineering rigor is unmatched in the industry.",
    author: "Sarah Chen",
    role: "CTO, FinanceFlow",
    company: "Fortune 500 Financial Services",
  },
  {
    quote: "The web application Basiprog built has become the gold standard in our organization. Flawless design and performance.",
    author: "Marcus Williams",
    role: "CISO, Federal Agency",
    company: "US Government",
  },
  {
    quote: "Working with Basiprog felt like extending our own team with world-class talent. The mobile app they built transformed our operations.",
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

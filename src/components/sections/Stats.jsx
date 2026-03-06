import { motion } from "framer-motion";

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "99.9%", label: "Client Satisfaction" },
  { value: "50+", label: "Happy Clients" },
  { value: "8+", label: "Years of Excellence" },
];

export default function Stats() {
  return (
    <section className="py-16 md:py-20 border-y border-border/50 bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold mb-1 gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

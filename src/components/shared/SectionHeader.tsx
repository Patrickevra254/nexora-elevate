import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({ badge, title, description, align = "center" }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === "center" ? "text-center max-w-2xl mx-auto" : ""}`}
    >
      {badge && (
        <Badge variant="outline" className="mb-4 px-3 py-1 text-xs font-medium text-accent border-accent/30 bg-accent/5">
          {badge}
        </Badge>
      )}
      <h2 className="heading-lg mb-4">{title}</h2>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}

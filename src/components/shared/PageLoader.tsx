import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="h-10 w-10 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
        <span className="text-sm text-muted-foreground">Loading...</span>
      </motion.div>
    </div>
  );
}

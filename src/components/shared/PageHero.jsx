import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const floatVariants = [
  { y: [-8, 8, -8], duration: 4 },
  { y: [8, -8, 8], duration: 5 },
  { y: [-6, 10, -6], duration: 4.5 },
  { y: [6, -10, 6], duration: 3.5 },
];

const positions = [
  "top-6 right-6",
  "bottom-10 left-2",
  "top-1/3 left-0",
  "bottom-1/4 right-0",
];

/**
 * PageHero — split-layout hero used on inner pages.
 * Mirrors the home Hero structure: copy on the left, animated icon visual on the right.
 *
 * Props:
 *  - badge?: string                 small pill above the title
 *  - title: ReactNode               main heading (use <span className="gradient-text"> for accent)
 *  - description?: ReactNode        sub-headline
 *  - centerIcon: LucideIcon         icon shown inside the central orb
 *  - floatingIcons: LucideIcon[]    up to 4 icons floating around the orb
 *  - children?: ReactNode           optional CTAs or extra content under description
 */
export default function PageHero({
  badge,
  title,
  description,
  centerIcon: CenterIcon,
  floatingIcons = [],
  children,
}) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/3 rounded-full blur-3xl animate-float animation-delay-200" />

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div variants={container} initial="hidden" animate="show">
            {badge && (
              <motion.div variants={item} className="mb-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  {badge}
                </span>
              </motion.div>
            )}

            <motion.h1
              variants={item}
              className="heading-xl mb-6 text-balance !font-black !tracking-tighter"
            >
              {title}
            </motion.h1>

            {description && (
              <motion.p
                variants={item}
                className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
              >
                {description}
              </motion.p>
            )}

            {children && (
              <motion.div variants={item} className="flex flex-wrap gap-4">
                {children}
              </motion.div>
            )}
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-sm aspect-square">
              {/* Glowing rings */}
              <div className="absolute inset-0 rounded-full border border-accent/20 animate-float" />
              <div className="absolute inset-4 rounded-full border border-accent/10 animate-float animation-delay-200" />
              <div className="absolute inset-8 rounded-full border border-accent/5 animate-float animation-delay-400" />

              {/* Center orb */}
              <div className="absolute inset-14 rounded-full bg-accent/10 backdrop-blur-sm flex items-center justify-center glow-accent">
                {CenterIcon && <CenterIcon className="h-12 w-12 text-accent/60" />}
              </div>

              {/* Floating icons */}
              {floatingIcons.slice(0, 4).map((Icon, i) => (
                <motion.div
                  key={i}
                  animate={{ y: floatVariants[i].y }}
                  transition={{
                    duration: floatVariants[i].duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute ${positions[i]} p-2.5 rounded-xl surface-elevated shadow-lg`}
                >
                  <Icon className="h-5 w-5 text-accent" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

/**
 * PageHero — split-layout hero used on inner pages.
 * Mirrors the home Hero structure & spacing exactly: copy on the left, themed image on the right.
 *
 * Props:
 *  - badge?: string                 small pill above the title
 *  - title: ReactNode               main heading (use <span className="gradient-text"> for accent)
 *  - description?: ReactNode        sub-headline
 *  - image: string                  imported image src for the right-side visual
 *  - imageAlt: string               descriptive alt for the image
 *  - children?: ReactNode           optional CTAs or extra content under description
 */
export default function PageHero({
  badge,
  title,
  description,
  image,
  imageAlt = "",
  children,
}) {
  return (
    <section className="relative min-h-[80vh] flex items-start overflow-hidden">
      {/* Background — identical to home Hero */}
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

          {/* Right visual — themed image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Soft glow behind image */}
              <div className="absolute -inset-6 rounded-3xl bg-accent/10 blur-3xl" />
              <div className="absolute inset-0 rounded-3xl border border-accent/20 animate-float" />

              {/* Image frame */}
              <div className="absolute inset-2 rounded-2xl overflow-hidden surface-elevated shadow-2xl glow-accent">
                {image && (
                  <img
                    src={image}
                    alt={imageAlt}
                    width={1024}
                    height={1024}
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                )}
                {/* Subtle gradient overlay for cohesion */}
                <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-accent/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

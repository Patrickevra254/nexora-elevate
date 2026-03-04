import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/shared/SectionHeader";

const posts = [
  { title: "The Future of Cloud-Native Architecture in 2025", category: "Cloud", date: "Feb 2025", readTime: "8 min", excerpt: "How organizations are rethinking their cloud strategies with serverless-first approaches." },
  { title: "Zero-Trust Security: Beyond the Buzzword", category: "Security", date: "Jan 2025", readTime: "6 min", excerpt: "A practical guide to implementing zero-trust architecture in enterprise environments." },
  { title: "Building Production ML Pipelines at Scale", category: "AI/ML", date: "Jan 2025", readTime: "10 min", excerpt: "Lessons learned from deploying machine learning models that serve millions of predictions daily." },
  { title: "DevOps Maturity: Where Does Your Organization Stand?", category: "DevOps", date: "Dec 2024", readTime: "5 min", excerpt: "A framework for assessing and improving your DevOps practices." },
  { title: "The ROI of Custom Software vs. COTS", category: "Strategy", date: "Dec 2024", readTime: "7 min", excerpt: "When does custom development make more financial sense than commercial off-the-shelf?" },
  { title: "Kubernetes Anti-Patterns We See Every Week", category: "DevOps", date: "Nov 2024", readTime: "9 min", excerpt: "Common Kubernetes mistakes and how to avoid them in production environments." },
];

export default function Blog() {
  return (
    <div className="pt-[var(--nav-height)]">
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="heading-xl mb-6">Engineering <span className="gradient-text">Insights</span></h1>
            <p className="text-lg text-muted-foreground">Perspectives on technology, architecture, and innovation from our engineering team.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.div key={post.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Card className="surface-elevated card-hover h-full group cursor-pointer">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="outline" className="text-xs border-accent/20 text-accent bg-accent/5">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-3 group-hover:text-accent transition-colors leading-snug">{post.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between border-t border-border pt-4">
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

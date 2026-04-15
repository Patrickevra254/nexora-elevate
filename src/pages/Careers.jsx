import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight, Heart, Zap, Coffee, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { Link } from "react-router-dom";
import heroCareers from "@/assets/hero-careers.jpg";

const perks = [
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive health coverage, gym membership, mental health support." },
  { icon: Zap, title: "Growth Budget", description: "$5,000 annual learning budget for conferences, courses, and certifications." },
  { icon: Coffee, title: "Flexible Work", description: "Remote-first culture with optional premium office spaces globally." },
  { icon: GraduationCap, title: "Career Path", description: "Clear progression tracks with mentorship from industry veterans." },
];

const positions = [
  { title: "Senior Software Engineer", team: "Engineering", location: "Remote / NYC", type: "Full-time" },
  { title: "Cloud Architect", team: "Infrastructure", location: "Remote / London", type: "Full-time" },
  { title: "ML Engineer", team: "AI & Data", location: "Remote", type: "Full-time" },
  { title: "Security Analyst", team: "Cybersecurity", location: "Remote / DC", type: "Full-time" },
  { title: "DevOps Engineer", team: "Platform", location: "Remote", type: "Full-time" },
  { title: "Engineering Manager", team: "Engineering", location: "NYC / London", type: "Full-time" },
];

export default function Careers() {
  return (
    <div className="pt-[var(--nav-height)]">
      <section className="relative min-h-[90vh] section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCareers} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="heading-xl mb-6">Build Your Career at <span className="gradient-text">Basiprog</span></h1>
            <p className="text-lg text-muted-foreground">Join a team of exceptional engineers solving enterprise-scale challenges.</p>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader badge="Culture" title="Why Creatives Choose Basiprog" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, i) => (
              <motion.div key={perk.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="surface-elevated rounded-xl p-8 card-hover text-center">
                <div className="h-12 w-12 rounded-xl bg-accent/10 mx-auto mb-4 flex items-center justify-center">
                  <perk.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{perk.title}</h3>
                <p className="text-sm text-muted-foreground">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="section-padding gradient-subtle">
        <div className="container-custom">
          <SectionHeader badge="Open Positions" title="Join Our Team" />
          <div className="max-w-3xl mx-auto space-y-4">
            {positions.map((pos, i) => (
              <motion.div key={pos.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Card className="surface-elevated card-hover group cursor-pointer">
                  <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-semibold group-hover:text-accent transition-colors">{pos.title}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-sm text-muted-foreground">{pos.team}</span>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground"><MapPin className="h-3 w-3" />{pos.location}</span>
                        <Badge variant="outline" className="text-xs">{pos.type}</Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="shrink-0">
                      Apply <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
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

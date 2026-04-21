import { motion } from "framer-motion";
import { Target, Eye, Users, Award, Globe, Lightbulb } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import PageHero from "@/components/shared/PageHero";
import heroImage from "@/assets/page-about.jpg";

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every line of code, every architecture decision, made with purpose.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Open communication, honest timelines, clear deliverables.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We challenge conventions to find better solutions.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We don't ship good enough. We ship exceptional.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Solutions that scale across borders and industries.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Your success is our success. We're in it together.",
  },
];

const timeline = [
  {
    year: "2014",
    title: "Founded",
    description:
      "Started with a team of 5 engineers and a vision for enterprise excellence.",
  },
  {
    year: "2016",
    title: "First Enterprise Client",
    description:
      "Secured our first Fortune 500 engagement in financial services.",
  },
  {
    year: "2018",
    title: "Cloud Practice Launch",
    description: "Expanded into cloud infrastructure and DevOps consulting.",
  },
  {
    year: "2020",
    title: "AI Division",
    description: "Launched our AI & Machine Learning practice.",
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Opened offices in London, Singapore, and Dubai.",
  },
  {
    year: "2024",
    title: "200+ Projects",
    description: "Surpassed 200 enterprise projects delivered successfully.",
  },
];

const leaders = [
  {
    name: "Alexander Park",
    role: "CEO & Co-Founder",
    bio: "Former VP Engineering at a Fortune 100 tech company. 20+ years in enterprise software.",
  },
  {
    name: "Dr. Maria Santos",
    role: "CTO",
    bio: "PhD in Distributed Systems. Led cloud architecture at AWS before joining Nexora.",
  },
  {
    name: "James Okafor",
    role: "VP, Cybersecurity",
    bio: "Former NSA cybersecurity analyst. CISSP, CISM certified.",
  },
  {
    name: "Priya Sharma",
    role: "VP, AI & Data",
    bio: "Stanford AI Lab researcher. Published author in machine learning.",
  },
];

export default function About() {
  return (
    <div className="pt-[var(--nav-height)]">
      <PageHero
        badge="About Basiprog"
        title={<>Building the Future of <span className="gradient-text">Digital Products</span></>}
        description="Basiprog Digital Solutions is the trusted digital partner for ambitious organizations. We don't just write code — we craft exceptional digital experiences."
        image={heroImage}
        imageAlt="Diverse team collaborating around glowing digital interfaces"
      />

      {/* Mission */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                badge="Our Mission"
                title="Technology That Transforms"
                align="left"
              />
              <p className="text-muted-foreground leading-relaxed">
                We exist to bridge the gap between business ambition and
                technological capability. Every engagement is an opportunity to
                create lasting impact through engineering excellence.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "200+", label: "Projects" },
                { value: "50+", label: "Clients" },
                { value: "150+", label: "Engineers" },
                { value: "12+", label: "Years" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="surface-elevated rounded-xl p-6 text-center"
                >
                  <div className="text-2xl font-bold text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding gradient-subtle">
        <div className="container-custom">
          <SectionHeader badge="Our Values" title="What Drives Us" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="surface-elevated rounded-xl p-8 card-hover"
              >
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <v.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader badge="Leadership" title="Meet Our Team" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="surface-elevated rounded-xl p-8 card-hover text-center"
              >
                <div className="h-16 w-16 rounded-full bg-accent/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-bold text-accent">
                    {leader.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="font-semibold">{leader.name}</h3>
                <p className="text-sm text-accent mb-3">{leader.role}</p>
                <p className="text-xs text-muted-foreground">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding gradient-subtle">
        <div className="container-custom">
          <SectionHeader badge="Our Journey" title="A Decade of Innovation" />
          <div className="max-w-2xl mx-auto space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="shrink-0 w-16 text-right">
                  <span className="text-sm font-bold text-accent">
                    {item.year}
                  </span>
                </div>
                <div className="border-l-2 border-accent/20 pl-6 pb-2">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

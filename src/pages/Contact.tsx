import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import heroContact from "@/assets/hero-contact.jpg";

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="pt-[var(--nav-height)]">
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroContact} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="heading-xl mb-6">Let's Build <span className="gradient-text">Together</span></h1>
            <p className="text-lg text-muted-foreground">Tell us about your project. We'll respond within 24 hours.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="surface-elevated">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Full Name</label>
                        <Input required placeholder="John Smith" className="bg-background" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email</label>
                        <Input required type="email" placeholder="john@company.com" className="bg-background" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Company</label>
                        <Input placeholder="Acme Corp" className="bg-background" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Budget Range</label>
                        <Input placeholder="$50k - $200k" className="bg-background" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Project Details</label>
                      <Textarea required rows={6} placeholder="Tell us about your project, timeline, and goals..." className="bg-background resize-none" />
                    </div>
                    <Button variant="hero" size="lg" type="submit" disabled={loading} className="w-full md:w-auto">
                      {loading ? "Sending..." : "Send Message"}
                      <Send className="ml-1 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Info */}
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", value: "hello@basiprog.com" },
                { icon: Phone, title: "Phone", value: "+1 (555) 123-4567" },
                { icon: MapPin, title: "Headquarters", value: "New York, NY" },
              ].map((item) => (
                <div key={item.title} className="surface-elevated rounded-xl p-6 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="surface-elevated rounded-xl p-6">
                <h3 className="font-semibold mb-3">Global Offices</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>🇺🇸 New York</p>
                  <p>🇬🇧 London</p>
                  <p>🇸🇬 Singapore</p>
                  <p>🇦🇪 Dubai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

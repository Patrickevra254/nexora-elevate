import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Software Engineering", href: "/services" },
    { label: "Cloud Infrastructure", href: "/services" },
    { label: "Cybersecurity", href: "/services" },
    { label: "AI & Automation", href: "/services" },
  ],
  Resources: [
    { label: "Case Studies", href: "/portfolio" },
    { label: "Documentation", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Support", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">N</span>
              </div>
              <span className="font-bold text-lg tracking-tight">Nexora</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Enterprise-grade technology solutions. We architect, build, and scale digital infrastructure for the world's most ambitious organizations.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nexora Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

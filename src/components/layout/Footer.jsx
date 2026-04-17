import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import logoMark from "../../assets/basiProgLogo-dark.png";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Software Development", href: "/services" },
    { label: "Web Design", href: "/services" },
    { label: "Mobile & Web Apps", href: "/services" },
    { label: "Product Design (UI/UX)", href: "/services" },
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
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Light mode logo */}
            <img
              src={darkLogo}
              alt="Basiprog logo"
              className="h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto mb-2 block dark:hidden"
            />

            {/* Dark mode logo */}
            <img
              src={lightLogo}
              alt="Basiprog logo"
              className="h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto mb-2 hidden dark:block"
            />

            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Premium digital solutions. We design, develop, and launch stunning
              websites, mobile apps, and digital products for ambitious
              businesses.
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
            © {new Date().getFullYear()} Basiprog Digital Solutions. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

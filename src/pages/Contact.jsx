import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle, User, Building2 } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import heroContact from "@/assets/hero-contact.jpg";

const WHATSAPP_NUMBER = "2348134645652";

const baseSchema = {
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .max(20, { message: "Phone must be less than 20 characters" })
    .regex(/^[+\d\s()-]*$/, { message: "Phone contains invalid characters" })
    .optional()
    .or(z.literal("")),
  budget: z
    .string()
    .trim()
    .max(50, { message: "Budget must be less than 50 characters" })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
};

const individualSchema = z.object({
  ...baseSchema,
  type: z.literal("individual"),
  company: z.string().optional(),
});

const companySchema = z.object({
  ...baseSchema,
  type: z.literal("company"),
  company: z
    .string()
    .trim()
    .min(2, { message: "Company name is required" })
    .max(100, { message: "Company must be less than 100 characters" }),
});

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("individual");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const raw = {
      type,
      name: formData.get("name") || "",
      email: formData.get("email") || "",
      phone: formData.get("phone") || "",
      company: formData.get("company") || "",
      budget: formData.get("budget") || "",
      message: formData.get("message") || "",
    };

    const schema = type === "company" ? companySchema : individualSchema;
    const result = schema.safeParse(raw);

    if (!result.success) {
      const fieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0];
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast({
        title: "Please fix the errors",
        description: "Some fields need your attention before sending.",
        variant: "destructive",
      });
      return;
    }

    setErrors({});
    setLoading(true);

    const data = result.data;
    const senderLabel = type === "company" ? "Company Inquiry" : "Individual Inquiry";

    const fullMessage = `*New ${senderLabel} from Basiprog Website*

*Name:* ${data.name}
*Email:* ${data.email}
*Phone:* ${data.phone || "N/A"}
${type === "company" ? `*Company:* ${data.company}\n` : ""}*Budget:* ${data.budget || "N/A"}

*Message:*
${data.message}`;

    const waUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
      fullMessage
    )}`;

    window.open(waUrl, "_blank");

    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Redirecting to WhatsApp",
        description: "Your message is ready. Just press send.",
      });
      form.reset();
    }, 500);
  };

  const clearError = (field) => {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const errClass = (field) =>
    errors[field] ? "border-destructive focus-visible:ring-destructive" : "";

  return (
    <div className="pt-[var(--nav-height)]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroContact} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="heading-xl mb-6">
              Let's Build <span className="gradient-text">Together</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Tell us about your project. We'll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="surface-elevated">
                <CardContent className="p-8">
                  {/* Type toggle */}
                  <div className="mb-8">
                    <label className="text-sm font-medium mb-3 block">
                      I'm reaching out as *
                    </label>
                    <div
                      role="radiogroup"
                      className="grid grid-cols-2 gap-3 p-1 rounded-lg bg-muted/40 border border-border"
                    >
                      {[
                        { value: "individual", label: "Individual", icon: User },
                        { value: "company", label: "Company", icon: Building2 },
                      ].map((opt) => {
                        const active = type === opt.value;
                        const Icon = opt.icon;
                        return (
                          <button
                            key={opt.value}
                            type="button"
                            role="radio"
                            aria-checked={active}
                            onClick={() => {
                              setType(opt.value);
                              clearError("company");
                            }}
                            className={cn(
                              "flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-all",
                              active
                                ? "bg-accent text-accent-foreground shadow-sm"
                                : "text-muted-foreground hover:text-foreground"
                            )}
                          >
                            <Icon className="h-4 w-4" />
                            {opt.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          placeholder="John Smith"
                          maxLength={100}
                          onChange={() => clearError("name")}
                          className={cn("bg-background", errClass("name"))}
                          aria-invalid={!!errors.name}
                        />
                        {errors.name && (
                          <p className="text-xs text-destructive mt-1.5">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Email *</label>
                        <Input
                          type="email"
                          name="email"
                          placeholder="john@example.com"
                          maxLength={255}
                          onChange={() => clearError("email")}
                          className={cn("bg-background", errClass("email"))}
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && (
                          <p className="text-xs text-destructive mt-1.5">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Phone Number
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          placeholder="+234 801 234 5678"
                          maxLength={20}
                          onChange={() => clearError("phone")}
                          className={cn("bg-background", errClass("phone"))}
                          aria-invalid={!!errors.phone}
                        />
                        {errors.phone && (
                          <p className="text-xs text-destructive mt-1.5">{errors.phone}</p>
                        )}
                      </div>

                      {type === "company" ? (
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Company *
                          </label>
                          <Input
                            name="company"
                            placeholder="Acme Corp"
                            maxLength={100}
                            onChange={() => clearError("company")}
                            className={cn("bg-background", errClass("company"))}
                            aria-invalid={!!errors.company}
                          />
                          {errors.company && (
                            <p className="text-xs text-destructive mt-1.5">
                              {errors.company}
                            </p>
                          )}
                        </div>
                      ) : (
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Budget Range
                          </label>
                          <Input
                            name="budget"
                            placeholder="$1k - $5k"
                            maxLength={50}
                            onChange={() => clearError("budget")}
                            className={cn("bg-background", errClass("budget"))}
                          />
                          {errors.budget && (
                            <p className="text-xs text-destructive mt-1.5">
                              {errors.budget}
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                    {type === "company" && (
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Budget Range
                        </label>
                        <Input
                          name="budget"
                          placeholder="$5k - $20k"
                          maxLength={50}
                          onChange={() => clearError("budget")}
                          className={cn("bg-background", errClass("budget"))}
                        />
                        {errors.budget && (
                          <p className="text-xs text-destructive mt-1.5">
                            {errors.budget}
                          </p>
                        )}
                      </div>
                    )}

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        {type === "company" ? "Project Details *" : "How can we help? *"}
                      </label>
                      <Textarea
                        name="message"
                        rows={6}
                        maxLength={1000}
                        placeholder={
                          type === "company"
                            ? "Tell us about your project, timeline, and goals..."
                            : "Share what you'd like to build or learn more about..."
                        }
                        onChange={() => clearError("message")}
                        className={cn(
                          "bg-background resize-none",
                          errClass("message")
                        )}
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && (
                        <p className="text-xs text-destructive mt-1.5">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      variant="hero"
                      size="lg"
                      type="submit"
                      disabled={loading}
                      className="w-full md:w-auto"
                    >
                      {loading ? "Opening WhatsApp..." : "Send via WhatsApp"}
                      <MessageCircle className="ml-1 h-4 w-4" />
                    </Button>

                    <p className="text-xs text-muted-foreground">
                      Clicking send will open WhatsApp with your message ready.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", value: "bassiprog@gmail.com" },
                { icon: Phone, title: "Phone", value: "+234 813 464 5652" },
                { icon: MapPin, title: "Headquarters", value: "Lagos, Nigeria" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="surface-elevated rounded-xl p-6 flex items-start gap-4"
                >
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
                  <p>NG. Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

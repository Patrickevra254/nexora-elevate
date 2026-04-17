// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent } from "@/components/ui/card";
// import { useToast } from "@/hooks/use-toast";
// import heroContact from "@/assets/hero-contact.jpg";

// const WHATSAPP_NUMBER = "08134645652"; // Update with real number
// const EMAIL_ADDRESS = "bassiprog@gmail.com";

// export default function Contact() {
//   const { toast } = useToast();
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     const name = formData.get("name")?.trim();
//     const email = formData.get("email")?.trim();
//     const phone = formData.get("phone")?.trim();
//     const company = formData.get("company")?.trim();
//     const budget = formData.get("budget")?.trim();
//     const message = formData.get("message")?.trim();

//     if (!name || !email || !message) return;

//     setLoading(true);

//     const fullMessage = `New Contact from Basiprog Website\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nCompany: ${company || "N/A"}\nBudget: ${budget || "N/A"}\n\nMessage:\n${message}`;

//     const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`;
//     window.open(waUrl, "_blank");

//     const emailSubject = encodeURIComponent(`New Inquiry from ${name}`);
//     const emailBody = encodeURIComponent(fullMessage);
//     const mailUrl = `mailto:${EMAIL_ADDRESS}?subject=${emailSubject}&body=${emailBody}`;
//     window.open(mailUrl, "_blank");

//     setTimeout(() => {
//       setLoading(false);
//       toast({
//         title: "Message prepared successfully",
//         description:
//           "WhatsApp and email windows have been opened. Please send the messages.",
//       });
//       form.reset();
//     }, 500);
//   };

//   return (
//     <div className="pt-[var(--nav-height)]">
//       <section className="relative min-h-[70vh] section-padding overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src={heroContact}
//             alt=""
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
//         </div>
//         <div className="container-custom relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="max-w-3xl"
//           >
//             <h1 className="heading-xl mb-6">
//               Let's Build <span className="gradient-text">Together</span>
//             </h1>
//             <p className="text-lg text-muted-foreground">
//               Tell us about your project. We'll respond within 24 hours.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       <section className="section-padding">
//         <div className="container-custom">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//             <div className="lg:col-span-2">
//               <Card className="surface-elevated">
//                 <CardContent className="p-8">
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div>
//                         <label className="text-sm font-medium mb-2 block">
//                           Full Name *
//                         </label>
//                         <Input
//                           required
//                           name="name"
//                           placeholder="John Smith"
//                           className="bg-background"
//                         />
//                       </div>
//                       <div>
//                         <label className="text-sm font-medium mb-2 block">
//                           Email *
//                         </label>
//                         <Input
//                           required
//                           type="email"
//                           name="email"
//                           placeholder="john@company.com"
//                           className="bg-background"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div>
//                         <label className="text-sm font-medium mb-2 block">
//                           Phone Number
//                         </label>
//                         <Input
//                           name="phone"
//                           type="tel"
//                           placeholder="+1 (555) 000-0000"
//                           className="bg-background"
//                         />
//                       </div>
//                       <div>
//                         <label className="text-sm font-medium mb-2 block">
//                           Company
//                         </label>
//                         <Input
//                           name="company"
//                           placeholder="Acme Corp"
//                           className="bg-background"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium mb-2 block">
//                         Budget Range
//                       </label>
//                       <Input
//                         name="budget"
//                         placeholder="$50k - $200k"
//                         className="bg-background"
//                       />
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium mb-2 block">
//                         Project Details *
//                       </label>
//                       <Textarea
//                         required
//                         name="message"
//                         rows={6}
//                         placeholder="Tell us about your project, timeline, and goals..."
//                         className="bg-background resize-none"
//                       />
//                     </div>
//                     <div className="flex flex-col sm:flex-row gap-3">
//                       <Button
//                         variant="hero"
//                         size="lg"
//                         type="submit"
//                         disabled={loading}
//                         className="w-full md:w-auto"
//                       >
//                         {loading ? "Sending..." : "Send via WhatsApp & Email"}
//                         <MessageCircle className="ml-1 h-4 w-4" />
//                       </Button>
//                     </div>
//                     <p className="text-xs text-muted-foreground">
//                       Clicking send will open WhatsApp and your email client
//                       with your message pre-filled.
//                     </p>
//                   </form>
//                 </CardContent>
//               </Card>
//             </div>

//             <div className="space-y-6">
//               {[
//                 { icon: Mail, title: "Email", value: EMAIL_ADDRESS },
//                 { icon: Phone, title: "Phone", value: "+1 (555) 123-4567" },
//                 {
//                   icon: MapPin,
//                   title: "Headquarters",
//                   value: "Lagos, Nigeria",
//                 },
//               ].map((item) => (
//                 <div
//                   key={item.title}
//                   className="surface-elevated rounded-xl p-6 flex items-start gap-4"
//                 >
//                   <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
//                     <item.icon className="h-5 w-5 text-accent" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-sm">{item.title}</h3>
//                     <p className="text-sm text-muted-foreground">
//                       {item.value}
//                     </p>
//                   </div>
//                 </div>
//               ))}

//               <div className="surface-elevated rounded-xl p-6">
//                 <h3 className="font-semibold mb-3">Global Offices</h3>
//                 <div className="space-y-2 text-sm text-muted-foreground">
//                   <p>NG. Lagos</p>
//                   {/* <p>🇺🇸 New York</p>
//                   <p>🇬🇧 London</p>
//                   <p>🇸🇬 Singapore</p>
//                   <p>🇦🇪 Dubai</p> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import heroContact from "@/assets/hero-contact.jpg";

// ✅ FIXED: international format (Nigeria)
const WHATSAPP_NUMBER = "2348134645652";

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const phone = formData.get("phone")?.trim();
    const company = formData.get("company")?.trim();
    const budget = formData.get("budget")?.trim();
    const message = formData.get("message")?.trim();

    if (!name || !email || !message) {
      toast({
        title: "Missing required fields",
        description: "Please fill in your name, email, and message.",
      });
      return;
    }

    setLoading(true);

    // ✅ Improved WhatsApp message formatting
    const fullMessage = `*New Contact from Basiprog Website*

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone || "N/A"}
*Company:* ${company || "N/A"}
*Budget:* ${budget || "N/A"}

*Message:*
${message}`;

    // ✅ More reliable WhatsApp URL
    const waUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
      fullMessage
    )}`;

    // Open WhatsApp
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

  return (
    <div className="pt-[var(--nav-height)]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroContact}
            alt=""
            className="w-full h-full object-cover"
          />
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
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Full Name *
                        </label>
                        <Input
                          required
                          name="name"
                          placeholder="John Smith"
                          className="bg-background"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Email *
                        </label>
                        <Input
                          required
                          type="email"
                          name="email"
                          placeholder="john@company.com"
                          className="bg-background"
                        />
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
                          className="bg-background"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Company
                        </label>
                        <Input
                          name="company"
                          placeholder="Acme Corp"
                          className="bg-background"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Budget Range
                      </label>
                      <Input
                        name="budget"
                        placeholder="$5k - $20k"
                        className="bg-background"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Project Details *
                      </label>
                      <Textarea
                        required
                        name="message"
                        rows={6}
                        placeholder="Tell us about your project, timeline, and goals..."
                        className="bg-background resize-none"
                      />
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
                {
                  icon: MapPin,
                  title: "Headquarters",
                  value: "Lagos, Nigeria",
                },
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
                    <p className="text-sm text-muted-foreground">
                      {item.value}
                    </p>
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
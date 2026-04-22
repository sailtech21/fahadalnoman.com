import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { socialLinks } from "@/lib/data";
import { Facebook, Instagram, Linkedin, Mail, MessageCircle, Send, Loader2, MapPin, Clock, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const iconMap: Record<string, React.ReactNode> = {
  facebook: <Facebook size={20} />,
  instagram: <Instagram size={20} />,
  linkedin: <Linkedin size={20} />,
  email: <Mail size={20} />,
  whatsapp: <MessageCircle size={20} />,
};

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", countryCode: "+880", whatsappAvailable: false, message: "" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          name: form.name,
          email: form.email,
          phone: `${form.countryCode}${form.phone}`,
          whatsapp_available: form.whatsappAvailable,
          message: form.message,
          to: "fahadnomanofficial@gmail.com",
          subject: `Portfolio Contact from ${form.name}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        toast({ title: "Message sent!", description: "I'll get back to you soon." });
        setForm({ name: "", email: "", phone: "", countryCode: "+880", whatsappAvailable: false, message: "" });
      } else {
        toast({ title: "Failed to send", description: "Please try again or contact via WhatsApp.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Something went wrong. Please try WhatsApp instead.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <PageLayout>
      <SectionWrapper id="contact" title="Let's |Connect" subtitle="Have a project in mind? Let's build something great together.">
        {/* Quick Contact Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://wa.me/+8801601345600"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 min-h-[48px] rounded-xl font-medium bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500/20 transition-colors"
          >
            <MessageCircle size={18} /> WhatsApp Me
          </a>
          <a
            href="mailto:fahadnomanofficial@gmail.com"
            className="flex items-center gap-2 px-6 py-3 min-h-[48px] rounded-xl font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
          >
            <Mail size={18} /> Email Me
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - Info & Social */}
          <div className="space-y-5">
            {/* Availability */}
            <div className="glass-strong rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-semibold text-green-400">Available for Projects</span>
              </div>
              <p className="text-muted-foreground text-sm">I'm currently accepting new projects and freelance work. Let's discuss your idea!</p>
            </div>

            {/* Location */}
            <div className="glass-strong rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <MapPin size={16} />
                <span className="text-sm font-semibold">Location</span>
              </div>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-muted-foreground text-xs">Current</p>
                  <p className="text-foreground font-medium">Dhaka, Bangladesh</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Permanent</p>
                  <p className="text-foreground font-medium">Jhenaidah, Khulna, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Timezone */}
            <div className="glass-strong rounded-2xl p-5">
              <div className="flex items-center gap-2 text-secondary mb-2">
                <Clock size={16} />
                <span className="text-sm font-semibold">Timezone</span>
              </div>
              <p className="text-foreground text-sm font-medium">GMT+6 (Bangladesh Standard Time)</p>
            </div>

            {/* Social Links */}
            <h3 className="text-lg font-semibold pt-2">Social Links</h3>
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 glass-strong rounded-xl p-4 min-h-[56px] hover:glow-cyan transition-all group"
              >
                <div className="text-primary group-hover:scale-110 transition-transform">{iconMap[link.icon]}</div>
                <div>
                  <p className="font-medium text-sm">{link.name}</p>
                  <p className="text-xs text-muted-foreground truncate max-w-[240px]">
                    {link.url.replace("https://", "").replace("mailto:", "")}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Right - Form */}
          <div className="glass-strong rounded-2xl p-6 md:p-8 glow-purple h-fit">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors text-base min-h-[48px]"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors text-base min-h-[48px]"
                required
              />
              <textarea
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3.5 rounded-xl bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors text-base resize-none"
                required
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full py-3.5 rounded-xl font-medium bg-gradient-to-r from-primary/80 to-secondary/80 text-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 min-h-[48px] text-base"
              >
                {sending ? (
                  <>Sending... <Loader2 size={16} className="animate-spin" /></>
                ) : (
                  <>Send Message <Send size={16} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default ContactPage;

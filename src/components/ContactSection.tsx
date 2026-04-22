import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { socialLinks } from "@/lib/data";
import { Facebook, Instagram, Linkedin, Mail, MessageCircle, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const iconMap: Record<string, React.ReactNode> = {
  facebook: <Facebook size={20} />,
  instagram: <Instagram size={20} />,
  linkedin: <Linkedin size={20} />,
  email: <Mail size={20} />,
  whatsapp: <MessageCircle size={20} />,
};

const ContactSection = () => {
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
    <SectionWrapper id="contact" title="Let's |Connect" subtitle="Have a project in mind? Let's build something great together.">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left - Social */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 8 }}
              className="flex items-center gap-4 glass-strong rounded-xl p-4 hover:glow-cyan transition-all group"
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
        <div className="glass-strong rounded-2xl p-8 glow-purple">
          <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors text-sm"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors text-sm"
              required
            />
            <textarea
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"
              required
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 rounded-xl font-medium bg-gradient-to-r from-primary/80 to-secondary/80 text-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
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
  );
};

export default ContactSection;

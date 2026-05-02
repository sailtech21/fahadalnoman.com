import { socialLinks } from "@/lib/data";
import { Facebook, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  facebook: <Facebook size={16} />,
  instagram: <Instagram size={16} />,
  linkedin: <Linkedin size={16} />,
  email: <Mail size={16} />,
  whatsapp: <MessageCircle size={16} />,
};

const Footer = () => (
  <footer className="border-t border-border/30 py-10 text-center text-sm text-muted-foreground">
    <div className="max-w-7xl mx-auto px-6">
      <a
        href="https://zurvix.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gradient font-bold text-lg mb-3 inline-block hover:opacity-80 transition-opacity"
      >
        ZURVIX
      </a>

      {/* Social links — improves SEO authority signals */}
      <div className="flex items-center justify-center gap-4 my-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="text-muted-foreground hover:text-primary transition-colors p-1.5"
          >
            {iconMap[link.icon]}
          </a>
        ))}
      </div>

      <p>© {new Date().getFullYear()} Fahad Al Noman. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;

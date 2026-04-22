import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Work", path: "/work" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "glass-strong shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <Link to="/" className="text-xl md:text-2xl font-bold text-gradient">Fahad Al Noman</Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`text-sm transition-colors relative group ${
                  location.pathname === l.path
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all ${
                  location.pathname === l.path ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
            <a
              href="https://wa.me/+8801601345600"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground p-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu - Full screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="px-4 py-3 flex items-center justify-between">
                <Link to="/" className="text-xl font-bold text-gradient" onClick={() => setOpen(false)}>
                  Fahad Al Noman
                </Link>
                <button
                  className="text-foreground p-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
                  onClick={() => setOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 flex flex-col items-center justify-center gap-2 px-6">
                {links.map((l, i) => (
                  <motion.div
                    key={l.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="w-full"
                  >
                    <Link
                      to={l.path}
                      onClick={() => setOpen(false)}
                      className={`block w-full text-center text-xl py-4 rounded-xl transition-all min-h-[56px] ${
                        location.pathname === l.path
                          ? "text-primary font-semibold glass-strong"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  href="https://wa.me/+8801601345600"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-8 py-4 rounded-xl text-lg font-medium bg-green-500/10 text-green-400 border border-green-500/20 min-h-[56px] flex items-center justify-center gap-2"
                >
                  WhatsApp Me
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

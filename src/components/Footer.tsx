const Footer = () => (
  <footer className="border-t border-border/30 py-8 text-center text-sm text-muted-foreground">
    <div className="max-w-7xl mx-auto px-6">
      <a
        href="https://zurvix.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gradient font-bold text-lg mb-2 inline-block hover:opacity-80 transition-opacity"
      >
        ZURVIX
      </a>
      <p>© {new Date().getFullYear()} Fahad Al Noman. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;

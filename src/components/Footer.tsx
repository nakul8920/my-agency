import { motion } from "framer-motion";
import { Twitter, Linkedin, Instagram, Github, ArrowUpRight } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Website Development", href: "/services" },
    { name: "Digital Marketing", href: "/services" },
    { name: "SEO Optimization", href: "/services" },
    { name: "Social Media", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about-us" },
    { name: "Our Work", href: "/portfolio" },
    { name: "Careers", href: "/careers" },
  ],
  support: [
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 bg-card/30">
      <div className="container-tight py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2 mb-4 sm:mb-0">
            <a href="/" className="flex items-center gap-2 mb-4 sm:mb-6">
              {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-lg">N</span>
              </div> */}
              <span className="font-display font-bold text-lg sm:text-xl text-foreground">
                Growth<span className="text-primary">Code</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 max-w-xs leading-relaxed">
              We build stunning websites and grow businesses with powerful digital marketing strategies.
            </p>
            <div className="flex gap-2 sm:gap-3 md:gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg sm:rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div className="col-span-1 sm:col-span-1">
            <h4 className="font-display font-semibold text-sm sm:text-base mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1 sm:col-span-1">
            <h4 className="font-display font-semibold text-sm sm:text-base mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 mt-4 sm:mt-0">
            <h4 className="font-display font-semibold text-sm sm:text-base mb-3 sm:mb-4">Support</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 md:mt-16 pt-6 sm:pt-7 md:pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Growth Code. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

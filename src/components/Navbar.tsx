import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Why Us", href: "/why-us" },
  { name: "Process", href: "/process" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
    setIsMobileMenuOpen(false);
  };

  const handleCTAClick = () => {
    navigate("/contact");
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/40 backdrop-blur-2xl border-b border-border/20 shadow-lg shadow-black/5"
          : "bg-transparent backdrop-blur-none"
      }`}
      style={{
        ...(isScrolled && {
          background: "linear-gradient(to bottom, hsl(var(--background) / 0.5), hsl(var(--background) / 0.3))",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        })
      }}
    >
      <div className="w-full max-w-full">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
          {/* Logo */}
          <a 
            href="/" 
            onClick={(e) => {
              if (location.pathname !== "/") {
                e.preventDefault();
                navigate("/");
              }
            }}
            className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 min-w-0"
          >
            {/* <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary to-blue flex items-center justify-center flex-shrink-0">
              <span className="font-display font-bold text-primary-foreground text-sm sm:text-lg">N</span>
            </div> */}
            <span className="font-display font-bold text-base sm:text-lg md:text-xl text-foreground whitespace-nowrap">
              <span className="hidden sm:inline">Growth</span><span className="sm:hidden">N</span><span className="text-primary">Code</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 flex-shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs xl:text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative group whitespace-nowrap cursor-pointer"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block flex-shrink-0">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-xs xl:text-sm px-3 xl:px-4 2xl:px-6 whitespace-nowrap"
              onClick={handleCTAClick}
            >
              Get Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/50 backdrop-blur-2xl border-b border-border/20 shadow-lg"
            style={{
              background: "linear-gradient(to bottom, hsl(var(--background) / 0.55), hsl(var(--background) / 0.4))",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
            }}
          >
            <div className="px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors py-2 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                variant="hero" 
                size="lg" 
                className="mt-4"
                onClick={handleCTAClick}
              >
                Get Free Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

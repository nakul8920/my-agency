import { motion } from "framer-motion";
import { ArrowRight, Play, Terminal, Cpu, Database, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import TechBackground from "./TechBackground";
import GlowingOrb from "./GlowingOrb";
import CodeBlock from "./CodeBlock";


const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <TechBackground variant="grid" intensity="medium" />
      
      {/* Glowing Orbs */}
      <GlowingOrb size="lg" color="primary" position={{ top: "20%", left: "20%" }} />
      <GlowingOrb size="xl" color="accent" position={{ bottom: "20%", right: "20%" }} delay={2} />
      <GlowingOrb size="md" color="purple" position={{ top: "60%", left: "60%" }} delay={4} />


      {/* Animated Hex Grid Overlay */}
      {/* <div className="absolute inset-0 hex-pattern opacity-30" /> */}

      <div className="container-tight relative z-10 pb-6 sm:pb-8 md:pb-12">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-extrabold leading-tight mb-4 sm:mb-6"
            >
              We Build Websites &{" "}
              <span className="gradient-text relative inline-block">
                Grow Your Business
                <motion.span
                  // className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span>{" "}
              Digitally
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 md:mb-10 text-balance"
            >
              From stunning websites to powerful marketing strategies—choose what you need. 
              Get custom websites, SEO, social media marketing, or the complete package.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button variant="hero" size="xl" className="group relative overflow-hidden">
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
                Get Free Consultation
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl" className="group">
                <Play className="w-4 h-4" />
                View Services
              </Button>
            </motion.div>

            {/* Tech Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-border/30"
            >
              {[
                { value: "150+", label: "Projects Deployed", icon: "▲" },
                { value: "98%", label: "Uptime SLA", icon: "◆" },
                { value: "5+", label: "Years Experience", icon: "●" },
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center lg:text-left"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <span className="text-primary text-xs">{stat.icon}</span>
                    <span className="font-display text-2xl md:text-3xl font-bold gradient-text">
                      {stat.value}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Code Block Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hidden lg:block relative -mt-16 md:-mt-20 lg:-mt-24"
          >
            <CodeBlock className="relative z-10" />
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-lg" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-accent/20 rounded-lg" />
            
            {/* Connection Lines */}
            <svg className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-24" viewBox="0 0 48 96">
              <motion.path
                d="M48 48 L24 48 L24 12 L0 12 M24 48 L24 84 L0 84"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                strokeOpacity="0.3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />
              <circle cx="0" cy="12" r="3" fill="hsl(var(--primary))" fillOpacity="0.5" />
              <circle cx="0" cy="84" r="3" fill="hsl(var(--accent))" fillOpacity="0.5" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-0" />

      {/* Animated Bottom Line */}
      <motion.div
        className="absolute bottom-2 md:bottom-16 left-0 right-0 h-[1px] md:h-px z-10"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.5), transparent)",
          width: "100%",
          maxWidth: "100%",
          transformOrigin: "center"
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </section>
  );
};

export default HeroSection;

import { motion } from "framer-motion";
import { ArrowRight, Phone, Zap, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Static Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 hex-pattern opacity-20" />

      {/* Static Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative border border-border/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-8 lg:p-10 text-center max-w-2xl mx-auto overflow-hidden bg-background/80 backdrop-blur-sm"
        >
          {/* Static Border Glow */}
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-50" />

          {/* Corner Decorations - Responsive sizing */}
          <svg className="absolute top-2 left-2 sm:top-3 sm:left-3 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary/30" viewBox="0 0 48 48">
            <path d="M0 16V0h16M0 24v-4" stroke="currentColor" fill="none" strokeWidth="1" />
          </svg>
          <svg className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary/30" viewBox="0 0 48 48">
            <path d="M48 16V0H32M48 24v-4" stroke="currentColor" fill="none" strokeWidth="1" />
          </svg>
          <svg className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary/30" viewBox="0 0 48 48">
            <path d="M0 32v16h16M0 24v4" stroke="currentColor" fill="none" strokeWidth="1" />
          </svg>
          <svg className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary/30" viewBox="0 0 48 48">
            <path d="M48 32v16H32M48 24v4" stroke="currentColor" fill="none" strokeWidth="1" />
          </svg>

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-accent/30 bg-accent/10 mb-4 sm:mb-5 md:mb-6"
              animate={{ boxShadow: ["0 0 0 0 hsl(var(--accent) / 0.4)", "0 0 0 10px hsl(var(--accent) / 0)", "0 0 0 0 hsl(var(--accent) / 0.4)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
              <span className="text-xs sm:text-sm text-accent font-medium">Limited Time Offer</span>
            </motion.div>

            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-3 sm:mb-4">
              Ready to Grow Your Business{" "}
              <span className="gradient-text relative">
                Online?
                <motion.span
                  className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto mb-4 sm:mb-5 md:mb-6 px-2 sm:px-0">
              Let's discuss how we can help you build a powerful online presence and drive real business growth. Book your free consultation today.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6 px-2 sm:px-0">
              <a href="tel:+918287391530" className="w-full sm:w-auto">
                <Button variant="hero" size="default" className="group relative overflow-hidden w-full">
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                  />
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Book Free Call</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <Button
                variant="heroOutline"
                size="default"
                className="w-full sm:w-auto group"
                asChild
              >
                <a
                  href="https://wa.me/918920183166?text=Hi%2C%20I%20would%20like%20to%20view%20your%20portfolio%20and%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span className="text-sm sm:text-base">Connect on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-muted-foreground px-2 sm:px-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <span className="whitespace-nowrap">30-min Consultation</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple flex-shrink-0" />
                <span>No Obligation</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

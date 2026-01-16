import { motion } from "framer-motion";
import { Globe, TrendingUp, Zap, ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom websites that convert visitors into customers. Fast, responsive, and SEO-optimized.",
    features: [
      "Modern Web Design",
      "Business & Portfolio Sites",
      "Google Sheets Integration",
      "WhatsApp Integration",
    ],
    gradient: "from-primary to-blue",
    accentColor: "primary",
    delay: 0.1,
    whatsappMessage: "Hi, I am interested in Website Development services.",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Data-driven marketing strategies that deliver measurable results and real business growth.",
    features: [
      "Search Engine Optimization",
      "Social Media Marketing",
      "Google & Meta Ads",
      "Content Strategy",
    ],
    gradient: "from-accent to-primary",
    accentColor: "accent",
    delay: 0.2,
    whatsappMessage: "Hi, I am interested in Digital Marketing services.",
  },
  {
    icon: Zap,
    title: "Complete Growth Package",
    description: "Get both website and marketing services bundled together for maximum impact.",
    features: [
      "Website + Marketing",
      "Monthly Optimization",
      "Priority Support",
      "Performance Reports",
    ],
    gradient: "from-purple to-primary",
    accentColor: "purple",
    delay: 0.3,
    featured: true,
    whatsappMessage: "Hi, I am interested in the Complete Growth Package.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative overflow-hidden pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
      {/* Tech Background */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />

      {/* Animated Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.05) 0%, transparent 70%)"
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container-tight relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-mono text-sm">services.init()</span>
          </motion.div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Choose What Works for{" "}
            <span className="gradient-text">Your Business</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you need a stunning website, powerful marketing, or both—we've got you covered with flexible service options.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              whileHover={{ y: -8 }}
              className={`relative glass-card p-8 flex flex-col group ${service.featured ? "md:-mt-4 md:mb-4" : ""
                }`}
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, hsl(var(--${service.accentColor}) / 0.2), transparent 50%, hsl(var(--${service.accentColor}) / 0.2))`,
                }}
              />

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className={`absolute top-0 right-0 w-px h-12 bg-gradient-to-b from-${service.accentColor} to-transparent`} />
                <div className={`absolute top-0 right-0 h-px w-12 bg-gradient-to-l from-${service.accentColor} to-transparent`} />
              </div>

              {service.featured && (
                <motion.span
                  className="inline-flex items-center gap-1.5 self-start text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full mb-4 border border-accent/30"
                  animate={{ boxShadow: ["0 0 0 0 hsl(var(--accent) / 0.4)", "0 0 0 8px hsl(var(--accent) / 0)", "0 0 0 0 hsl(var(--accent) / 0.4)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Most Popular
                </motion.span>
              )}

              {/* Icon with Glow */}
              <div className="relative mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center relative z-10`}>
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <motion.div
                  className={`absolute inset-0 w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} blur-xl opacity-50`}
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold mb-3 relative z-10">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 flex-grow relative z-10">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 relative z-10">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-center gap-3 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: service.delay + featureIndex * 0.1 }}
                  >
                    <div className="w-5 h-5 rounded-md bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`https://wa.me/918920183166?text=${encodeURIComponent(service.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full relative z-10"
              >
                <Button
                  variant={service.featured ? "hero" : "glass"}
                  className="w-full group/btn overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </span>
                </Button>
              </a>

              {/* Data Line Decoration */}
              <motion.div
                className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-border to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: service.delay + 0.5, duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

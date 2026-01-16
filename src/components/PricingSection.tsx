import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Website Only",
    tagline: "Establish Your Presence",
    description: "Professional website development to build a strong digital foundation.",
    features: [
      "Custom Website Design",
      "Mobile Responsive",
      "Fast Loading Speed",
      "SEO Friendly Structure",
      "Contact Form Integration",
      "Social Media Links",
      "2 weeks delivery",
    ],
    cta: "Start Your Project",
    variant: "glass" as const,
    whatsappMessage: "Hi, I am interested in the Website Only package.",
  },
  {
    name: "Performance Marketing",
    tagline: "Accelerate Your Traffic",
    description: "Strategic marketing to drive qualified leads and increase visibility.",
    features: [
      "Social Media Management",
      "Google Ads Setup",
      "Targeted Audience Reach",
      "Content Strategy",
      "Monthly Analytics",
      "Brand Awareness",
    ],
    cta: "Boost Your Traffic",
    variant: "glass" as const,
    whatsappMessage: "Hi, I am interested in the Performance Marketing package.",
  },
  {
    name: "Complete Package",
    tagline: "Dominate Your Market",
    description: "A comprehensive website + marketing solution for maximum impact.",
    features: [
      "Everything in Launch",
      "Everything in Growth",
      "Priority Support",
      "Dedicated Manager",
      "Conversion Optimization",
      "Quarterly Strategy Review",
      "Priority delivery"
    ],
    cta: "Partner With Us",
    variant: "hero" as const,
    featured: true,
    whatsappMessage: "Hi, I am interested in the Complete Package.",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding relative bg-card/30">
      <div className="container-tight">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Our Solutions
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Choose Your path to <span className="gradient-text">Success</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you're just starting out or ready to scale, we have the right strategy for your business goals.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-8 flex flex-col relative ${pkg.featured
                ? "ring-2 ring-primary/50 md:-mt-4 md:mb-4"
                : ""
                }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground bg-gradient-to-r from-primary to-blue px-4 py-1.5 rounded-full">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Package Name */}
              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold mb-2">
                  {pkg.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  {pkg.tagline}
                </p>
                <p className="text-muted-foreground text-sm">
                  {pkg.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`https://wa.me/918920183166?text=${encodeURIComponent(pkg.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full"
              >
                <Button variant={pkg.variant} className="w-full group">
                  {pkg.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Not sure what you need? Let's have a chat.
          </p>
          <a href="tel:+918287391530">
            <Button variant="outline" size="lg">
              Book a Free Strategy Call
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;

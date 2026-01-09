import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Website Only",
    price: "$249",
    period: "one-time",
    description: "Perfect for businesses that need a professional online presence.",
    features: [
      "Custom Website Design",
      "Mobile Responsive",
      "SEO Optimization",
      "Contact Form Integration",
      "5 Pages Included",
      "2 Weeks Delivery",
    ],
    cta: "Get Started",
    variant: "glass" as const,
  },
  {
    name: "Marketing Only",
    price: "$99",
    period: "/month",
    description: "Boost your existing website with powerful marketing strategies.",
    features: [
      "Social Media Management",
      "Google Ads Campaign",
      "SEO Optimization",
      "Monthly Analytics Report",
      "Content Strategy",
      "Email Marketing",
    ],
    cta: "Get Started",
    variant: "glass" as const,
  },
  {
    name: "Complete Package",
    price: "$400",
    period: "/month",
    description: "The ultimate solution for complete digital transformation.",
    features: [
      "Everything in Website",
      "Everything in Marketing",
      "Priority Support",
      "Monthly Optimization",
      "Dedicated Manager",
      "Performance Dashboard",
    ],
    cta: "Get Started",
    variant: "hero" as const,
    featured: true,
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
            Pricing
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Flexible Plans for <span className="gradient-text">Every Budget</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the package that fits your needs. All plans include our commitment to quality and results.
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
              className={`glass-card p-8 flex flex-col relative ${
                pkg.featured
                  ? "ring-2 ring-primary/50 md:-mt-4 md:mb-4"
                  : ""
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground bg-gradient-to-r from-primary to-blue px-4 py-1.5 rounded-full">
                    <Sparkles className="w-3 h-3" />
                    Best Value
                  </span>
                </div>
              )}

              {/* Package Name */}
              <h3 className="font-display text-xl font-bold mb-2">
                {pkg.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {pkg.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="font-display text-4xl font-bold">{pkg.price}</span>
                <span className="text-muted-foreground text-sm ml-1">{pkg.period}</span>
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
              <Button variant={pkg.variant} className="w-full group">
                {pkg.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
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
            Need something custom? We're happy to create a tailored package for you.
          </p>
          <Button variant="outline" size="lg">
            Request Custom Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;

import { motion } from "framer-motion";
import { Code2, Target, DollarSign, HeadphonesIcon, Palette, Rocket, Binary } from "lucide-react";

const reasons = [
  {
    icon: Code2,
    title: "Tech-Focused Team",
    description: "Expert developers using the latest technologies to build modern, scalable solutions.",
    stat: "10+",
    statLabel: "Technologies",
  },
  {
    icon: Target,
    title: "Result-Driven Marketing",
    description: "Data-backed strategies that deliver measurable ROI and real business growth.",
    stat: "3x",
    statLabel: "Avg. ROI",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Premium quality at competitive prices. No hidden fees, transparent pricing.",
    stat: "40%",
    statLabel: "Cost Savings",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "24/7 support team ready to help you succeed. We're always just a message away.",
    stat: "24/7",
    statLabel: "Availability",
  },
  {
    icon: Palette,
    title: "Custom Solutions",
    description: "Tailored strategies and designs that perfectly match your brand and goals.",
    stat: "100%",
    statLabel: "Customized",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Quick turnaround without compromising quality. Launch your project on time.",
    stat: "2x",
    statLabel: "Faster",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding relative bg-card/30 overflow-hidden">
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 tech-grid" />
      
      {/* Animated Binary Decoration */}
      <div className="absolute top-10 left-10 font-mono text-xs text-primary/10 hidden lg:block">
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          01001100 01001111<br />
          01010110 01000101<br />
          01000010 01001100
        </motion.div>
      </div>

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
            <Binary className="w-4 h-4 text-primary" />
            <span className="text-primary font-mono text-sm">advantages.map()</span>
          </motion.div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Built Different, <span className="gradient-text">Delivers Better</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine technical excellence with creative innovation to deliver results that exceed expectations.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative p-6 rounded-2xl bg-background/50 border border-border/50 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-16 h-16">
                <svg className="w-full h-full text-primary/10" viewBox="0 0 64 64">
                  <path d="M64 0v16h-16M48 0h16" stroke="currentColor" fill="none" strokeWidth="1" />
                </svg>
              </div>

              {/* Scan Line on Hover */}
              <motion.div
                className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                initial={{ top: 0, opacity: 0 }}
                whileHover={{ top: "100%", opacity: 1 }}
                transition={{ duration: 0.6 }}
              />

              <div className="relative z-10">
                {/* Icon with Tech Styling */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                    <reason.icon className="w-6 h-6 text-primary" />
                    {/* Icon Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-primary/20 blur-md"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </div>
                  
                  {/* Stat Badge */}
                  <div className="text-right">
                    <div className="font-display text-xl font-bold gradient-text">{reason.stat}</div>
                    <div className="text-xs text-muted-foreground font-mono">{reason.statLabel}</div>
                  </div>
                </div>

                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>

                {/* Bottom Line */}
                <motion.div
                  className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Footer */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {["React", "Node.js", "TypeScript", "AWS", "SEO", "Analytics"].map((tech, i) => (
            <motion.span
              key={tech}
              className="px-3 py-1.5 rounded-full border border-border/50 bg-card/50 text-xs font-mono text-muted-foreground"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + i * 0.05 }}
              whileHover={{ borderColor: "hsl(var(--primary))", color: "hsl(var(--primary))" }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Palette, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Requirement Discussion",
    description: "We start by understanding your business, goals, and vision through a detailed consultation.",
    color: "primary",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Planning & Strategy",
    description: "Our team creates a comprehensive plan and strategy tailored to your specific needs.",
    color: "blue",
  },
  {
    icon: Palette,
    number: "03",
    title: "Design & Development",
    description: "We bring your vision to life with stunning designs and robust development.",
    color: "purple",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch",
    description: "Your project goes live with thorough testing and seamless deployment.",
    color: "accent",
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "Marketing & Growth",
    description: "We implement marketing strategies to drive traffic, leads, and business growth.",
    color: "primary",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding relative overflow-hidden">
      {/* Tech Background */}
      <div className="absolute inset-0 hex-pattern opacity-20" />
      
      {/* Animated Background Orb */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
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
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-mono text-sm">workflow.execute()</span>
          </motion.div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            From Idea to <span className="gradient-text">Success</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven 5-step process that transforms your vision into a thriving digital presence.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line with Animation */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
            <motion.div
              className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-primary via-primary to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "400%" }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center group"
              >
                {/* Step Number & Icon */}
                <div className="relative mx-auto mb-6">
                  {/* Pulsing Ring */}
                  <motion.div
                    className={`absolute inset-0 w-20 h-20 mx-auto rounded-2xl border border-${step.color}/30`}
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                  
                  <motion.div 
                    className="w-20 h-20 mx-auto rounded-2xl bg-card border border-border flex items-center justify-center relative overflow-hidden"
                    whileHover={{ borderColor: `hsl(var(--${step.color}))`, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Scan Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent"
                      initial={{ y: "-100%" }}
                      animate={{ y: "100%" }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3, repeatDelay: 3 }}
                    />
                    <step.icon className={`w-8 h-8 text-${step.color} relative z-10`} />
                  </motion.div>
                  
                  {/* Step Number Badge */}
                  <motion.span 
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue flex items-center justify-center text-xs font-bold text-primary-foreground font-mono"
                    whileHover={{ scale: 1.2 }}
                  >
                    {step.number}
                  </motion.span>

                  {/* Connection Dot */}
                  <motion.div
                    className="hidden lg:block absolute -bottom-8 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow to next */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-10 -right-2 text-primary/30"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Tech Decoration */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-4 px-6 py-3 glass-card font-mono text-sm">
            <motion.span 
              className="w-2 h-2 rounded-full bg-accent"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span className="text-muted-foreground">Status:</span>
            <span className="text-accent">Ready to start your project</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;

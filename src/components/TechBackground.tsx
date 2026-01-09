import { motion } from "framer-motion";

interface TechBackgroundProps {
  variant?: "grid" | "circuit" | "particles" | "hex";
  intensity?: "low" | "medium" | "high";
}

const TechBackground = ({ variant = "grid", intensity = "medium" }: TechBackgroundProps) => {
  const opacityMap = { low: 0.3, medium: 0.5, high: 0.8 };
  const opacity = opacityMap[intensity];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base Grid */}
      {variant === "grid" && (
        <>
          <div 
            className="absolute inset-0"
            style={{
              opacity,
              backgroundImage: `
                linear-gradient(hsl(var(--primary) / 0.05) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--primary) / 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
          {/* Animated Grid Lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(90deg, transparent 50%, hsl(var(--primary) / 0.1) 50%)`,
              backgroundSize: '120px 1px',
              backgroundRepeat: 'repeat',
            }}
          />
        </>
      )}

      {/* Circuit Pattern */}
      {variant === "circuit" && (
        <div className="absolute inset-0 circuit-pattern" style={{ opacity }} />
      )}

      {/* Hex Pattern */}
      {variant === "hex" && (
        <div className="absolute inset-0 hex-pattern" style={{ opacity }} />
      )}

      {/* Floating Particles */}
      {variant === "particles" && (
        <>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/40"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
              }}
              animate={{
                y: [null, "-100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
            />
          ))}
        </>
      )}

      {/* Corner Decorations */}
      <svg className="absolute top-4 left-4 w-16 h-16 text-primary/20" viewBox="0 0 64 64" fill="none">
        <path d="M0 16V0h16M0 20v-4M20 0h-4" stroke="currentColor" strokeWidth="1" />
      </svg>
      <svg className="absolute top-4 right-4 w-16 h-16 text-primary/20" viewBox="0 0 64 64" fill="none">
        <path d="M64 16V0H48M64 20v-4M44 0h4" stroke="currentColor" strokeWidth="1" />
      </svg>
      <svg className="absolute bottom-4 left-4 w-16 h-16 text-primary/20" viewBox="0 0 64 64" fill="none">
        <path d="M0 48v16h16M0 44v4M20 64h-4" stroke="currentColor" strokeWidth="1" />
      </svg>
      <svg className="absolute bottom-4 right-4 w-16 h-16 text-primary/20" viewBox="0 0 64 64" fill="none">
        <path d="M64 48v16H48M64 44v4M44 64h4" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default TechBackground;

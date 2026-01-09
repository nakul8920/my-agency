import { motion } from "framer-motion";

interface GlowingOrbProps {
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "accent" | "purple" | "blue";
  position?: { top?: string; left?: string; right?: string; bottom?: string };
  delay?: number;
}

const GlowingOrb = ({ 
  size = "md", 
  color = "primary", 
  position = { top: "50%", left: "50%" },
  delay = 0 
}: GlowingOrbProps) => {
  const sizeMap = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
    xl: "w-[500px] h-[500px]",
  };

  const colorMap = {
    primary: "bg-primary/20",
    accent: "bg-accent/15",
    purple: "bg-purple/15",
    blue: "bg-blue/15",
  };

  return (
    <motion.div
      className={`absolute ${sizeMap[size]} ${colorMap[color]} rounded-full blur-[100px]`}
      style={position}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
        x: [-20, 20, -20],
        y: [-10, 10, -10],
      }}
      transition={{ 
        duration: 8 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    />
  );
};

export default GlowingOrb;

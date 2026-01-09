import { motion } from "framer-motion";

interface CircuitLinesProps {
  className?: string;
}

const CircuitLines = ({ className = "" }: CircuitLinesProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Horizontal Lines */}
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Animated Circuit Path 1 */}
        <motion.path
          d="M0,100 L200,100 L200,50 L400,50 L400,150 L600,150"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear" }}
        />

        {/* Animated Circuit Path 2 */}
        <motion.path
          d="M100,200 L300,200 L300,250 L500,250 L500,180 L700,180"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, repeatType: "loop", ease: "linear" }}
        />

        {/* Circuit Nodes */}
        {[
          { cx: 200, cy: 100 },
          { cx: 400, cy: 50 },
          { cx: 400, cy: 150 },
          { cx: 300, cy: 200 },
          { cx: 500, cy: 250 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r="4"
            fill="hsl(var(--primary))"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
          />
        ))}
      </svg>

      {/* Data Pulse Effect */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-primary/50 blur-sm"
        initial={{ x: 0, y: 100, opacity: 0 }}
        animate={{ 
          x: [0, 200, 200, 400, 400, 600],
          y: [100, 100, 50, 50, 150, 150],
          opacity: [0, 1, 1, 1, 1, 0]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default CircuitLines;

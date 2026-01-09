import { motion } from "framer-motion";
import { useMemo } from "react";

interface BinaryRainProps {
  className?: string;
  columns?: number;
}

const BinaryRain = ({ className = "", columns = 20 }: BinaryRainProps) => {
  const streams = useMemo(() => {
    return Array.from({ length: columns }, (_, i) => ({
      id: i,
      left: `${(i / columns) * 100}%`,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
      chars: Array.from({ length: 20 }, () => (Math.random() > 0.5 ? "1" : "0")),
    }));
  }, [columns]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute top-0 text-xs font-mono leading-none"
          style={{ left: stream.left }}
          initial={{ y: "-100%" }}
          animate={{ y: "100vh" }}
          transition={{
            duration: stream.duration,
            repeat: Infinity,
            delay: stream.delay,
            ease: "linear",
          }}
        >
          {stream.chars.map((char, i) => (
            <div
              key={i}
              className="text-primary"
              style={{
                opacity: 1 - i * 0.05,
                textShadow: i === 0 ? "0 0 10px hsl(var(--primary))": undefined,
              }}
            >
              {char}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default BinaryRain;

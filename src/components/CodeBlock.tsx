import { motion } from "framer-motion";

interface CodeBlockProps {
  className?: string;
}

const codeLines = [
  { text: "const", color: "text-purple" },
  { text: " agency", color: "text-foreground" },
  { text: " = ", color: "text-muted-foreground" },
  { text: "{", color: "text-foreground" },
  { text: "\n  name:", color: "text-accent" },
  { text: " 'Digital Agency'", color: "text-primary" },
  { text: ",", color: "text-muted-foreground" },
  { text: "\n  services:", color: "text-accent" },
  { text: " [", color: "text-foreground" },
  { text: "'web'", color: "text-primary" },
  { text: ", ", color: "text-muted-foreground" },
  { text: "'marketing'", color: "text-primary" },
  { text: "]", color: "text-foreground" },
  { text: ",", color: "text-muted-foreground" },
  { text: "\n  growth:", color: "text-accent" },
  { text: " true", color: "text-blue" },
  { text: "\n};", color: "text-foreground" },
];

const CodeBlock = ({ className = "" }: CodeBlockProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`glass-card p-4 font-mono text-sm ${className}`}
    >
      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border/50">
        <div className="w-3 h-3 rounded-full bg-destructive/60" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <div className="w-3 h-3 rounded-full bg-accent/60" />
        <span className="ml-2 text-xs text-muted-foreground">agency.ts</span>
      </div>
      <pre className="text-xs leading-relaxed">
        <code>
          {codeLines.map((line, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05, duration: 0.1 }}
              className={line.color}
            >
              {line.text}
            </motion.span>
          ))}
        </code>
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-primary ml-0.5"
        />
      </pre>
    </motion.div>
  );
};

export default CodeBlock;

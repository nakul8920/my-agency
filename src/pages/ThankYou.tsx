import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Home, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";

const ThankYou = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const userName = useMemo(() => {
    const nameParam = searchParams.get("name");
    if (!nameParam) return null;

    try {
      const decoded = decodeURIComponent(nameParam);
      return decoded
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
    } catch {
      return nameParam;
    }
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center p-4">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px]"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-2xl mx-auto"
      >
        {/* Glass Card Container */}
        <div className="backdrop-blur-xl bg-card/30 border border-white/10 shadow-2xl rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

          {/* Success Icon */}
          <motion.div variants={itemVariants} className="mb-8 flex justify-center relative z-10">
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center shadow-inner"
              >
                <CheckCircle2 className="w-12 h-12 text-green-500" strokeWidth={3} />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full border border-green-500/20"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6 mb-10 relative z-10">
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Thank You
              {userName && (
                <span className="block mt-2 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                  {userName}!
                </span>
              )}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
              We've received your message. Our team is already reviewing it and will get back to you within <span className="text-foreground font-semibold">24 hours</span>.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 relative z-10">
            <Button
              size="lg"
              className="w-full sm:w-auto h-12 px-8 text-base shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90 min-w-[160px]"
              onClick={() => navigate("/")}
            >
              <Home className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto h-12 px-8 text-base hover:bg-white/5 border-white/10 min-w-[160px]"
              onClick={() => navigate("/portfolio")}
            >
              See Our Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

          {/* WhatsApp / Instant Connection */}
          <motion.div variants={itemVariants} className="pt-8 border-t border-white/10 relative z-10">
            <p className="text-sm text-muted-foreground mb-4">Want a faster response?</p>
            <div className="flex justify-center">
              <a
                href="https://wa.me/918920183166"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg shadow-green-500/20 h-14 px-8 text-lg w-full sm:w-auto transition-all duration-300 transform group-hover:-translate-y-1"
                >
                  <MessageCircle className="mr-2 w-6 h-6" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ThankYou;

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitToGoogleSheets } from "@/lib/googleSheets";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@growthscale.com",
    href: "mailto:hello@growthscale.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 82873 91530",
    href: "tel:+918287391530",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Delhi, India",
    href: "#",
  },
];

const ContactSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    // Name: Required, min 2 chars, letters only
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name can only contain letters";
    }

    // Phone: Required, 10 digits
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate() && !isSubmitting) {
      setIsSubmitting(true);
      try {
        // Submit to Google Sheets
        const success = await submitToGoogleSheets({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          source: 'contact',
        });

        // Navigate to thank you page
        setFormData({ name: "", phone: "" });
        setErrors({});
        // Navigate to thank you page with user's name
        navigate(`/thank-you?name=${encodeURIComponent(formData.name.trim())}`);
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Something went wrong. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Left Column - Header Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let's Start Your{" "}
              <span className="gradient-text">Project</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0">
              Have a project in mind? We'd love to hear about it. Fill out the form or reach out directly through any of these channels.
            </p>
          </motion.div>

          {/* Right Column - Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6 shadow-xl shadow-primary/5">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Name</label>
                  <Input
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-background/50 border-border/50 focus:border-primary/50"
                  />
                  {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-background/50 border-border/50 focus:border-primary/50"
                  />
                  {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                </div>
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                We'll get back to you within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Contact Info Section - Bottom Centered */}
        <div className="max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-6 mb-10 w-full">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                className="flex flex-col items-center gap-1.5 sm:gap-4 p-2 sm:p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group text-center min-w-0"
              >
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 flex-shrink-0">
                  <item.icon className="w-3.5 h-3.5 sm:w-6 sm:h-6" />
                </div>
                <div className="w-full min-w-0">
                  <div className="text-[10px] sm:text-sm font-medium text-muted-foreground mb-0.5 truncate px-1">
                    {item.label}
                  </div>
                  <div className="text-[10px] sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors break-words leading-tight">
                    {item.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* WhatsApp Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center"
          >
            <a
              href="https://wa.me/918920183166?text=Hi%2C%20I%20have%20a%20project%20in%20mind."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="accent" size="lg" className="gap-2 h-12 px-8 text-base">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

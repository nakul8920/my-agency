import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer comprehensive digital services including website development, web application development, e-commerce solutions, digital marketing, SEO optimization, social media management, content creation, brand identity design, and ongoing website maintenance. Our team specializes in creating modern, responsive websites and powerful digital marketing strategies tailored to your business needs."
  },
  {
    question: "How long does it take to build a website?",
    answer: "The timeline depends on the complexity and scope of your project. A simple website typically takes 2-4 weeks, a medium-complexity website takes 4-8 weeks, and a complex e-commerce or custom web application can take 8-16 weeks or more. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process."
  },
  {
    question: "Do you provide website hosting?",
    answer: "Yes, we offer hosting solutions as part of our services. We can set up reliable hosting for your website, manage server configurations, and ensure optimal performance. We work with trusted hosting providers to ensure your website has high uptime, fast loading speeds, and excellent security. Hosting packages are available separately or as part of our maintenance plans."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Absolutely! We specialize in website redesigns that modernize your existing site while improving functionality and user experience. We'll analyze your current website, identify areas for improvement, and create a redesign plan that aligns with your goals. We can work with your existing content or help you create new content during the redesign process."
  },
  {
    question: "What is included in your digital marketing services?",
    answer: "Our digital marketing services include SEO (Search Engine Optimization), social media marketing and management, content marketing, email marketing campaigns, pay-per-click (PPC) advertising, Google Ads management, social media advertising, analytics and reporting, conversion rate optimization, and brand awareness campaigns. We create customized strategies based on your industry and target audience."
  },
  {
    question: "How do you determine pricing for projects?",
    answer: "Pricing is determined based on several factors including project scope, complexity, features required, timeline, and specific customization needs. We provide detailed quotes after understanding your requirements. Our pricing is transparent with no hidden fees. We offer different packages for different budgets and can work with you to find the best solution that fits your needs."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Yes, all websites we create are fully responsive and mobile-friendly. We ensure your website looks and functions perfectly on all devices including smartphones, tablets, and desktops. Mobile optimization is a standard part of our development process, as mobile traffic now represents a significant portion of web users."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive support and maintenance plans. Our maintenance services include regular updates, security patches, backups, performance monitoring, content updates, technical support, and more. We offer monthly, quarterly, and annual maintenance packages tailored to your needs. You can choose the level of support that works best for your business."
  },
  {
    question: "Can you help with SEO for my website?",
    answer: "Absolutely! SEO is one of our core services. We provide on-page SEO optimization, technical SEO, keyword research, content optimization, link building strategies, local SEO, SEO audits, and ongoing SEO monitoring. Our team stays updated with the latest SEO best practices and Google algorithm changes to ensure your website ranks well in search results."
  },
  {
    question: "What happens after my website is launched?",
    answer: "After launch, we provide a handover session where we walk you through your new website, show you how to manage content, and answer any questions. We also offer post-launch support to fix any issues that may arise. Additionally, we can set up analytics, provide training materials, and offer maintenance packages to keep your website updated, secure, and performing well."
  },
  {
    question: "Do you work with businesses outside of your local area?",
    answer: "Yes, we work with clients worldwide! While we're based locally, we have experience working with clients remotely through video calls, email, and project management tools. We're comfortable collaborating with businesses anywhere and can adjust our communication methods to work across different time zones."
  },
  {
    question: "What information do you need to get started?",
    answer: "To get started, we'll need to understand your business goals, target audience, brand identity, preferred design style, key features needed, content materials (text, images, logos), timeline expectations, and budget considerations. During our initial consultation, we'll gather all necessary information and answer any questions you have about the process."
  }
];

const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="border border-border/50 rounded-xl bg-card/50 p-6 hover:border-primary/50 transition-all duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-4 text-left group"
      >
        <div className="flex items-start gap-4 flex-1">
          <HelpCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {question}
          </h3>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pt-4 pl-9 text-muted-foreground leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
};

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
          <div className="absolute inset-0 hex-pattern opacity-20" />
          
          <div className="container-tight relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Frequently Asked
                <span className="gradient-text block">Questions</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Find answers to common questions about our services, processes, and how we can help grow your business online.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding relative">
          <div className="container-tight">
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
              ))}
            </div>

            {/* Additional Help Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 text-center max-w-3xl mx-auto"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Still have questions?
              </h2>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? We're here to help! Get in touch with our team and we'll be happy to answer any questions you may have.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, UserCheck } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "Information We Collect",
    content: `We collect information that you provide directly to us, including but not limited to:

• Personal Information: Name, email address, phone number, company name, and other contact details when you fill out forms, request quotes, or communicate with us.

• Business Information: Details about your business, project requirements, budget information, and other business-related data you share with us.

• Technical Information: IP address, browser type, device information, operating system, pages visited, time spent on pages, and other analytics data when you visit our website.

• Communications: Records of your communications with us, including emails, chat messages, phone calls, and other correspondence.

• Cookies and Tracking Technologies: We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content.`
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content: `We use the information we collect for various purposes, including:

• Service Delivery: To provide, maintain, and improve our services, respond to your inquiries, process your requests, and deliver the services you've requested.

• Communication: To communicate with you about our services, send you updates, respond to your questions and requests, and provide customer support.

• Business Operations: To manage our business operations, process payments, maintain our records, and comply with legal obligations.

• Marketing: With your consent, to send you promotional materials, newsletters, marketing communications, and information about our services that may interest you.

• Analytics: To analyze website usage, understand user behavior, improve our website functionality, and optimize user experience.

• Legal Compliance: To comply with applicable laws, regulations, legal processes, and enforce our terms and conditions.

• Protection: To protect our rights, property, safety, and the rights, property, and safety of our users and others.`
  },
  {
    icon: Lock,
    title: "Data Security",
    content: `We take the security of your personal information seriously and implement appropriate technical and organizational measures to protect your data:

• Encryption: We use industry-standard encryption technologies to protect data transmission and storage.

• Secure Storage: Your data is stored on secure servers with access controls and monitoring.

• Access Controls: We limit access to personal information to authorized employees, contractors, and service providers who need it to perform their job functions.

• Regular Updates: We regularly update our security measures and systems to address emerging threats and vulnerabilities.

• Incident Response: In the event of a data breach, we have procedures in place to promptly detect, investigate, and respond to security incidents.

However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security of your data.`
  },
  {
    icon: UserCheck,
    title: "Your Rights and Choices",
    content: `You have certain rights regarding your personal information:

• Access: You have the right to request access to the personal information we hold about you.

• Correction: You have the right to request correction of inaccurate or incomplete personal information.

• Deletion: You have the right to request deletion of your personal information, subject to certain exceptions.

• Objection: You have the right to object to processing of your personal information for certain purposes.

• Data Portability: You have the right to request transfer of your personal information to another service provider.

• Opt-Out: You can opt-out of receiving marketing communications from us by clicking the unsubscribe link in our emails or contacting us directly.

• Cookies: You can control cookies through your browser settings, though disabling cookies may affect website functionality.

To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.`
  },
  {
    icon: Shield,
    title: "Third-Party Services",
    content: `We may share your information with third-party service providers who assist us in operating our business and providing services:

• Service Providers: We work with trusted third-party service providers for hosting, analytics, payment processing, email delivery, customer support, and other business functions.

• Business Partners: We may share information with business partners for joint marketing efforts or service delivery, with your consent where required.

• Legal Requirements: We may disclose information if required by law, court order, or government regulation, or to protect our rights and interests.

• Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.

We ensure that third-party service providers are contractually obligated to protect your information and use it only for the purposes we specify.`
  }
];

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
          <div className="absolute inset-0 hex-pattern opacity-20" />
          
          <div className="container-tight relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 bg-primary/10 mb-4 sm:mb-6">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-primary">Privacy & Security</span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                Privacy
                <span className="gradient-text block">Policy</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-3 sm:mb-4 px-2">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Last updated: {currentDate}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding relative px-4 sm:px-6">
          <div className="container-tight">
            <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="prose prose-lg max-w-none"
              >
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  At GrowthCode, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
                  website, use our services, or interact with us. Please read this policy carefully to understand our practices 
                  regarding your personal data.
                </p>
              </motion.div>

              {/* Main Sections */}
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-border/50 rounded-xl sm:rounded-2xl bg-card/50 p-4 sm:p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                      {section.title}
                    </h2>
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line pl-0 sm:pl-14 md:pl-16">
                    {section.content}
                  </div>
                </motion.div>
              ))}

              {/* Additional Sections */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border border-border/50 rounded-xl sm:rounded-2xl bg-card/50 p-4 sm:p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
              >
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Children's Privacy</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
                  information from children. If you believe we have collected information from a child, please contact us 
                  immediately, and we will take steps to delete such information.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border border-border/50 rounded-xl sm:rounded-2xl bg-card/50 p-4 sm:p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
              >
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">International Data Transfers</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country of residence. 
                  These countries may have data protection laws that differ from those in your country. We take appropriate 
                  safeguards to ensure that your information receives an adequate level of protection regardless of where it is processed.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border border-border/50 rounded-xl sm:rounded-2xl bg-card/50 p-4 sm:p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
              >
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Changes to This Privacy Policy</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, 
                  legal requirements, or other factors. We will notify you of any material changes by posting the new 
                  Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this 
                  Privacy Policy periodically to stay informed about how we protect your information.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

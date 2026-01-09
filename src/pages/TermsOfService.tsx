import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, Scale, AlertCircle, CheckCircle, Ban, DollarSign } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    content: `By accessing and using our website or services, you accept and agree to be bound by these Terms of Service. 
    If you do not agree to these terms, please do not use our website or services. These terms constitute a legally 
    binding agreement between you and GrowthCode. We reserve the right to modify these terms at any time, and your 
    continued use of our services after such modifications constitutes acceptance of the updated terms.`
  },
  {
    icon: CheckCircle,
    title: "Services Description",
    content: `GrowthCode provides digital services including but not limited to:

• Website development and design
• Web application development
• E-commerce solutions
• Digital marketing services
• SEO optimization
• Social media management
• Content creation
• Brand identity design
• Website maintenance and support

We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without notice. 
We do not guarantee that our services will be uninterrupted, error-free, or available at all times.`
  },
  {
    icon: DollarSign,
    title: "Pricing and Payment",
    content: `Pricing for our services will be agreed upon in writing before work begins. Payment terms are as follows:

• Initial Deposit: A deposit may be required before project commencement, as specified in your project agreement.
• Payment Schedule: Payments will be structured according to project milestones or as otherwise agreed in writing.
• Final Payment: Final payment is due upon project completion and delivery.
• Late Payments: Late payments may incur additional fees as specified in your agreement.
• Refunds: Refund policies will be clearly outlined in your service agreement. Refunds are handled on a case-by-case basis.
• Price Changes: We reserve the right to change our pricing at any time, but changes will not affect existing agreements.
• Taxes: All prices are exclusive of applicable taxes, which will be added to invoices where required by law.`
  },
  {
    icon: FileText,
    title: "Intellectual Property Rights",
    content: `Intellectual property ownership is determined as follows:

• Client Content: You retain all rights to content, materials, and information you provide to us.
• Our Work: Upon full payment, you will receive ownership or a license to use the final deliverables as specified in your agreement.
• Pre-existing Materials: We retain ownership of any pre-existing materials, tools, frameworks, or intellectual property we use in providing services.
• Portfolio Rights: We reserve the right to showcase completed work in our portfolio and marketing materials, unless otherwise agreed in writing.
• Third-Party Materials: Any third-party materials, including fonts, images, plugins, or software, are subject to their respective licenses and terms.
• Prohibited Use: You may not resell, redistribute, or claim ownership of our proprietary processes, methodologies, or templates.`
  },
  {
    icon: AlertCircle,
    title: "Client Responsibilities",
    content: `As our client, you are responsible for:

• Providing accurate and complete information necessary for project completion.
• Timely provision of content, materials, feedback, and approvals.
• Reviewing deliverables and providing feedback within agreed timeframes.
• Ensuring you have rights to any content or materials you provide.
• Making timely payments according to agreed payment terms.
• Maintaining backups of your content and website.
• Compliance with applicable laws and regulations regarding your use of our services.
• Obtaining necessary licenses, permissions, or approvals for your content.

Delays in meeting your responsibilities may result in project delays and additional costs.`
  },
  {
    icon: Scale,
    title: "Warranties and Disclaimers",
    content: `Warranties:

• We warrant that services will be performed with professional skill and care.
• We warrant that deliverables will substantially conform to agreed specifications upon final payment.

Disclaimers:

• We do not guarantee specific business results, rankings, traffic increases, or revenue from our services.
• We are not responsible for third-party services, platforms, or changes beyond our control.
• Website functionality depends on hosting, server configuration, and third-party services outside our direct control.
• We do not warrant that services will be error-free or uninterrupted.
• Our services are provided "as is" to the fullest extent permitted by law.

Limitation of Liability:

Our liability is limited to the total amount paid for the specific service giving rise to the claim. We are not liable 
for indirect, incidental, special, or consequential damages.`
  },
  {
    icon: Ban,
    title: "Prohibited Uses",
    content: `You agree not to use our services for:

• Any illegal, fraudulent, or unauthorized purpose.
• Violating any laws, regulations, or third-party rights.
• Transmitting harmful code, viruses, or malicious software.
• Attempting to gain unauthorized access to our systems or networks.
• Reverse engineering, decompiling, or disassembling our proprietary technologies.
• Using our services to compete with us or build similar services.
• Collecting or harvesting information about other users.
• Impersonating any person or entity or misrepresenting your affiliation.
• Spamming, phishing, or engaging in deceptive practices.
• Any activity that could harm our reputation or business.

Violation of these prohibitions may result in immediate termination of services and legal action.`
  },
  {
    icon: FileText,
    title: "Termination",
    content: `Either party may terminate services as follows:

• With Cause: Either party may terminate for material breach if the other party fails to cure the breach within 30 days of written notice.
• By Client: You may terminate at any time with written notice, subject to payment for work completed and any cancellation fees.
• By Us: We may terminate if you fail to pay, breach these terms, or engage in prohibited activities.
• Effect of Termination: Upon termination:
  - You must pay for all services rendered up to the termination date.
  - We may suspend or revoke access to deliverables if payment is outstanding.
  - Each party's rights and obligations that by their nature should survive will continue.
  - Confidentiality obligations remain in effect.

We reserve the right to refuse service to anyone at our sole discretion.`
  }
];

const TermsOfService = () => {
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
                <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-primary">Legal Terms</span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                Terms of
                <span className="gradient-text block">Service</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-3 sm:mb-4 px-2">
                Please read these terms carefully before using our services. These terms govern your relationship with GrowthCode.
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
                  These Terms of Service ("Terms") govern your access to and use of GrowthCode's website and services. 
                  By accessing our website or using our services, you agree to be bound by these Terms. If you disagree 
                  with any part of these terms, you may not access or use our services. These Terms should be read in 
                  conjunction with our Privacy Policy.
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
                  <div className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-0 sm:pl-14 md:pl-16">
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
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Confidentiality</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                  Both parties agree to maintain the confidentiality of proprietary information shared during the course of 
                  our engagement. This includes but is not limited to business strategies, financial information, technical 
                  details, and any other confidential information marked as such or reasonably understood to be confidential.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  This confidentiality obligation survives termination of our services and continues indefinitely, except 
                  where information becomes publicly available through no breach of this agreement, is independently 
                  developed, or disclosure is required by law.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border border-border/50 rounded-xl sm:rounded-2xl bg-card/50 p-4 sm:p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
              >
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Indemnification</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  You agree to indemnify, defend, and hold harmless GrowthCode, its employees, contractors, and affiliates 
                  from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use 
                  of our services, violation of these Terms, infringement of any third-party rights, or your content or materials. 
                  This indemnification obligation survives termination of these Terms.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border border-border/50 rounded-xl sm:rounded-2xl bg-card/50 p-4 sm:p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
              >
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Dispute Resolution</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                  Any disputes arising from these Terms or our services shall be resolved as follows:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground pl-4">
                  <li>First, we encourage direct communication to resolve disputes amicably.</li>
                  <li>If direct resolution is unsuccessful, disputes may be subject to mediation before legal proceedings.</li>
                  <li>These Terms shall be governed by and construed in accordance with applicable laws.</li>
                  <li>Any legal proceedings shall be conducted in the appropriate courts with proper jurisdiction.</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border border-border/50 rounded-xl sm:rounded-2xl bg-card/50 p-4 sm:p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
              >
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Changes to Terms</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. Material changes will be notified through our 
                  website or via email. Your continued use of our services after changes become effective constitutes 
                  acceptance of the modified Terms. If you do not agree to the changes, you must stop using our services.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border border-border/50 rounded-xl sm:rounded-2xl bg-card/50 p-4 sm:p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
              >
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Miscellaneous</h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Entire Agreement:</strong> These Terms, together with any service 
                    agreements, constitute the entire agreement between you and GrowthCode.
                  </p>
                  <p>
                    <strong className="text-foreground">Severability:</strong> If any provision is found to be unenforceable, 
                    the remaining provisions will remain in full effect.
                  </p>
                  <p>
                    <strong className="text-foreground">Waiver:</strong> Failure to enforce any provision does not constitute 
                    a waiver of that provision.
                  </p>
                  <p>
                    <strong className="text-foreground">Assignment:</strong> You may not assign these Terms without our 
                    written consent. We may assign our rights and obligations.
                  </p>
                  <p>
                    <strong className="text-foreground">Force Majeure:</strong> We are not liable for delays or failures 
                    due to circumstances beyond our reasonable control.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;

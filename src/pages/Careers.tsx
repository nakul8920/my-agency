import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, DollarSign, Users, Code, TrendingUp, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobOpenings = [
  {
    icon: Code,
    title: "Senior Frontend Developer",
    department: "Development",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "3-5 years",
    description: "We're looking for an experienced Frontend Developer to join our team. You'll work on building modern, responsive websites and web applications using React, TypeScript, and modern CSS frameworks.",
    requirements: [
      "Strong experience with React, TypeScript, and Next.js",
      "Proficiency in HTML, CSS, and JavaScript",
      "Experience with Tailwind CSS or similar frameworks",
      "Knowledge of Git and version control",
      "Understanding of responsive design principles",
      "Portfolio demonstrating modern web development skills"
    ],
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Git"],
    whatsappMessage: "Hi, I am interested in applying for the Senior Frontend Developer position at GrowthCode. I have experience with React, TypeScript, and modern frontend development. I would like to discuss this opportunity further."
  },
  {
    icon: Palette,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "2-4 years",
    description: "Join our creative team as a UI/UX Designer. You'll be responsible for designing beautiful, user-friendly interfaces for websites and web applications that drive engagement and conversions.",
    requirements: [
      "Strong portfolio showcasing UI/UX design work",
      "Proficiency in Figma, Adobe XD, or Sketch",
      "Understanding of user-centered design principles",
      "Experience with responsive design",
      "Knowledge of design systems and component libraries",
      "Ability to create wireframes, prototypes, and high-fidelity designs"
    ],
    skills: ["Figma", "UI/UX Design", "Prototyping", "Design Systems", "User Research"],
    whatsappMessage: "Hi, I am interested in the UI/UX Designer position at GrowthCode. I have a strong portfolio in UI/UX design and experience with Figma and design systems. I would love to discuss how I can contribute to your design team."
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "2-3 years",
    description: "We need a Digital Marketing Specialist to help our clients grow their online presence. You'll manage SEO campaigns, social media strategies, content marketing, and paid advertising campaigns.",
    requirements: [
      "Experience with SEO and SEM strategies",
      "Knowledge of Google Analytics and Google Ads",
      "Social media marketing experience",
      "Content creation and copywriting skills",
      "Understanding of conversion optimization",
      "Experience with marketing automation tools"
    ],
    skills: ["SEO", "Google Ads", "Social Media", "Content Marketing", "Analytics"],
    whatsappMessage: "Hi, I am interested in the Digital Marketing Specialist role at GrowthCode. I have experience with SEO, Google Ads, and social media marketing. I would like to discuss how I can help grow your clients' online presence."
  },
  {
    icon: Code,
    title: "Full Stack Developer",
    department: "Development",
    location: "Remote",
    type: "Full-time",
    experience: "4-6 years",
    description: "Looking for a Full Stack Developer to work on end-to-end web solutions. You'll handle both frontend and backend development, database design, API integration, and deployment.",
    requirements: [
      "Experience with React, Node.js, and Express",
      "Database design and management (PostgreSQL, MongoDB)",
      "RESTful API development",
      "Experience with cloud platforms (AWS, Vercel, etc.)",
      "Understanding of authentication and security",
      "Experience with testing frameworks"
    ],
    skills: ["React", "Node.js", "PostgreSQL", "REST APIs", "AWS"],
    whatsappMessage: "Hi, I am interested in the Full Stack Developer position at GrowthCode. I have experience with React, Node.js, and full-stack development. I would like to discuss this opportunity and how I can contribute to your development team."
  },
  {
    icon: Zap,
    title: "WordPress Developer",
    department: "Development",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "2-4 years",
    description: "Join us as a WordPress Developer to create custom themes, plugins, and maintain WordPress websites. You'll work on both frontend and backend WordPress development.",
    requirements: [
      "Strong WordPress development experience",
      "PHP and MySQL knowledge",
      "Experience with custom theme and plugin development",
      "Understanding of WordPress architecture",
      "Knowledge of WooCommerce (preferred)",
      "Experience with page builders (Elementor, Gutenberg)"
    ],
    skills: ["WordPress", "PHP", "MySQL", "WooCommerce", "Custom Themes"],
    whatsappMessage: "Hi, I am interested in the WordPress Developer position at GrowthCode. I have strong experience with WordPress, PHP, and custom theme development. I would like to discuss this opportunity further."
  }
];

const benefits = [
  { icon: DollarSign, title: "Competitive Salary", description: "We offer competitive compensation packages" },
  { icon: Clock, title: "Flexible Hours", description: "Work-life balance with flexible working hours" },
  { icon: MapPin, title: "Remote Work", description: "Work from anywhere, remote-friendly environment" },
  { icon: Users, title: "Team Culture", description: "Collaborative and supportive team environment" },
  { icon: Briefcase, title: "Growth Opportunities", description: "Career development and learning opportunities" },
  { icon: Zap, title: "Modern Tools", description: "Access to latest tools and technologies" }
];

const Careers = () => {
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
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-primary">Join Our Team</span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                Build Your Career
                <span className="gradient-text block">With Us</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
                Join a team of passionate developers, designers, and marketers working on exciting projects and helping businesses grow online.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding relative px-4 sm:px-6">
          <div className="container-tight">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Why Work With Us?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                We offer a great work environment, competitive benefits, and opportunities to grow your career.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-border/50 rounded-xl sm:rounded-2xl bg-card/50 p-4 sm:p-6 hover:border-primary/50 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section className="section-padding relative px-4 sm:px-6">
          <div className="container-tight">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Open Positions
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Check out our current job openings and find the perfect role for you.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-border/50 rounded-xl sm:rounded-2xl bg-card/50 p-4 sm:p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <job.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl sm:text-2xl font-bold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span>{job.experience}</span>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                        {job.description}
                      </p>
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm sm:text-base mb-2">Key Requirements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-muted-foreground pl-2">
                          {job.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 sm:px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-xs sm:text-sm text-primary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <Button 
                        variant="heroOutline" 
                        size="default" 
                        className="w-full sm:w-auto mt-4 group"
                        asChild
                      >
                        {/* Update the phone number: Replace 1234567890 with your WhatsApp number (country code + number without + or spaces) */}
                        <a 
                          href={`https://wa.me/1234567890?text=${encodeURIComponent(job.whatsappMessage)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                          <span className="text-sm sm:text-base">Apply via WhatsApp</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding relative px-4 sm:px-6">
          <div className="container-tight">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto border border-border/50 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-6 sm:p-8 md:p-10 text-center"
            >
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Don't See a Role That Fits?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8">
                We're always looking for talented individuals to join our team. Send us your resume and let's discuss how you can contribute to our mission.
              </p>
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full sm:w-auto group"
                asChild
              >
                {/* Update the phone number: Replace 1234567890 with your WhatsApp number (country code + number without + or spaces) */}
                <a 
                  href="https://wa.me/1234567890?text=Hi%2C%20I%20am%20interested%20in%20career%20opportunities%20at%20GrowthCode.%20I%20would%20like%20to%20discuss%20potential%20positions."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="text-sm sm:text-base">Connect on WhatsApp</span>
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;

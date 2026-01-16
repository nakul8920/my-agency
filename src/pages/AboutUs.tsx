import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Target, Rocket, Heart, Code, TrendingUp, Palette, Zap, Award, Globe, Lightbulb, CheckCircle, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const milestones = [
  {
    year: "2020",
    title: "The Beginning",
    description: "Nakul Jangra and Mohit came together with a shared vision to help businesses succeed online. Starting from a small workspace, we began our journey with passion and determination."
  },
  {
    year: "2021",
    title: "First Success",
    description: "Completed our first 50 projects and built a strong reputation. Our team grew from 2 to 10 members, and we expanded our service offerings to include comprehensive digital solutions."
  },
  {
    year: "2022",
    title: "Rapid Growth",
    description: "Reached 200+ successful projects and established ourselves as a trusted digital agency. Opened our first office and expanded our client base globally with exceptional results."
  },
  {
    year: "2023",
    title: "Innovation & Excellence",
    description: "Introduced cutting-edge technologies and methodologies. Won industry recognition and became a recognized leader in web development and digital marketing services."
  },
  {
    year: "2024",
    title: "Today & Beyond",
    description: "Serving 500+ clients worldwide with a team of 25+ experts. Continuously innovating and helping businesses achieve their digital transformation goals with excellence."
  }
];

const values = [
  {
    icon: Target,
    title: "Client-Focused",
    description: "Your success is our success. We prioritize understanding your business goals and delivering solutions that drive real results."
  },
  {
    icon: Heart,
    title: "Passion & Dedication",
    description: "We love what we do, and it shows in every project. Our passion for technology and design drives us to exceed expectations."
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "We stay ahead of the curve by adopting the latest technologies and best practices to deliver cutting-edge solutions."
  },
  {
    icon: Award,
    title: "Quality First",
    description: "We never compromise on quality. Every project is crafted with attention to detail and a commitment to excellence."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in working together. Our team collaborates closely with clients to ensure their vision becomes reality."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients worldwide while maintaining personal relationships and understanding local market needs."
  }
];

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building modern, responsive websites and web applications that perform flawlessly across all devices."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful, intuitive user interfaces that enhance user experience and drive conversions."
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Growing your online presence through SEO, social media, content marketing, and paid advertising."
  },
  {
    icon: Zap,
    title: "E-commerce Solutions",
    description: "Developing powerful online stores that help businesses sell products and services effectively."
  }
];

const stats = [
  { number: "50+", label: "Happy Clients" },
  { number: "100+", label: "Projects Completed" },
  { number: "15+", label: "Team Members" },
  { number: "2+", label: "Countries Served" }
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
          <div className="absolute inset-0 hex-pattern opacity-20" />

          <div className="container-tight relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 bg-primary/10 mb-4 sm:mb-6"
              >
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-primary">Our Story</span>
              </motion.div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
                About <span className="gradient-text">GrowthScale</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We're a passionate team of developers, designers, and marketers dedicated to helping businesses thrive in the digital world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6">
          <div className="container-tight max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                Our Story
              </h2>
              <div className="w-16 h-0.5 sm:w-20 sm:h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto mb-4"></div>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                From humble beginnings to becoming a trusted digital agency
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed"
              >
                <p>
                  GrowthScale was born in <strong className="text-foreground font-semibold">2020</strong> when two passionate
                  professionals, <strong className="text-foreground font-semibold">Nakul Jangra</strong> and <strong className="text-foreground font-semibold">Mohit</strong>,
                  came together with a shared vision: to help businesses succeed in the digital age. Starting from a small co-working
                  space, they began by building websites for local businesses, always focusing on quality and client satisfaction.
                </p>
                <p>
                  What started as a two-person operation quickly grew as word spread about their exceptional work. By 2021, they had
                  completed over 50 projects and built a reputation for delivering results. The team expanded, bringing in talented
                  designers, marketers, and developers who shared the same passion for excellence.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed"
              >
                <p>
                  Today, GrowthScale is a thriving digital agency with a team of <strong className="text-foreground font-semibold">25+ experts</strong> serving clients
                  across <strong className="text-foreground font-semibold">50+ countries</strong>. We've completed over <strong className="text-foreground font-semibold">1000 projects</strong>, from small business
                  websites to complex enterprise applications.
                </p>
                <p>
                  But our core values remain the same: <strong className="text-foreground font-semibold">quality, innovation, and client success</strong>.
                  We're not just building websites or running campaigns - we're helping businesses achieve their dreams, reach new
                  customers, and grow their revenue.
                </p>
              </motion.div>
            </div>

            {/* Founders Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-8 sm:mb-12"
            >
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
                Meet Our Founders
              </h3>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
                {/* Nakul Jangra */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="group border border-border/50 rounded-xl sm:rounded-2xl bg-card/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)] transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
                    <div className="relative">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-blue flex items-center justify-center shadow-lg">
                        <Code className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-primary-foreground" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-accent border-2 sm:border-[3px] border-background flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent-foreground" />
                      </div>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h4 className="font-display text-lg sm:text-xl lg:text-2xl font-bold mb-1">Nakul Jangra</h4>
                      <p className="text-xs sm:text-sm text-primary font-semibold mb-1">Co-Founder & CTO</p>
                      <p className="text-xs text-muted-foreground mb-3">Web Development Expert</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3">
                    Full-stack developer with extensive experience in modern web technologies. Passionate about building scalable
                    solutions and leading technical innovation. Specializes in React, Node.js, and cloud architecture.
                  </p>
                  <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 pt-3 border-t border-border/50">
                    <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all">
                      <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    </a>
                    <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all">
                      <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    </a>
                  </div>
                </motion.div>

                {/* Mohit */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="group border border-border/50 rounded-xl sm:rounded-2xl bg-card/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)] transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
                    <div className="relative">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-xl sm:rounded-2xl bg-gradient-to-br from-accent to-purple flex items-center justify-center shadow-lg">
                        <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-primary-foreground" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary border-2 sm:border-[3px] border-background flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h4 className="font-display text-lg sm:text-xl lg:text-2xl font-bold mb-1">Mohit</h4>
                      <p className="text-xs sm:text-sm text-primary font-semibold mb-1">Co-Founder & CEO</p>
                      <p className="text-xs text-muted-foreground mb-3">Digital Marketing Expert</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3">
                    Strategic visionary with expertise in digital marketing and business growth. Focuses on client success,
                    team development, and scaling businesses through innovative marketing strategies and data-driven decisions.
                  </p>
                  <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 pt-3 border-t border-border/50">
                    <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all">
                      <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    </a>
                    <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all">
                      <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-card/30">
          <div className="container-tight max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center border border-border/50 rounded-lg sm:rounded-xl bg-background/80 backdrop-blur-sm p-4 sm:p-5 lg:p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6">
          <div className="container-tight max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                Our Journey
              </h2>
              <div className="w-16 h-0.5 sm:w-20 sm:h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto mb-4"></div>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                From a small startup to a global digital agency - here's our story of growth and success.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2"></div>
                <div className="md:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

                <div className="space-y-6 sm:space-y-8 md:space-y-10">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`relative flex items-start gap-3 sm:gap-4 md:gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        }`}
                    >
                      {/* Timeline Dot */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-primary border-3 sm:border-4 border-background flex items-center justify-center shadow-lg">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-primary-foreground"></div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`flex-1 border border-border/50 rounded-lg sm:rounded-xl bg-card/80 backdrop-blur-sm p-4 sm:p-5 md:p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 ${index % 2 === 0 ? "md:ml-auto md:max-w-[45%]" : "md:mr-auto md:max-w-[45%]"
                        }`}>
                        <div className="text-primary font-bold text-lg sm:text-xl md:text-2xl mb-1.5">{milestone.year}</div>
                        <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{milestone.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-card/30">
          <div className="container-tight max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                What We Do
              </h2>
              <div className="w-16 h-0.5 sm:w-20 sm:h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto mb-4"></div>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                We provide comprehensive digital solutions to help businesses grow and succeed online.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-border/50 rounded-lg sm:rounded-xl bg-card/80 backdrop-blur-sm p-4 sm:p-5 lg:p-6 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-2">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto border border-border/50 rounded-lg sm:rounded-xl bg-card/80 backdrop-blur-sm p-5 sm:p-6 lg:p-8"
            >
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-center">Why We Do It</h3>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  We believe that every business, regardless of size, deserves access to world-class digital solutions.
                  Our mission is to empower businesses to compete in the digital marketplace by providing them with the
                  tools, expertise, and support they need to succeed.
                </p>
                <p>
                  We're not just building websites or running campaigns - we're helping businesses achieve their dreams,
                  reach new customers, and grow their revenue. Every project we complete is a step towards making the digital
                  world more accessible and successful for everyone.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6">
          <div className="container-tight max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                Our Values
              </h2>
              <div className="w-16 h-0.5 sm:w-20 sm:h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto mb-4"></div>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do and shape how we work with our clients.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-border/50 rounded-lg sm:rounded-xl bg-card/80 backdrop-blur-sm p-4 sm:p-5 lg:p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 sm:mb-4">
                    <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg lg:text-xl mb-2">{value.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6">
          <div className="container-tight max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="border border-border/50 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-6 sm:p-8 lg:p-10 text-center"
            >
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                Ready to Work With Us?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6 max-w-2xl mx-auto">
                Let's discuss how we can help your business grow and succeed in the digital world.
              </p>
              <Button
                asChild
                variant="hero"
                size="default"
                className="text-sm sm:text-base"
              >
                <a href="/contact">Get In Touch</a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;

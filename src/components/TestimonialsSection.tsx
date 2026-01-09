import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, Delhi Tech Solutions",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?w=150&h=150&fit=crop&crop=faces",
    content: "Outstanding work! The website design is extremely professional, and our traffic has increased by 3x. The team's communication was excellent throughout the entire project duration.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Owner, Mumbai Fashion Hub",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=150&h=150&fit=crop&crop=faces",
    content: "They developed a complete website for my restaurant with an integrated online ordering system. Sales have improved significantly, and I couldn't be happier. Highly recommended!",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "Director, Bangalore Real Estate",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=150&h=150&fit=crop&crop=faces",
    content: "This is the best digital marketing agency I've collaborated with. Google Ads campaigns resulted in a 5x increase in leads, and our cost per lead decreased substantially. The ROI is truly impressive!",
    rating: 5,
  },
  {
    name: "Anjali Singh",
    role: "CEO, Pune Healthcare Pvt Ltd",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=150&h=150&fit=crop&crop=faces",
    content: "They handled everything from website development to SEO optimization. Our organic traffic increased by 400% within just 6 months. The team is incredibly dedicated and professional!",
    rating: 5,
  },
  {
    name: "Vikram Mehta",
    role: "Business Owner, Ahmedabad",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?w=150&h=150&fit=crop&crop=faces",
    content: "They created a stunning portfolio website and handled all marketing aspects. I'm now receiving regular clients, and the investment was absolutely worth it. Exceptional service!",
    rating: 5,
  },
  {
    name: "Deepika Reddy",
    role: "E-commerce Entrepreneur, Hyderabad",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=150&h=150&fit=crop&crop=faces",
    content: "Choosing their complete package was the best decision. Both website and marketing services combined have doubled our sales. The support team is highly responsive and helpful.",
    rating: 5,
  },
  {
    name: "Arjun Malhotra",
    role: "Property Consultant, Gurgaon",
    image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?w=150&h=150&fit=crop&crop=faces",
    content: "They developed a modern real estate website with virtual tour functionality. Property inquiries have increased 4x compared to before. The design is contemporary and user-friendly!",
    rating: 5,
  },
  {
    name: "Kavita Desai",
    role: "Restaurant Owner, Surat",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?w=150&h=150&fit=crop&crop=faces",
    content: "The online ordering system integration on our website has streamlined operations completely. Orders now come in automatically, and customer satisfaction has improved significantly!",
    rating: 5,
  },
  {
    name: "Rajesh Iyer",
    role: "Tech Startup Founder, Chennai",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=150&h=150&fit=crop&crop=faces",
    content: "They built a comprehensive B2B SaaS website with integrated marketing automation. User acquisition increased by 10x, and our conversion rates improved dramatically. Excellent service delivery!",
    rating: 5,
  },
  {
    name: "Sunita Gupta",
    role: "Interior Designer, Kolkata",
    image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?w=150&h=150&fit=crop&crop=faces",
    content: "They created an impressive portfolio website that truly showcases our work. Social media marketing efforts have expanded our client base substantially. The ROI has been exceptional!",
    rating: 5,
  },
  {
    name: "Mohit Agarwal",
    role: "Fitness Coach, Jaipur",
    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?w=150&h=150&fit=crop&crop=faces",
    content: "We opted for their Website and SEO package. We now rank at the top for local searches, and gym memberships have tripled. The results speak for themselves. Outstanding work!",
    rating: 5,
  },
  {
    name: "Neha Joshi",
    role: "Education Consultant, Pune",
    image: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?w=150&h=150&fit=crop&crop=faces",
    content: "They executed a complete digital transformation for our business. From website development to Google Ads management, everything was handled professionally. Student inquiries have increased significantly!",
    rating: 5,
  },
  {
    name: "Suresh Nair",
    role: "Manufacturing Business Owner, Coimbatore",
    image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?w=150&h=150&fit=crop&crop=faces",
    content: "They developed a comprehensive B2B website with a detailed product catalog. Lead generation has improved tremendously, and we're now attracting international clients. Very professional team!",
    rating: 5,
  },
  {
    name: "Meera Shah",
    role: "Wedding Planner, Udaipur",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=150&h=150&fit=crop&crop=faces",
    content: "They created a beautiful portfolio website with an integrated booking system. Instagram marketing campaigns have doubled our bookings. The overall customer experience has improved dramatically!",
    rating: 5,
  },
  {
    name: "Aditya Verma",
    role: "Legal Consultant, Lucknow",
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?w=150&h=150&fit=crop&crop=faces",
    content: "They built a professional law firm website with a secure client portal. SEO optimization has resulted in a steady stream of organic clients. The service quality is truly exceptional!",
    rating: 5,
  },
  {
    name: "Shraddha Kapoor",
    role: "Yoga Instructor, Rishikesh",
    image: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?w=150&h=150&fit=crop&crop=faces",
    content: "They developed a wellness website with online class booking functionality. Their marketing strategy has increased student enrollment by 250%. I'm highly satisfied with their exceptional work!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const autoplayInterval = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    // Auto-scroll every 3 seconds (right to left)
    const startAutoplay = () => {
      if (autoplayInterval.current) {
        clearInterval(autoplayInterval.current);
      }
      
      autoplayInterval.current = setInterval(() => {
        if (!isPaused && api) {
          if (api.canScrollNext()) {
            api.scrollNext();
          } else {
            // Loop back to start
            api.scrollTo(0);
          }
        }
      }, 3000);
    };

    // Start autoplay
    startAutoplay();

    return () => {
      if (autoplayInterval.current) {
        clearInterval(autoplayInterval.current);
      }
    };
  }, [api, isPaused]);

  return (
    <section id="testimonials" className="section-padding relative bg-card/30 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />

      <div className="container-tight relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what business owners and founders across India have to say about working with us.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="w-full relative"
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            className="w-full"
          >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="glass-card p-6 md:p-8 relative h-full"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground/80 leading-relaxed mb-6 text-sm md:text-base">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-border"
                    />
                    <div>
                      <div className="font-display font-semibold text-sm md:text-base">
                        {testimonial.name}
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

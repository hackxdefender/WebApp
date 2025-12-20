import { Shield, Lock, Server, Globe, ChevronRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Enterprise-Grade Security Assessments
              </span>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
                Secure Your Digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Infrastructure</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Comprehensive Vulnerability Assessment and Penetration Testing (VAPT) 
                services to identify weaknesses before attackers do.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="h-14 px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 rounded-full">
                    Start Assessment
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/10 hover:bg-white/5 text-white rounded-full">
                    View Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive security testing across all layers of your technology stack.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Globe}
              title="Web Application VAPT"
              description="Deep analysis of web apps (OWASP Top 10) to find SQLi, XSS, and logic flaws."
              delay={0}
            />
            <ServiceCard 
              icon={Server}
              title="Network Security"
              description="Internal and external network scanning to identify exposed ports and misconfigurations."
              delay={100}
            />
            <ServiceCard 
              icon={Lock}
              title="Cloud Security"
              description="Configuration review of AWS, Azure, and GCP environments to ensure compliance."
              delay={200}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
              Explore All Services <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Industry Leaders Trust Us
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                We don't just run automated scans. Our certified ethical hackers simulate real-world attacks 
                to find complex vulnerabilities that tools miss.
              </p>
              
              <div className="space-y-4">
                {[
                  "Certified Experts (OSCP, CEH, CISSP)",
                  "Comprehensive Manual & Automated Testing",
                  "Detailed Remediation Guidelines",
                  "Post-Fix Retesting Support",
                  "Compliance Ready (ISO 27001, GDPR, PCI-DSS)"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/about">
                  <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-2xl" />
              {/* Using Unsplash image for visual interest - abstract tech */}
              {/* abstract technology blue neon circuit board */}
              <img 
                src="https://pixabay.com/get/g1635c1f51da3333c91d4a3a7507c0ea03c667df209104f1cbac2767c41e189304c7537a50a5efe178de2d9f65d5d5a1a84c7e694bf27e3f947c233ba78dea1bb_1280.jpg" 
                alt="Cybersecurity Analysis" 
                className="relative rounded-2xl border border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5 border-t border-primary/10">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 text-primary mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Assets?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
            Get a comprehensive security assessment today. Don't wait for a breach to happen.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-10 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 rounded-full">
              Get a Free Consultation
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}

import { Globe, Smartphone, Server, Cloud, Code, Wifi } from "lucide-react";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web Application VAPT",
      description: "Comprehensive testing of web applications against OWASP Top 10 vulnerabilities including Injection flaws, Broken Authentication, and XSS."
    },
    {
      icon: Smartphone,
      title: "Mobile App Security",
      description: "Static (SAST) and Dynamic (DAST) analysis of iOS and Android applications to identify data leakage, insecure storage, and API flaws."
    },
    {
      icon: Server,
      title: "Network Penetration Testing",
      description: "External and Internal network assessment to identify open ports, weak protocols, and patch management issues across your infrastructure."
    },
    {
      icon: Cloud,
      title: "Cloud Security Assessment",
      description: "Security configuration review of AWS, Azure, and GCP environments. Identifying IAM misconfigurations, S3 bucket exposure, and compliance gaps."
    },
    {
      icon: Code,
      title: "API Security Testing",
      description: "Testing REST and GraphQL APIs for broken object level authorization (BOLA), rate limiting issues, and input validation vulnerabilities."
    },
    {
      icon: Wifi,
      title: "Wireless Security",
      description: "Assessment of corporate Wi-Fi networks to detect rogue access points, weak encryption protocols, and susceptibility to de-auth attacks."
    }
  ];

  return (
    <div className="pt-24 pb-20">
      
      {/* Header */}
      <section className="py-16 md:py-24 bg-card/50 border-b border-white/5">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end security testing solutions tailored to your technology stack.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              {...service}
              delay={index * 100}
            />
          ))}
        </div>
      </section>

      {/* Methodology Snippet */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Custom Requirements?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We also offer specialized services like Social Engineering, Red Teaming, and Source Code Review tailored to your specific needs.
          </p>
          <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
            Contact Sales
          </a>
        </div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function About() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Securing the digital future with offensive security expertise.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              At CyberSecure, we believe that offense is the best defense. Our mission is to help organizations find and fix security vulnerabilities before malicious actors can exploit them.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Founded by a team of elite ethical hackers and security researchers, we bring decades of combined experience in identifying critical flaws in complex systems. We don't just provide a report; we partner with your engineering teams to build a resilient security posture.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We operate with strict ethical standards, ensuring all testing is conducted safely within authorized scope, minimizing operational disruption while maximizing security coverage.
            </p>

            <div className="pt-4">
              <Link href="/contact">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
             {/* Unsplash image for team/office - dark tech office */}
             {/* Modern technology office dark environment */}
             <img 
               src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80"
               alt="Our Security Operations Center" 
               className="rounded-2xl shadow-2xl border border-white/10"
             />
             <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-white/5 py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Projects Secured", value: "500+" },
              { label: "Critical Bugs Found", value: "12k+" },
              { label: "Team Experts", value: "25+" },
              { label: "Countries Served", value: "15+" },
            ].map((stat, i) => (
              <div key={i} className="p-6">
                <div className="text-4xl font-bold text-primary mb-2 font-display">{stat.value}</div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

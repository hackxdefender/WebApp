import { Search, Crosshair, FileText, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      icon: Search,
      title: "1. Information Gathering",
      description: "We start by understanding your environment, mapping out the attack surface, and identifying potential entry points using OSINT and reconnaissance techniques."
    },
    {
      icon: Crosshair,
      title: "2. Vulnerability Scanning & Exploitation",
      description: "Our team uses automated tools and manual techniques to identify vulnerabilities. We then attempt to safely exploit them to determine the real business impact."
    },
    {
      icon: FileText,
      title: "3. Reporting & Analysis",
      description: "We document every finding with Proof of Concept (PoC), risk severity (CVSS score), and detailed remediation steps in a comprehensive report."
    },
    {
      icon: CheckCircle,
      title: "4. Retesting & Certification",
      description: "After your team patches the vulnerabilities, we perform a retest to ensure the fixes are effective. Upon successful remediation, we issue a VAPT certificate."
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="py-16 md:py-24 bg-card/50 border-b border-white/5">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Methodology</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic, industry-standard approach to identifying and mitigating risks.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2" />

          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 ${isEven ? '' : 'lg:flex-row-reverse'}`}
                >
                  {/* Text Side */}
                  <div className={`flex-1 text-center ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>

                  {/* Icon Center */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-card border border-primary/20 shadow-[0_0_30px_-10px_rgba(34,197,94,0.3)] flex items-center justify-center">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>

                  {/* Empty Side for balance */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

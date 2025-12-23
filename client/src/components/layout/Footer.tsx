import { Link } from "wouter";
import { Shield, Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-lg text-white">
                HackX<span className="text-primary">Defender</span>
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Providing enterprise-grade security assessments and penetration testing services to protect your digital assets.
            </p>
            <div className="flex gap-4 pt-2">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/services" className="hover:text-primary transition-colors">Web Application VAPT</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Mobile App Security</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Network Penetration</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Cloud Security</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">API Security Testing</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/process" className="hover:text-primary transition-colors">Our Process</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Security Blvd, Cyber City<br />Tech District, CA 94043</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:secure@cybersecure.com" className="hover:text-white">secure@cybersecure.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+15550123456" className="hover:text-white">+1 (555) 012-3456</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/5 mt-12 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} CyberSecure. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

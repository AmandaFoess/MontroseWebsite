import { Link } from "wouter";
import { Building2, Mail, Phone, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Montrose LLC</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transforming land into lasting value through innovative development solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Services", "Projects", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                    <span className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid={`link-footer-${item.toLowerCase()}`}>
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                "Land Acquisition",
                "Site Evaluation",
                "Site Planning",
                "Permitting",
                "Construction",
              ].map((service) => (
                <li key={service}>
                  <Link href="/services">
                    <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@montrosellc.com" className="hover:text-primary transition-colors">
                  info@montrosellc.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Linkedin className="h-4 w-4" />
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Montrose LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy">
              <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms">
              <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

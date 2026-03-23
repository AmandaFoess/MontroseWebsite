import { Link } from "wouter";
import { Building2, Mail, Phone, Linkedin, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Montrose LLC</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Full-cycle land development firm delivering high-performing real estate projects from acquisition through close out. Founded in 2013, we bring data-driven strategy and stakeholder alignment to every engagement.
            </p>
            <p className="text-xs text-muted-foreground/70">
              © {new Date().getFullYear()} Montrose LLC. All rights reserved.
              <span className="mx-2">·</span>
              <Link href="/privacy"><span className="hover:text-primary transition-colors">Privacy Policy</span></Link>
              <span className="mx-2">·</span>
              <Link href="/terms"><span className="hover:text-primary transition-colors">Terms of Service</span></Link>
            </p>
          </div>

          {/* Office */}
          <div>
            <h3 className="font-semibold mb-4">Office</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Charlotte, NC</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@montrosellc.com" className="hover:text-primary transition-colors">
                  info@montrosellc.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                  (555) 123-4567
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Linkedin className="h-4 w-4 shrink-0" />
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
            <div className="mt-6">
              <Link href="/contact">
                <span className="text-sm font-medium text-primary hover:underline transition-colors">
                  Get in touch &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

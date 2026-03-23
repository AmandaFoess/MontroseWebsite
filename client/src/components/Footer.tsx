import { Link } from "wouter";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { COMPANY, CONTACT, ADDRESS, SOCIALS } from "@/lib/constants";
import logo from "@/assets/montrose-icon.png";

export default function Footer() {
  return (
    <footer className="bg-[hsl(80_6%_22%)] text-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-1.5 mb-4">
              <img src={logo} alt={COMPANY.name} className="h-8 w-auto brightness-0 invert" />
              <span className="text-xl font-bold text-white">{COMPANY.name}</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              {COMPANY.tagline} Founded in {COMPANY.foundedYear}, we bring data-driven strategy and stakeholder alignment to every engagement.
            </p>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
            </p>
          </div>

          {/* Office */}
          <div>
            <h3 className="font-semibold text-white mb-4">Office</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{ADDRESS.display}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="h-4 w-4 shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-primary transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="h-4 w-4 shrink-0" />
                <a href={CONTACT.phoneHref} className="hover:text-primary transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Linkedin className="h-4 w-4 shrink-0" />
                <a
                  href={SOCIALS.linkedin}
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
                  Contact Us &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

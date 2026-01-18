import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'Residential Building Design',
    'Apartment Design',
    'Mixed-Use Building Design',
    'Commercial Building Design',
    'Interior Design & Renovation',
    'Construction Supervision',
    'Architectural Consultancy',
    'Urban Planning',
  ];

  const quickLinks = [
    { label: 'Home', section: 'hero' },
    { label: 'About Us', section: 'about' },
    { label: 'Services', section: 'services' },
    { label: 'Projects', section: 'projects' },
    { label: 'Why Choose Us', section: 'why-us' },
    { label: 'Testimonials', section: 'testimonials' },
    { label: 'Contact', section: 'contact' },
  ];

  return (
    <footer className="bg-[#2C3E50] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-[#2C3E50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Amaya Plus</h3>
                <p className="text-white/60 text-sm">Building Consultant</p>
              </div>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Professional architectural and engineering consultancy offering innovative, 
              high-quality design and supervision services in Addis Ababa, Ethiopia.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-lg flex items-center justify-center transition-colors group"
              >
                <Facebook className="w-5 h-5 group-hover:text-[#2C3E50]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-lg flex items-center justify-center transition-colors group"
              >
                <Instagram className="w-5 h-5 group-hover:text-[#2C3E50]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-lg flex items-center justify-center transition-colors group"
              >
                <Linkedin className="w-5 h-5 group-hover:text-[#2C3E50]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-lg flex items-center justify-center transition-colors group"
              >
                <Twitter className="w-5 h-5 group-hover:text-[#2C3E50]" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-white/70 hover:text-[#D4AF37] transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.section)}
                    className="text-white/70 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <span className="text-white/70">
                  Sileshi Sehine Business Center Office,<br />
                  Equatorial Guinea Street,<br />
                  near Megenagna Roundabout,<br />
                  Addis Ababa 1000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <a href="tel:+251712474796" className="text-white/70 hover:text-[#D4AF37] transition-colors">
                  +251 71 247 4796
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <a href="mailto:info@amayaplus.com" className="text-white/70 hover:text-[#D4AF37] transition-colors">
                  info@amayaplus.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span className="text-white/70">Open Daily until 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Amaya Plus | Building Consultant | Architectural and Engineering. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <button className="text-white/60 hover:text-[#D4AF37] transition-colors">
                Privacy Policy
              </button>
              <button className="text-white/60 hover:text-[#D4AF37] transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#D4AF37] hover:bg-[#C9A227] text-[#2C3E50] rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-40"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;

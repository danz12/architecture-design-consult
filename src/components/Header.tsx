import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', section: 'hero' },
    { label: 'About', section: 'about' },
    { label: 'Services', section: 'services' },
    { label: 'Projects', section: 'projects' },
    { label: 'Why Us', section: 'why-us' },
    { label: 'Testimonials', section: 'testimonials' },
    { label: 'Contact', section: 'contact' },
  ];

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#2C3E50] text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#D4AF37]" />
            <span>Open Daily until 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2C3E50] to-[#34495E] rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#2C3E50]">Amaya Plus</h1>
                <p className="text-xs text-gray-500">Building Consultant</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => handleNavClick(item.section)}
                  className="text-[#2C3E50] hover:text-[#D4AF37] font-medium transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+251712474796"
                className="flex items-center gap-2 text-[#2C3E50] hover:text-[#D4AF37] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">Call Now</span>
              </a>
              <button
                onClick={() => handleNavClick('contact')}
                className="bg-[#D4AF37] hover:bg-[#C9A227] text-[#2C3E50] px-6 py-2.5 rounded-lg font-semibold transition-all hover:shadow-lg"
              >
                Request Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#2C3E50]"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => handleNavClick(item.section)}
                  className="block w-full text-left px-4 py-3 text-[#2C3E50] hover:bg-gray-50 rounded-lg font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t mt-4 space-y-3">
                <a
                  href="tel:+251712474796"
                  className="flex items-center gap-2 px-4 py-3 text-[#2C3E50] hover:bg-gray-50 rounded-lg"
                >
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                  <span>+251 71 247 4796</span>
                </a>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full bg-[#D4AF37] text-[#2C3E50] px-6 py-3 rounded-lg font-semibold"
                >
                  Request Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

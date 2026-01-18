import React from 'react';
import { ArrowRight, Phone, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://d64gsuwffb70l.cloudfront.net/696a2b622f3ab0ad77f55174_1768565713077_fa5021ce.png"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50]/95 via-[#2C3E50]/80 to-[#2C3E50]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Trusted by 100+ Clients in Addis Ababa
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Turning Your{' '}
            <span className="text-[#D4AF37]">Vision</span>
            <br />
            Into Reality
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
            Amaya Plus delivers innovative architectural and engineering solutions for residential, 
            commercial, and mixed-use buildings. Experience excellence in design and construction 
            supervision across Ethiopia.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">9+</div>
              <div className="text-white/70 text-sm">Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">4.8</div>
              <div className="text-white/70 text-sm">Star Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">100+</div>
              <div className="text-white/70 text-sm">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">15+</div>
              <div className="text-white/70 text-sm">Years Experience</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="group bg-[#D4AF37] hover:bg-[#C9A227] text-[#2C3E50] px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl flex items-center gap-2"
            >
              Request Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:+251712474796"
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call +251 71 247 4796
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => onNavigate('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>

      {/* Decorative Elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-l-2xl p-6 border-l border-t border-b border-white/20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-[#2C3E50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold">Residential</div>
                <div className="text-white/60 text-sm">Design & Build</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-[#2C3E50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold">Commercial</div>
                <div className="text-white/60 text-sm">Architecture</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-[#2C3E50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold">Supervision</div>
                <div className="text-white/60 text-sm">Quality Control</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

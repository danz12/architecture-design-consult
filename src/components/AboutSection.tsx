import React from 'react';
import { Target, Eye, Heart, Award, Users, Building2, CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver innovative, sustainable, and high-quality architectural and engineering solutions that transform our clients\' visions into reality while contributing to Ethiopia\'s urban development.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading architectural and engineering consultancy in East Africa, recognized for excellence, innovation, and commitment to creating spaces that inspire and endure.',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, innovation, excellence, and client satisfaction guide everything we do. We believe in building lasting relationships through transparent communication and exceptional service.',
    },
  ];

  const highlights = [
    'Licensed & Certified Professionals',
    'End-to-End Project Management',
    'Sustainable Design Practices',
    'Competitive & Transparent Pricing',
    'On-Time Project Delivery',
    'Post-Completion Support',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#D4AF37] font-semibold text-sm uppercase tracking-wider mb-3">
            About Amaya Plus
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            Building Excellence Since Day One
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Amaya Plus is a professional architectural and engineering consultancy based in Addis Ababa, 
            Ethiopia, dedicated to transforming spaces and creating lasting value for our clients.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Side */}
          <div className="relative">
            <img
              src="https://d64gsuwffb70l.cloudfront.net/696a2b622f3ab0ad77f55174_1768565885913_84d83d39.png"
              alt="Amaya Plus Team"
              className="rounded-2xl shadow-xl w-full"
            />
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                  <Award className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#2C3E50]">15+</div>
                  <div className="text-gray-500 text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">
              Your Trusted Partner in Architectural Excellence
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Amaya Plus brings together a team of experienced architects and engineers who specialize 
              in residential, commercial, apartment, and mixed-use building design. Our comprehensive 
              services span from initial concept development through construction supervision, ensuring 
              quality at every stage.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Based in the heart of Addis Ababa near Megenagna Roundabout, we serve clients throughout 
              the capital and surrounding areas. Our commitment to competitive fees, quality design, 
              and client satisfaction has earned us a stellar 4.8-star rating from our valued clients.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-[#F8F9FA] rounded-2xl p-8 hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 bg-[#2C3E50] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                <item.icon className="w-7 h-7 text-[#D4AF37] group-hover:text-[#2C3E50] transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-[#2C3E50] mb-3">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-[#2C3E50] rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">100+</div>
              <div className="text-white/70">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">50+</div>
              <div className="text-white/70">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">15+</div>
              <div className="text-white/70">Expert Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">4.8</div>
              <div className="text-white/70">Client Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

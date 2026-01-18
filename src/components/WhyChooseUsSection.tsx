import React from 'react';
import { Users, DollarSign, Award, Heart, Clock, Shield, Lightbulb, Headphones } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Our team of licensed architects and engineers brings decades of combined experience to every project.',
    },
    {
      icon: DollarSign,
      title: 'Competitive Fees',
      description: 'We offer transparent, competitive pricing without compromising on quality or service excellence.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensure every project meets the highest standards.',
    },
    {
      icon: Heart,
      title: 'Client-Centric Approach',
      description: 'Your vision is our priority. We listen, understand, and deliver designs that exceed expectations.',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We respect your timeline and consistently deliver projects on schedule without cutting corners.',
    },
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed professionals with comprehensive insurance for your peace of mind.',
    },
    {
      icon: Lightbulb,
      title: 'Innovative Solutions',
      description: 'We embrace modern technologies and sustainable practices for forward-thinking designs.',
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'From consultation to completion, our team provides continuous support and communication.',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#D4AF37] font-semibold text-sm uppercase tracking-wider mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            The Amaya Plus Advantage
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover why clients across Addis Ababa trust Amaya Plus for their architectural 
            and engineering needs.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group text-center"
            >
              <div className="w-16 h-16 bg-[#2C3E50] rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-[#D4AF37] transition-colors">
                <reason.icon className="w-8 h-8 text-[#D4AF37] group-hover:text-[#2C3E50] transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-[#2C3E50] mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <div className="text-5xl font-bold text-[#D4AF37] mb-2">4.8</div>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < 5 ? 'text-[#D4AF37]' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600">Google Rating from 9+ Reviews</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <div className="text-5xl font-bold text-[#D4AF37] mb-2">100+</div>
            <p className="text-gray-600">Projects Successfully Completed</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <div className="text-5xl font-bold text-[#D4AF37] mb-2">15+</div>
            <p className="text-gray-600">Years of Industry Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

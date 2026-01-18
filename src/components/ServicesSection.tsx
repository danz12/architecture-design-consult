import React, { useState } from 'react';
import { Home, Building2, Building, Layers, Store, Palette, ClipboardCheck, HardHat, Map, ArrowRight, X } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Home,
      title: 'Residential Building Design',
      shortDesc: 'Custom homes tailored to your lifestyle and preferences.',
      fullDesc: 'Our residential design services create personalized living spaces that reflect your unique lifestyle. From modern villas to traditional homes, we blend functionality with aesthetics to deliver your dream home. Our team handles everything from initial concept sketches to detailed construction drawings.',
      features: ['Custom floor plans', 'Energy-efficient designs', '3D visualization', 'Permit documentation'],
    },
    {
      icon: Building2,
      title: 'Apartment Design',
      shortDesc: 'Multi-unit residential complexes with optimal space utilization.',
      fullDesc: 'We specialize in designing apartment buildings that maximize space efficiency while creating comfortable living environments. Our designs consider traffic flow, natural lighting, ventilation, and community spaces to enhance resident quality of life.',
      features: ['Unit layout optimization', 'Common area design', 'Parking solutions', 'Amenity planning'],
    },
    {
      icon: Layers,
      title: 'Mixed-Use Building Design',
      shortDesc: 'Integrated commercial and residential developments.',
      fullDesc: 'Our mixed-use designs seamlessly integrate retail, office, and residential spaces. We create vibrant developments that serve multiple purposes while maintaining distinct identities for each use, maximizing property value and community engagement.',
      features: ['Zoning compliance', 'Vertical integration', 'Shared amenities', 'Traffic management'],
    },
    {
      icon: Home,
      title: 'Classic Residential Design',
      shortDesc: 'Timeless architectural styles with modern functionality.',
      fullDesc: 'For clients who appreciate traditional aesthetics, we offer classic residential designs that honor architectural heritage while incorporating modern conveniences. Our designs feature elegant proportions, quality materials, and enduring appeal.',
      features: ['Traditional aesthetics', 'Modern amenities', 'Quality materials', 'Timeless appeal'],
    },
    {
      icon: Store,
      title: 'Commercial Building Design',
      shortDesc: 'Functional spaces that enhance business operations.',
      fullDesc: 'Our commercial designs create productive work environments that support business success. From office buildings to retail centers, we focus on functionality, brand identity, and employee well-being while meeting all regulatory requirements.',
      features: ['Brand integration', 'Workflow optimization', 'Accessibility compliance', 'Sustainable features'],
    },
    {
      icon: Palette,
      title: 'Interior Design & Renovation',
      shortDesc: 'Transform existing spaces into stunning environments.',
      fullDesc: 'Our interior design team transforms spaces through thoughtful material selection, color schemes, lighting design, and furniture layout. Whether renovating an existing property or designing new interiors, we create spaces that inspire.',
      features: ['Space planning', 'Material selection', 'Lighting design', 'Furniture layout'],
    },
    {
      icon: ClipboardCheck,
      title: 'Architectural & Engineering Consultancy',
      shortDesc: 'Expert guidance for complex building projects.',
      fullDesc: 'Our consultancy services provide expert guidance on all aspects of building design and construction. We offer feasibility studies, design reviews, code compliance analysis, and technical support to ensure project success.',
      features: ['Feasibility studies', 'Design reviews', 'Code compliance', 'Technical support'],
    },
    {
      icon: HardHat,
      title: 'Construction Supervision',
      shortDesc: 'Quality assurance throughout the building process.',
      fullDesc: 'Our construction supervision services ensure that your project is built according to specifications. We monitor quality, manage schedules, coordinate contractors, and resolve issues to deliver projects on time and within budget.',
      features: ['Quality control', 'Schedule management', 'Contractor coordination', 'Issue resolution'],
    },
    {
      icon: Map,
      title: 'Urban Planning',
      shortDesc: 'Comprehensive planning for sustainable communities.',
      fullDesc: 'Our urban planning services create sustainable, livable communities. We develop master plans that balance growth with environmental stewardship, incorporating infrastructure, green spaces, and mixed-use developments.',
      features: ['Master planning', 'Infrastructure design', 'Green space integration', 'Community engagement'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#D4AF37] font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            Comprehensive Building Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From concept to completion, we offer a full range of architectural and engineering 
            services to bring your vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedService(index)}
            >
              <div className="w-14 h-14 bg-[#2C3E50] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#D4AF37] transition-colors">
                <service.icon className="w-7 h-7 text-[#D4AF37] group-hover:text-[#2C3E50] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-3 group-hover:text-[#D4AF37] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.shortDesc}</p>
              <button className="flex items-center gap-2 text-[#D4AF37] font-semibold group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-[#2C3E50] rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. Our team is ready to discuss your 
            project requirements and provide expert guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+251712474796"
              className="bg-white text-[#2C3E50] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +251 71 247 4796
            </a>
            <a
              href="#contact"
              className="bg-[#D4AF37] text-[#2C3E50] px-8 py-3 rounded-lg font-semibold hover:bg-[#C9A227] transition-colors"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService !== null && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-xl flex items-center justify-center">
                  {React.createElement(services[selectedService].icon, {
                    className: 'w-8 h-8 text-[#2C3E50]',
                  })}
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">
                {services[selectedService].title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {services[selectedService].fullDesc}
              </p>
              <h4 className="font-semibold text-[#2C3E50] mb-3">Key Features:</h4>
              <ul className="space-y-2 mb-8">
                {services[selectedService].features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="flex-1 bg-[#D4AF37] text-[#2C3E50] py-3 rounded-lg font-semibold text-center hover:bg-[#C9A227] transition-colors"
                >
                  Get Started
                </a>
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Abebe Kebede',
      role: 'Homeowner',
      project: 'Residential Villa',
      content: 'Amaya Plus exceeded all our expectations. Their attention to detail and understanding of our vision resulted in our dream home. The team was professional throughout the entire process.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sara Tesfaye',
      role: 'Property Developer',
      project: 'Apartment Complex',
      content: 'Working with Amaya Plus on our 48-unit apartment project was a pleasure. Their expertise in maximizing space efficiency while maintaining aesthetic appeal is remarkable.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Daniel Hailu',
      role: 'Business Owner',
      project: 'Commercial Building',
      content: 'The commercial building they designed for us perfectly represents our brand. The construction supervision ensured everything was built to the highest standards.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Meron Assefa',
      role: 'Investor',
      project: 'Mixed-Use Development',
      content: 'Amaya Plus delivered an exceptional mixed-use development that has become a landmark in the area. Their understanding of market needs is impressive.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Yohannes Girma',
      role: 'Homeowner',
      project: 'Interior Renovation',
      content: 'The interior design team transformed our outdated home into a modern masterpiece. They listened to our needs and delivered beyond what we imagined.',
      rating: 4,
    },
    {
      id: 6,
      name: 'Tigist Bekele',
      role: 'Restaurant Owner',
      project: 'Commercial Interior',
      content: 'Our restaurant interior design by Amaya Plus has received countless compliments from customers. The space perfectly captures the ambiance we wanted.',
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= testimonials.length - 3 ? 0 : prev + 1));
  };

  const visibleTestimonials = testimonials.slice(activeIndex, activeIndex + 3);
  if (visibleTestimonials.length < 3) {
    visibleTestimonials.push(...testimonials.slice(0, 3 - visibleTestimonials.length));
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#D4AF37] font-semibold text-sm uppercase tracking-wider mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say 
            about their experience with Amaya Plus.
          </p>
        </div>

        {/* Rating Badge */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#2C3E50] rounded-2xl px-8 py-4 flex items-center gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#D4AF37]">4.8</div>
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-[#D4AF37]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div className="text-white">
              <div className="font-semibold">Google Reviews</div>
              <div className="text-white/70 text-sm">Based on 9+ reviews</div>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="bg-[#F8F9FA] rounded-2xl p-8 relative"
              >
                <Quote className="w-10 h-10 text-[#D4AF37]/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-[#D4AF37]' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2C3E50] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-[#2C3E50]">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role} • {testimonial.project}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-[#2C3E50] hover:bg-[#D4AF37] hover:text-[#2C3E50] transition-colors hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-[#2C3E50] hover:bg-[#D4AF37] hover:text-[#2C3E50] transition-colors hidden md:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center gap-4 mt-8 md:hidden">
          <button
            onClick={handlePrev}
            className="w-12 h-12 bg-[#2C3E50] rounded-full flex items-center justify-center text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 bg-[#2C3E50] rounded-full flex items-center justify-center text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.slice(0, testimonials.length - 2).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? 'w-8 bg-[#D4AF37]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

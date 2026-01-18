import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Building2 } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'apartment', label: 'Apartments' },
    { id: 'mixed-use', label: 'Mixed-Use' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'interior', label: 'Interior' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Villa Residence',
      category: 'residential',
      location: 'Bole, Addis Ababa',
      image: 'https://d64gsuwffb70l.cloudfront.net/696a2b622f3ab0ad77f55174_1768565729446_8be4b72a.jpg',
      description: 'A contemporary 4-bedroom villa featuring open floor plans, floor-to-ceiling windows, and sustainable design elements.',
      year: '2024',
      size: '450 sqm',
    },
    {
      id: 2,
      title: 'Luxury Family Home',
      category: 'residential',
      location: 'CMC, Addis Ababa',
      image: 'https://d64gsuwffb70l.cloudfront.net/696a2b622f3ab0ad77f55174_1768565756718_7e0736d6.png',
      description: 'An elegant family residence combining modern architecture with traditional Ethiopian design influences.',
      year: '2023',
      size: '380 sqm',
    },
    {
      id: 3,
      title: 'Contemporary Residence',
      category: 'residential',
      location: 'Sarbet, Addis Ababa',
      image: 'https://d64gsuwffb70l.cloudfront.net/696a2b622f3ab0ad77f55174_1768565736213_d2a1d825.jpg',
      description: 'A minimalist home design emphasizing natural light, clean lines, and seamless indoor-outdoor living.',
      year: '2024',
      size: '320 sqm',
    },
    {
      id: 4,
      title: 'Skyline Apartments',
      category: 'apartment',
      location: 'Megenagna, Addis Ababa',
      image: 'https://d64gsuwffb70l.cloudfront.net/696a2b622f3ab0ad77f55174_1768565773215_2d4f84eb.jpg',
      description: 'A 12-story residential complex with 48 units, featuring modern amenities and panoramic city views.',
      year: '2023',
      size: '8,500 sqm',
    },
    {
      id: 5,
      title: 'Urban Living Complex',
      category: 'apartment',
      location: 'Kazanchis, Addis Ababa',
      image: 'https://d64gsuwffb70l.cloudfront.net/696a2b622f3ab0ad77f55174_1768565776938_9e07543a.jpg',
      description: 'A contemporary apartment building with 36 units, underground parking, and rooftop garden.',
      year: '2024',
      size: '6,200 sqm',
    },
    {
      id: 6,
      title: 'Harmony Residences',
      category: 'apartment',
      location: 'Bole Atlas, Addis Ababa',
      image: 'https://d64gsuwffb70l.cloudfront.net/696a2b622f3ab0ad77f55174_1768565785238_d5fc96fa.png',
      description: 'Premium apartment complex with studio to 3-bedroom units, gym, and community spaces.',
      year: '2023',
      size: '5,800 sqm',
    },
    {
      id: 7,
      title: 'Central Business Hub',
      category: 'mixed-use',
      location: 'Piassa, Addis Ababa',
      image: 'https://d64gsuwffb70l.cloudfront.net/696a2b622f3ab0ad77f55174_1768565802378_d6445f1c.jpg',
      description: 'A mixed-use development with retail on ground floor, offices on mid-levels, and residential above.',
      year: '2024',
      size: '12,000 sqm',
    },
    {
      id: 8,
      title: 'Metro Plaza',
      category: 'mixed-use',
      location: 'Mexico, Addis Ababa',
      image: 'https://d64gsuwffb70l.cloudfront.net/696a2b622f3ab0ad77f55174_1768565803013_120ec17b.jpg',
      description: 'Integrated commercial and residential tower with shopping arcade and premium apartments.',
      year: '2023',
      size: '15,500 sqm',
    },
    {
      id: 9,
      title: 'Gateway Mixed-Use',
      category: 'mixed-use',
      location: 'Lebu, Addis Ababa',
      image: 'https://d64gsuwffb70l.cloudfront.net/696a2b622f3ab0ad77f55174_1768565804944_14e24b7d.jpg',
      description: 'A landmark development combining hospitality, retail, and residential functions.',
      year: '2024',
      size: '18,000 sqm',
    },
    {
      id: 10,
      title: 'Corporate Tower',
      category: 'commercial',
      location: 'Bole, Addis Ababa',
      image: 'https://d64gsuwffb70l.cloudfront.net/696a2b622f3ab0ad77f55174_1768565832803_05de0556.png',
      description: 'A 15-story office building with Class A specifications, featuring modern facade and smart building systems.',
      year: '2023',
      size: '22,000 sqm',
    },
    {
      id: 11,
      title: 'Business Center',
      category: 'commercial',
      location: 'Kirkos, Addis Ababa',
      image: 'https://d64gsuwffb70l.cloudfront.net/696a2b622f3ab0ad77f55174_1768565822437_1d848a43.jpg',
      description: 'Modern office complex with flexible floor plates, conference facilities, and underground parking.',
      year: '2024',
      size: '9,500 sqm',
    },
    {
      id: 12,
      title: 'Innovation Hub',
      category: 'commercial',
      location: 'Summit, Addis Ababa',
      image: 'https://d64gsuwffb70l.cloudfront.net/696a2b622f3ab0ad77f55174_1768565830828_e1f884cc.png',
      description: 'Tech-focused office building with collaborative spaces, high-speed connectivity, and sustainable features.',
      year: '2024',
      size: '7,800 sqm',
    },
    {
      id: 13,
      title: 'Luxury Penthouse Interior',
      category: 'interior',
      location: 'Bole, Addis Ababa',
      image: 'https://d64gsuwffb70l.cloudfront.net/696a2b622f3ab0ad77f55174_1768565860916_215c5432.png',
      description: 'Complete interior design for a high-end penthouse featuring custom furniture and premium finishes.',
      year: '2024',
      size: '280 sqm',
    },
    {
      id: 14,
      title: 'Modern Living Space',
      category: 'interior',
      location: 'CMC, Addis Ababa',
      image: 'https://d64gsuwffb70l.cloudfront.net/696a2b622f3ab0ad77f55174_1768565861682_5d8e459e.png',
      description: 'Contemporary interior renovation transforming a traditional space into a modern family home.',
      year: '2023',
      size: '220 sqm',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const handlePrevProject = () => {
    if (selectedProject !== null) {
      const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject);
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredProjects.length - 1;
      setSelectedProject(filteredProjects[prevIndex].id);
    }
  };

  const handleNextProject = () => {
    if (selectedProject !== null) {
      const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject);
      const nextIndex = currentIndex < filteredProjects.length - 1 ? currentIndex + 1 : 0;
      setSelectedProject(filteredProjects[nextIndex].id);
    }
  };

  const currentProject = projects.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#D4AF37] font-semibold text-sm uppercase tracking-wider mb-3">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our diverse portfolio of residential, commercial, and mixed-use projects 
            across Addis Ababa and beyond.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-[#2C3E50] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block bg-[#D4AF37] text-[#2C3E50] text-xs font-semibold px-3 py-1 rounded-full mb-2 capitalize">
                    {project.category.replace('-', ' ')}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <div className="flex items-center gap-1 text-white/80 text-sm">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                </div>
              </div>
              <div className="mt-4 group-hover:opacity-0 transition-opacity">
                <h3 className="text-lg font-semibold text-[#2C3E50]">{project.title}</h3>
                <div className="flex items-center gap-1 text-gray-500 text-sm">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {currentProject && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevProject();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextProject();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video relative">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-[#D4AF37] text-[#2C3E50] text-sm font-semibold px-4 py-1.5 rounded-full capitalize">
                {currentProject.category.replace('-', ' ')}
              </span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">{currentProject.title}</h3>
              <div className="flex items-center gap-4 text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {currentProject.location}
                </div>
                <div className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  {currentProject.size}
                </div>
                <span>{currentProject.year}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{currentProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;

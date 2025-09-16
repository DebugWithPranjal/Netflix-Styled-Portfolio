import React, { useState } from 'react';
import { mockProjects, categories } from '../data/mock';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Button } from './ui/button';
import { Filter } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = selectedCategory === 'All' 
    ? mockProjects 
    : mockProjects.filter(project => project.category === selectedCategory);

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const regularProjects = filteredProjects.filter(project => !project.featured);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-red-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my latest software development projects, showcasing full-stack applications, 
            APIs, and innovative solutions built with modern technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <div className="flex items-center text-gray-400 mr-4">
            <Filter className="w-5 h-5 mr-2" />
            <span>Filter by:</span>
          </div>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`
                ${selectedCategory === category 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white'
                }
                transition-all duration-300
              `}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Projects Section */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="w-1 h-8 bg-red-600 mr-4"></span>
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          </div>
        )}

        {/* Regular Projects Section */}
        {regularProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="w-1 h-8 bg-gray-600 mr-4"></span>
              All Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;
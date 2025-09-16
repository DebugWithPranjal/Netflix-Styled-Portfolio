import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Calendar, X } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700 text-white">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <DialogTitle className="text-2xl font-bold text-white">
              {project.title}
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-400 hover:text-white pr-0"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            {project.featured && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-red-600 text-white">Featured Project</Badge>
              </div>
            )}
          </div>
          
          {/* Project Info */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center text-gray-400">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Completed: {new Date(project.completedDate).toLocaleDateString()}</span>
            </div>
            <Badge variant="outline" className="border-red-600 text-red-500">
              {project.category}
            </Badge>
          </div>
          
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Project Overview</h3>
            <p className="text-gray-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>
          
          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors duration-200"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t border-gray-700">
            {project.demoUrl && (
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white flex-1"
                onClick={() => window.open(project.demoUrl, '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Live Demo
              </Button>
            )}
            <Button 
              variant="outline" 
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white flex-1"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View Source Code
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
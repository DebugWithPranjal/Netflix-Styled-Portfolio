import React from 'react';
import { mockSkills, mockExperience } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Code2, Server, Database, Cloud, Calendar } from 'lucide-react';

const About = () => {
  const skillCategories = {
    'Frontend': mockSkills.filter(skill => 
      ['JavaScript', 'TypeScript', 'React', 'Redux'].includes(skill)
    ),
    'Backend': mockSkills.filter(skill => 
      ['Node.js', 'Python', 'Express', 'Flask', 'GraphQL', 'REST APIs'].includes(skill)
    ),
    'Database': mockSkills.filter(skill => 
      ['MongoDB', 'PostgreSQL', 'Redis'].includes(skill)
    ),
    'DevOps & Cloud': mockSkills.filter(skill => 
      ['Docker', 'Kubernetes', 'AWS', 'Git', 'Microservices'].includes(skill)
    ),
    'Other': mockSkills.filter(skill => 
      ['TensorFlow', 'Socket.io'].includes(skill)
    )
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Frontend': return <Code2 className="w-5 h-5 text-red-500" />;
      case 'Backend': return <Server className="w-5 h-5 text-red-500" />;
      case 'Database': return <Database className="w-5 h-5 text-red-500" />;
      case 'DevOps & Cloud': return <Cloud className="w-5 h-5 text-red-500" />;
      default: return <Code2 className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-red-600">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate full-stack developer with expertise in modern web technologies. 
            I love building scalable applications that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Introduction */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="w-1 h-8 bg-red-600 mr-4"></span>
              My Journey
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                With over 5 years of experience in software development, I specialize in creating 
                robust, scalable web applications using cutting-edge technologies. My journey began 
                with a curiosity for problem-solving and has evolved into a passion for crafting 
                exceptional digital experiences.
              </p>
              <p>
                I thrive in collaborative environments where I can contribute to both frontend 
                and backend development, ensuring seamless integration and optimal performance. 
                My experience spans from building responsive user interfaces to designing 
                complex backend architectures and APIs.
              </p>
              <p>
                When I'm not coding, I enjoy staying up-to-date with the latest tech trends, 
                contributing to open-source projects, and mentoring fellow developers in the community.
              </p>
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="w-1 h-8 bg-red-600 mr-4"></span>
              Experience
            </h3>
            <div className="space-y-6">
              {mockExperience.map((exp, index) => (
                <Card key={exp.id} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-white">{exp.position}</h4>
                        <p className="text-red-500 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.duration}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="w-1 h-8 bg-red-600 mr-4"></span>
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skillCategories).map(([category, skills]) => (
              skills.length > 0 && (
                <Card key={category} className="bg-gray-800 border-gray-700 hover:border-red-600 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {getCategoryIcon(category)}
                      <h4 className="text-lg font-semibold text-white ml-3">{category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="bg-gray-700 text-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
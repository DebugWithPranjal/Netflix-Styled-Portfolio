import React from "react";
import { ChevronDown, Code2, Database, Globe } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_70%)]"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Full Stack
              <span className="block text-red-600 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences with modern web
              technologies. From concept to deployment, I build scalable
              applications that make a difference.
            </p>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex justify-center space-x-8 mb-12">
            <div className="flex flex-col items-center group">
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 group-hover:border-red-600 transition-colors duration-300">
                <Globe className="w-8 h-8 text-red-500" />
              </div>
              <span className="text-gray-400 text-sm mt-2">Frontend</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 group-hover:border-red-600 transition-colors duration-300">
                <Database className="w-8 h-8 text-red-500" />
              </div>
              <span className="text-gray-400 text-sm mt-2">Backend</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 group-hover:border-red-600 transition-colors duration-300">
                <Code2 className="w-8 h-8 text-red-500" />
              </div>
              <span className="text-gray-400 text-sm mt-2">DevOps</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={scrollToProjects}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown
              className="w-8 h-8 text-gray-400 mx-auto cursor-pointer hover:text-red-500 transition-colors duration-300"
              onClick={scrollToProjects}
            />
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default Hero;

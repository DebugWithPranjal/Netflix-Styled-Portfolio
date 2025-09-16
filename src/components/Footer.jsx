import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              Dev<span className="text-red-600">Portfolio</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Full-stack developer passionate about creating exceptional digital
              experiences with modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <nav className="space-y-2">
              <button
                onClick={() =>
                  document
                    .getElementById("home")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="block text-gray-400 hover:text-red-500 transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="block text-gray-400 hover:text-red-500 transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="block text-gray-400 hover:text-red-500 transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="block text-gray-400 hover:text-red-500 transition-colors duration-200"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@example.com"
                className="flex items-center text-gray-400 hover:text-red-500 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                contact@example.com
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © {currentYear} DevPortfolio. All rights reserved.
            </p>
            <p className="flex items-center text-gray-400 text-sm mt-4 md:mt-0">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> and
              modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

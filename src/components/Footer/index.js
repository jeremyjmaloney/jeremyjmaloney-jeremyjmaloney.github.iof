import React from "react";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Jeremy J Maloney
            </div>
            <p className="text-gray-400 leading-relaxed">
              Front end developer passionate about creating beautiful,
              functional web experiences. Always learning, always building.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("skills")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Skills
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Projects
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 mb-4">
              <a
                href="mailto:alex.chen@example.com"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                jeremyjmaloney@gmail.com
              </a>
              <a
                href="tel:+13307030172"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                +1 (330) 703-0172
              </a>
              <span className="block text-gray-400">Columbus, OH</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/jeremyjmaloney"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jeremyjmaloney/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:jeremyjmaloney@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 flex items-center gap-2">
              © {currentYear} Jeremy J Maloney. Made with{" "}
              <Heart size={16} className="text-yellow-300" /> using React &
              Tailwind
            </p>
            <p className="text-gray-400 text-sm">
              Designed & Built by Jeremy J Maloney
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

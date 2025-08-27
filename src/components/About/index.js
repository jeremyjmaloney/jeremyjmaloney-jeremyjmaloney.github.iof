import React from "react";
import {
  Brain,
  Code,
  LocateFixed,
  Palette,
  Sticker,
  Users,
} from "lucide-react";

export const About = () => {
  // Automate professional experience
  const yearsExperience = new Date().getFullYear() - 2019;

  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Modern Front End Expertise",
      description:
        "Skilled in building responsive, user-friendly interfaces using React, JavaScript, and modern web technologies.",
    },
    {
      icon: <Palette className="w-8 h-8 text-cyan-500" />,
      title: "UX/WCAG Focus",
      description:
        "Passionate about crafting clean, accessible, and intuitive designs that enhance the user experience.",
    },
    {
      icon: <Sticker className="w-8 h-8 text-emerald-500" />,
      title: "Customer-Oriented",
      description:
        "Dedicated to creating solutions that prioritize end-user needs and deliver real value.",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Collaborative Team Player",
      description:
        "Thrives in agile environments, working closely with designers, product managers, and engineers to deliver quality solutions.",
    },
    {
      icon: <LocateFixed className="w-8 h-8 text-red-500" />,
      title: "Problem Solver & Innovator",
      description:
        "Enjoys tackling complex challenges with creative, efficient solutions that align with business goals.",
    },
    {
      icon: <Brain className="w-8 h-8 text-pink-500" />,
      title: "Continuous Learner",
      description:
        "Staying current with evolving frameworks, tools, and best practices in front end development.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Passionate and Curious Developer with {yearsExperience}+ Years
                Professional Experience
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a front end developer who creates exceptional digital
                experiences. With expertise in React and modern web
                technologies, I transform business ideas and design into
                pixel-perfect, responsive applications.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My journey began in 6th grade learning Qbasic. Today, I combine
                technical expertise with design sensibility to build
                applications that users love to interact with.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, I enjoy creating music, playing video
                games, and spending time with my family.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Professional Experience</span>
                  <span className="font-semibold text-gray-900">
                    {yearsExperience}+ Years
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Projects & Features</span>
                  <span className="font-semibold text-gray-900">50+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Happy Customers</span>
                  <span className="font-semibold text-gray-900">
                    30 Million+
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location</span>
                  <span className="font-semibold text-gray-900">
                    Columbus, OH
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md mb-6 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

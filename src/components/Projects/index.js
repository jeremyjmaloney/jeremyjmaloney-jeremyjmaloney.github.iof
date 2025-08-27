import React from "react";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Victoria's Secret & Co.",
      description:
        "I led multiple projects and built features for teams including Loyalty, Non-transactional Points, Account, SSR, Product, Waitlist, Notify Me, Personaliztion, and Navigation.",
      image: "https://cdn.worldvectorlogo.com/logos/victorias-secret.svg",
      technologies: [
        "React",
        "Node.js",
        "Cloudflare",
        "Javascript",
        "TypeScript",
        "Styled-Components",
        "Figma",
        "Jest",
      ],
      liveLink: "https://www.victoriassecret.com/",
      date: "2020-2025",
      status: "Live",
    },
    {
      title: "Scotts Miracle-Grow",
      description:
        "I worked with the team to re-construct Scotts websites from scratch using dynamic, reusable React components and Next.js to build out different pages, components, and features.",
      image:
        "https://play-lh.googleusercontent.com/OB7blq8_R9RBbNWCxBYgZTKh241TvDF2s2k_ZEoRIt21xOcOFxmueGa_AGcIGePEPBY",
      technologies: [
        "React",
        "Next.js",
        "Javascript",
        "HTML",
        "CSS/SASS",
        "Contentful",
      ],
      liveLink: "https://scottsmiraclegro.com/",
      date: "2020",
      status: "Live",
    },
    {
      title: "RG Barry Brands",
      description:
        "I created professional quality eCommerce web content including emails, features, tools, updates, and responsive styling while maintaining the marketing message, artistic vision, and user experience.",
      image:
        "https://s3-us-west-1.amazonaws.com/upload.comparably.com/294058/companies/294058/logo_1724163956953.jpg",
      technologies: ["React", "Javascript", "HTML", "CSS/SASS", "Salesforce"],
      liveLink: "https://rgbarry.com/",
      date: "2019-2020",
      status: "Live",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work, featuring web applications built with
            modern technologies and best practices.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 border border-gray-100"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === "Live"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-orange-100 text-orange-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {project.date}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <Tag size={14} className="text-gray-400 mr-1" />
                      <span className="text-sm text-gray-500">
                        Technologies
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium"
                    >
                      <ExternalLink size={14} />
                      Live Site
                    </a>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-900 hover:text-gray-900 transition-all duration-200 text-sm font-medium"
                      >
                        <Github size={14} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View My Projects Button */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/jeremyjmaloney"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
            >
              <Github size={20} />
              View My Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

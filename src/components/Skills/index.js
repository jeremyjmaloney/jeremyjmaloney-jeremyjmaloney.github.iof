import React from "react";
import {
  Atom,
  FileType2,
  FileCode,
  FileDigit,
  Palette,
  Wind,
  Server,
  GitBranch,
} from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 98 },
        { name: "Styled Components", level: 90 },
        { name: "Tailwind CSS", level: 75 },
        { name: "Next.js", level: 75 },
        { name: "TypeScript", level: 70 },
      ],
    },
    {
      title: "Tools & Workflow",
      skills: [
        { name: "Git", level: 98 },
        { name: "VS Code", level: 95 },
        { name: "Confluence", level: 90 },
        { name: "Copilot", level: 80 },
        { name: "Jira", level: 90 },
        { name: "Bitbucket", level: 90 },
        { name: "Bamboo", level: 85 },
        { name: "Harness", level: 85 },
        { name: "Figma", level: 85 },
        { name: "DevTools", level: 90 },
        { name: "CMS Systems", level: 80 },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "REST APIs", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "Express", level: 70 },
        { name: "MongoDB", level: 70 },
        { name: "PostgreSQL", level: 60 },
        { name: "Go", level: 50 },
      ],
    },
  ];

  const skillsILove = [
    { name: "React", icon: <Atom className="w-8 h-8 text-white" /> },
    { name: "JavaScript", icon: <FileCode className="w-8 h-8 text-white" /> },
    { name: "Tailwind", icon: <Wind className="w-8 h-8 text-white" /> },
    { name: "HTML5", icon: <FileDigit className="w-8 h-8 text-white" /> },
    { name: "CSS3", icon: <Palette className="w-8 h-8 text-white" /> },
    { name: "Git", icon: <GitBranch className="w-8 h-8 text-white" /> },
    { name: "TypeScript", icon: <FileType2 className="w-8 h-8 text-white" /> },
    { name: "Node.js", icon: <Server className="w-8 h-8 text-white" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with
            to create amazing web experiences.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technology Icons */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Technologies I Love
            </h3>
            <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
              {skillsILove.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 min-w-[80px]"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-2">
                    {tech.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

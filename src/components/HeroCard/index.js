import React from "react";
import { ArrowDown } from "lucide-react";
import headshot from "../../images/headshot.jpeg";

export const HeroCard = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-gradient-to-tr from-emerald-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-600">
                <img
                  src={headshot}
                  alt="profile headshot"
                  className="rounded-full grayscale"
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Hey, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Jeremy
            </span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Front End Developer & Leader
          </p>

          {/* Intro Text */}
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            At my core, I'm a builder and problem-solver. I love asking
            questions, breaking down complexity, and crafting thoughtful
            solutions that make an impact. My focus is on delivering sustainable
            software and elevating the teams I work with—always pushing for
            excellence and innovation.
          </p>

          {/* CTA */}
          <div className="flex justify-center mb-16">
            <button
              onClick={scrollToAbout}
              className="w-1/2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              View My Work
            </button>
          </div>

          {/* Scroll Arrow */}
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 text-gray-500 hover:border-blue-500 hover:text-blue-600 transition-all duration-200 animate-bounce"
          >
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

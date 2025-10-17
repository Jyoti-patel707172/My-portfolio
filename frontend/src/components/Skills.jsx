import React from "react";
import { portfolioData } from "../data/portfolioData";

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            A blend of technical expertise and soft skills that define my work as a full-stack developer.
          </p>
        </div>

        {/* Technical Skills */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Technical Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-16">
          {skills.technical.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <span className="font-semibold text-gray-800 text-center">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Soft Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.soft.map((skill, index) => (
            <div
              key={index}
              className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-gray-700 font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

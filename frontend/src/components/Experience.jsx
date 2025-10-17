import React from "react";
import { portfolioData } from "../data/portfolioData";

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Practical learning through hands-on projects and continuous development as a MERN Stack Developer.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="mb-12 bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {exp.title}
                </h3>
                <span className="text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full text-sm">
                  {exp.duration}
                </span>
              </div>

              <h4 className="text-xl text-gray-700 mb-3">{exp.company}</h4>
              <p className="text-gray-600 mb-6">{exp.description}</p>

              {exp.achievements && exp.achievements.length > 0 && (
                <>
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">
                    Key Highlights:
                  </h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-600"
                      >
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from "react";
import { portfolioData } from "../data/portfolioData";

const About = () => {
  const { about, personalInfo } = portfolioData;

  const stats = [
    { value: "2+", label: "Years of Learning", bg: "bg-blue-50", text: "text-blue-600" },
    { value: "5+", label: "Projects Completed", bg: "bg-green-50", text: "text-green-600" },
    { value: "3+", label: "Technologies Mastered", bg: "bg-purple-50", text: "text-purple-600" },
    { value: "6+", label: "Certifications Earned", bg: "bg-orange-50", text: "text-orange-600" }
  ];

  return (
    <section id="about" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">{about.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Profile & Description */}
          <div className="animate-fadeIn">
            {about.profileImage && (
  <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg flex items-center justify-center bg-gray-100">
    <img
      src={about.profileImage}
      alt={`${personalInfo.name} About Profile`}
      className="max-w-full max-h-full object-contain"
    />
  </div>
)}

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              I’m <span className="font-semibold text-blue-600">{personalInfo.name}</span>, an aspiring <span className="font-medium">MERN Full-Stack Developer</span>. Skilled in <b>Java</b>, <b>Python</b>, <b>C++</b>, and passionate about building dynamic, responsive web solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Passions */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Passions</h3>
                <ul className="space-y-2">
                  {about.passions?.map((p, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Strengths */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Strengths</h3>
                <ul className="space-y-2">
                  {about.personalDetails?.map((s, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-6 animate-slideInRight">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`${stat.bg} p-6 rounded-xl text-center shadow-sm hover:shadow-md transition`}
              >
                <div className={`text-3xl font-bold ${stat.text} mb-1`}>{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

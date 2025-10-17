import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  const { personalInfo } = portfolioData;

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Jyoti_Patel_Resume.pdf';
    link.download = 'Jyoti_Patel_Resume.pdf';
    link.click();
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-3">
              {personalInfo.name}
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
              {personalInfo.title}
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {personalInfo.intro} I have a strong foundation in software development
              with hands-on experience in Java, Python, and C++. Passionate about
              problem-solving, innovation, and creating impactful digital experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleDownloadResume}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 transform hover:scale-105"
              >
                Download Resume
              </button>
              <button
                onClick={scrollToContact}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
              </button>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:underline text-blue-600"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="hover:underline text-blue-600"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedin className="text-xl" />
                <span className="sr-only">LinkedIn</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition-all duration-300 transform hover:scale-110"
              >
                <FaGithub className="text-xl" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Section - Profile Image */}
          <div className="slide-in-right flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 flex-shrink-0">
              <div className="w-full h-full bg-blue-200 rounded-full overflow-hidden border-8 border-white shadow-2xl flex items-center justify-center">
                <img
                  src={personalInfo.profileImage}
                  alt="Jyoti Patel"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Decorative animated circles */}
              <div className="absolute -top-6 right-0 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-ping"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

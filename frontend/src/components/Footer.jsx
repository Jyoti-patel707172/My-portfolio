import React from "react";
import { portfolioData } from "../data/portfolioData";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const { personalInfo } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Name */}
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            {personalInfo.name}
          </h2>

          {/* Tagline */}
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg md:text-xl">
            MERN Stack Developer passionate about creating innovative web
            solutions and delivering exceptional user experiences.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-8 mb-8 text-3xl">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition transform hover:scale-110 duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition transform hover:scale-110 duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-red-500 transition transform hover:scale-110 duration-300"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm md:text-base">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

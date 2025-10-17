import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const Achievements = () => {
  const { achievements } = portfolioData;
  const [modalImage, setModalImage] = useState(null);

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Certificate Image */}
              <div
                className="h-48 overflow-hidden bg-gray-100 cursor-pointer"
                onClick={() => setModalImage(achievement.image)}
              >
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 mb-1">{achievement.issuer}</p>
                <p className="text-gray-500 text-sm mb-4">{achievement.year}</p>

                {achievement.skills && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {achievement.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex justify-between items-center flex-wrap gap-2">
                  <span className="text-green-600 font-medium text-sm">
                    Credential ID: {achievement.credentialId || "N/A"}
                  </span>
                  {achievement.verifyLink &&
                    achievement.verifyLink !== "#" && (
                      <a
                        href={achievement.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                      >
                        View <FaExternalLinkAlt className="inline" />
                      </a>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty fallback */}
        {achievements.length === 0 && (
          <p className="text-center text-gray-500 mt-12">
            Certificates will be added soon.
          </p>
        )}

        {/* Modal */}
        {modalImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
            onClick={() => setModalImage(null)}
          >
            <div className="relative max-w-3xl w-full">
              <img
                src={modalImage}
                alt="Certificate Preview"
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setModalImage(null)}
                className="absolute top-2 right-2 text-white text-2xl"
              >
                <FaTimes />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;

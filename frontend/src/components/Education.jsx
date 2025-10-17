import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { FaDownload, FaEye, FaTimes } from "react-icons/fa";

const Education = () => {
  const { education } = portfolioData;
  const [selectedPdf, setSelectedPdf] = useState(null);

  const openPdfModal = (pdfUrl, degreeName) => {
    setSelectedPdf({ url: pdfUrl, degree: degreeName });
  };

  const closePdfModal = () => setSelectedPdf(null);

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            My academic journey that built a strong foundation for my development career.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="flex items-start justify-center md:w-24">
                <div className="relative">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex-1 bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>
                  {edu.percentage && (
                    <span className="text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full text-sm">
                      {edu.percentage}
                    </span>
                  )}
                </div>

                <h4 className="text-xl text-gray-700 mb-2">{edu.institution}</h4>
                <p className="text-gray-600 mb-4 italic">{edu.duration}</p>
                <p className="text-gray-600 mb-6">{edu.description}</p>

                {/* PDF Buttons */}
                {edu.certificate && (
                  <div className="flex flex-wrap gap-4">
                    {/* View Button */}
                    <button
                      onClick={() => openPdfModal(edu.certificate, edu.degree)}
                      className="bg-primary hover:bg-secondary text-white font-medium py-2.5 px-5 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      <FaEye />
                      View Certificate
                    </button>

                    {/* Download Button */}
                    <a
                      href={edu.certificate}
                      download={`${edu.degree}_Certificate.pdf`}
                      className="bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-5 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                    >
                      <FaDownload />
                      Download
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Modal */}
      {selectedPdf && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closePdfModal}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center bg-gray-800 text-white p-4 rounded-t-lg">
              <h3 className="text-lg font-semibold">
                {selectedPdf.degree} - Certificate
              </h3>
              <button
                onClick={closePdfModal}
                className="text-white hover:text-gray-300 text-2xl transition-colors duration-200"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="h-[80vh] p-4">
              <iframe
                src={selectedPdf.url}
                className="w-full h-full border-0 rounded-lg"
                title={`${selectedPdf.degree} Certificate`}
              >
                <p className="text-center p-8">
                  Your browser doesn't support PDF viewing.{" "}
                  <a
                    href={selectedPdf.url}
                    download
                    className="text-blue-600 underline ml-2"
                  >
                    Download the certificate instead
                  </a>
                </p>
              </iframe>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-b-lg">
              <span className="text-gray-600 text-sm">
                Scroll to view the complete certificate
              </span>
              <a
                href={selectedPdf.url}
                download={`${selectedPdf.degree}_Certificate.pdf`}
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
              >
                <FaDownload />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;

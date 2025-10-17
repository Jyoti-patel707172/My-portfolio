import React, { useState } from 'react';
import { FaDownload, FaEye, FaTimes } from 'react-icons/fa';

const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const resumeUrl = '/Jyoti_Patel_Resume.pdf'; // Make sure your PDF is in the public folder

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">My Resume</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            View or download my complete resume to explore my experience, education, and projects in detail.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {/* View Resume Button */}
            <button
              onClick={openModal}
              className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3 justify-center"
            >
              <FaEye className="text-2xl" />
              View Resume
            </button>

            {/* Download Resume Button */}
            <a
              href={resumeUrl}
              download="Jyoti_Patel_Resume.pdf"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3 justify-center"
            >
              <FaDownload className="text-2xl" />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* PDF Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center bg-gray-800 text-white p-4 rounded-t-lg">
              <h3 className="text-lg font-semibold">Jyoti Patel - Resume</h3>
              <button
                onClick={closeModal}
                className="text-white hover:text-gray-300 text-2xl transition-colors duration-200"
              >
                <FaTimes />
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="h-[80vh] p-4">
              <iframe
                src={resumeUrl}
                className="w-full h-full border-0 rounded-lg"
                title="Jyoti Patel Resume"
              >
                <p className="text-center p-8">
                  Your browser doesn't support PDF viewing.{" "}
                  <a href={resumeUrl} download className="text-blue-600 underline ml-2">
                    Download the resume instead
                  </a>
                </p>
              </iframe>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-b-lg">
              <span className="text-gray-600 text-sm">
                Scroll to view the complete resume
              </span>
              <a
                href={resumeUrl}
                download="Jyoti_Patel_Resume.pdf"
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
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

export default Resume;

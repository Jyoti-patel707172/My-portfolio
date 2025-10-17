/* ==== Custom Scrollbar ==== */
import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const { personalInfo } = portfolioData;

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ✅ Email validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitStatus("invalid");
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(""), 4000);
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL || "https://my-portfolio-backend-ayk8.onrender.com"}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // ✅ Scroll to message smoothly
        window.scrollTo({ top: e.target.offsetTop - 100, behavior: "smooth" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(""), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            I'd love to hear from you! Whether you have a project in mind, a question,
            or just want to connect — feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Let’s Connect</h3>

            {[
              { icon: "📧", title: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, bg: "bg-blue-100", color: "text-blue-600" },
              { icon: "📱", title: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}`, bg: "bg-green-100", color: "text-green-600" },
              { icon: "📍", title: "Location", value: personalInfo.location, bg: "bg-purple-100", color: "text-purple-600" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center`}>
                  <span className={`${item.color} text-xl`}>{item.icon}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition-all duration-300 transform hover:scale-110"
                >
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="slide-in-right">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
              {["name", "email"].map((field) => (
                <div key={field} className="mb-6">
                  <label htmlFor={field} className="block text-gray-700 font-medium mb-2 capitalize">
                    {field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder={`Enter your ${field}`}
                  />
                </div>
              ))}

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
                  placeholder="Enter your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
                  ✅ Thank you! Your message has been sent successfully.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
                  ❌ Sorry, there was an error sending your message. Please try again.
                </div>
              )}
              {submitStatus === "invalid" && (
                <div className="mt-4 p-3 bg-yellow-100 text-yellow-700 rounded-lg">
                  ⚠️ Please enter a valid email address.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

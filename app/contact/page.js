"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitSuccess(false), 3000);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-gray-100 shadow-lg border border-gray-300 rounded-lg p-6 w-full max-w-6xl flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8 transition-all duration-300 ease-in-out">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-3xl font-bold mb-4 text-center text-green-600">
              Contact Us
            </h1>
            <p className="text-gray-700 mb-6 text-center">
              Welcome to FarmRuler! We&apos;re on a mission to build an
              Incredible Full-Stack Web Application for Agriculture and Farming
              enthusiasts.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="block text-gray-800 p-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md transition duration-300 ease-in-out ${
                    errors.name
                      ? "border-red-500 shake"
                      : "border-gray-400 focus:border-green-500 focus:ring focus:ring-green-200"
                  }`}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-gray-800 p-1">Email</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md transition duration-300 ease-in-out ${
                    errors.email
                      ? "border-red-500 shake"
                      : "border-gray-400 focus:border-green-500 focus:ring focus:ring-green-200"
                  }`}
                  placeholder="Your Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-gray-800 p-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md transition duration-300 ease-in-out ${
                    errors.message
                      ? "border-red-500 shake"
                      : "border-gray-400 focus:border-green-500 focus:ring focus:ring-green-200"
                  }`}
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
    w-full py-3 px-6 
    bg-white text-green-600 
    border-2 border-green-600 
    rounded-full 
    font-semibold text-lg
    transition-all duration-300 ease-in-out
    hover:bg-green-600 hover:text-white
    focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50
    ${
      isSubmitting
        ? "opacity-50 cursor-not-allowed"
        : "transform hover:-translate-y-1 hover:shadow-lg"
    }
  `}
              >
                <span
                  className={`inline-block transition-all duration-300 ${
                    isSubmitting ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {isSubmitting ? "" : "Send Message"}
                </span>
                {isSubmitting && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="animate-spin h-6 w-6 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </span>
                )}
              </button>
            </form>
            {submitSuccess && (
              <div className="text-green-600 text-center mt-4 animate-fade-in">
                Message sent successfully!
              </div>
            )}
          </div>

          <div className="hidden md:block border-l border-gray-300"></div>

          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold mb-4 text-center text-green-600">
              Features
            </h2>
            <ul className="list-none space-y-4">
              {[
                "Simple and Clean UI to Display Weather Conditions",
                "Tool connecting the agricultural community with NASA datasets",
                "Integrate NASA datasets to support farmers decision-making",
                "Farmers can determine resources for selected spatial and temporal ranges",
                "Many More...",
              ].map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <svg
                    className="w-6 h-6 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }
        .shake {
          animation: shake 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;

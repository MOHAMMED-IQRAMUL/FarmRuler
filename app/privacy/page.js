"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTheme } from 'next-themes';

const PrivacyPage = () => {
    const { theme } = useTheme(); // Get the current theme

    return (
        <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} min-h-screen`}>
            <Navbar />
            <div className={`max-w-full mx-auto shadow-lg rounded-lg p-10 mt-6 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                <h1 className="text-4xl font-bold mb-6 text-center border-b-2 border-gray-300 pb-2">Privacy Policy</h1>
                
                <p className="mb-6 text-lg leading-relaxed">
                    Welcome to FarmRuler! We are committed to protecting your privacy and ensuring your personal information is handled with care. This Privacy Policy outlines how we collect, use, and safeguard your data.
                </p>
                
                <h2 className="text-3xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">🚀 Project Overview</h2>
                <p className="mb-6 text-lg leading-relaxed">
                    FarmRuler is designed to streamline agricultural activities through innovative technology and AI integration. We aim to empower farmers and enthusiasts alike, providing tools and insights for better farming practices.
                </p>
                
                <h2 className="text-3xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">Features</h2>
                <ul className="list-disc list-inside mb-6 text-lg leading-relaxed">
                    <li className="mb-2"><strong>Weather Insights:</strong> A user-friendly UI to display localized weather conditions and forecasts.</li>
                    <li className="mb-2"><strong>Data Connectivity:</strong> Access to NASA’s satellite and geospatial datasets, facilitating informed decision-making.</li>
                    <li className="mb-2"><strong>Predictive Analytics:</strong> Tools for improved prediction capacity and risk management tailored to your farming needs.</li>
                    <li className="mb-2"><strong>Resource Management:</strong> Features that help you analyze and determine resource availability for your farm.</li>
                    <li className="mb-2"><strong>Community Engagement:</strong> Connect with fellow farmers and share insights to foster collaboration.</li>
                </ul>
                
                <h2 className="text-3xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">Your Privacy Matters</h2>
                <p className="mb-6 text-lg leading-relaxed">
                    We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
                </p>

                <h2 className="text-3xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">Data Collection</h2>
                <p className="mb-6 text-lg leading-relaxed">
                    We collect data to enhance our services. This includes information you provide directly, such as your name and email address, and automatically collected data like your IP address and browsing behavior.
                </p>

                <h2 className="text-3xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">Data Usage</h2>
                <p className="mb-6 text-lg leading-relaxed">
                    The data we collect is used for improving our services, personalizing your experience, and communicating with you. We do not share your personal information with third parties without your consent, except as required by law.
                </p>

                <h2 className="text-3xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">User Rights</h2>
                <p className="mb-6 text-lg leading-relaxed">
                    You have the right to access, correct, or delete your personal information at any time. If you wish to exercise these rights, please contact us.
                </p>

                <h2 className="text-3xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">Cookies Policy</h2>
                <p className="mb-6 text-lg leading-relaxed">
                    Our website uses cookies to enhance user experience. Cookies are small data files stored on your device. You can manage cookie preferences through your browser settings.
                </p>

                <h2 className="text-3xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">Third-Party Services</h2>
                <p className="mb-6 text-lg leading-relaxed">
                    We may use third-party services for analytics and advertising. These services may collect information about your online activity on our site and other sites. We encourage you to review their privacy policies as well.
                </p>

                <h2 className="text-3xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">Data Security</h2>
                <p className="mb-6 text-lg leading-relaxed">
                    We implement various security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                </p>

                <h2 className="text-3xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">Contact Us</h2>
                <p className="mb-6 text-lg leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@farmruler.com" className="text-blue-600 underline hover:text-blue-800 transition-colors duration-200">privacy@farmruler.com</a>.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPage;

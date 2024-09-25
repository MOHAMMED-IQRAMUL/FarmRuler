"use client"
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <Navbar/>
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                <p className="mb-4">
                    Welcome to FarmRuler! We're on a mission to build an Incredible Full-Stack Web Application Specially For Person With Interest in Agriculture and Farming. This repository is a collaborative effort where we invite developers, designers, and enthusiasts to contribute and help bring this project to life.
                </p>
                <h2 className="text-2xl font-semibold mb-2">🚀 Project Overview</h2>
                <p className="mb-4">
                    FarmRuler aims to Ease The Agricultural Activities. Our focus is on Integrating AI and Tech In Agricultural World and Ease the Procedure. Whether you're here to contribute code, design, or just explore, there's a place for you!
                </p>
                <h2 className="text-2xl font-semibold mb-2">Features</h2>
                <ul className="list-disc list-inside mb-4">
                    <li className="mb-2">
                        <strong>Feature 1:</strong> A Simple and Clean UI to Display Weather Conditions In Specific Regions. Create Personalized AI bots.
                    </li>
                    <li className="mb-2">
                        <strong>Feature 2:</strong> Challenge is to design a tool that connects the agricultural community with NASA’s satellite and geospatial datasets in ways that increase data access, integration, environmental topic of concern to farmers.
                    </li>
                    <li className="mb-2">
                        <strong>Feature 3:</strong> By integrating NASA datasets and data analyses in your tool’s design, you can create new solutions and prototypes that support farmers by providing improved prediction capacity, risk management, and/or decision-making processes.
                    </li>
                    <li className="mb-2">
                        <strong>Feature 4:</strong> Farmers will likely want to determine the characteristics of Resources for selected spatial and temporal ranges. They will want to understand how the information relates to their specific situation (e.g., locale, size, and type of farm, etc.).
                    </li>
                    <li className="mb-2">Many More...</li>
                </ul>
                <p className="mb-4">
                    We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Data Collection</h2>
                <p className="mb-4">
                    We collect data to improve our services and provide you with a better experience. This includes information you provide directly, such as your name and email address, as well as data collected automatically, such as your IP address and browsing behavior.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Data Usage</h2>
                <p className="mb-4">
                    The data we collect is used to enhance our services, personalize your experience, and communicate with you. We do not share your personal information with third parties without your consent, except as required by law.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
                <p className="mb-4">
                    We implement a variety of security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at privacy@farmruler.com.
                </p>
            </div>
            <Footer/>
        </div>
    );
};

export default PrivacyPage;
"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <Navbar/>
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
                <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
                <p className="text-gray-700 mb-6 text-center">
                    Welcome to FarmRuler! We &apos re on a mission to build an Incredible Full-Stack Web Application Specially For Person With Interest in Agriculture and Farming. This repository is a collaborative effort where we invite developers, designers, and enthusiasts to contribute and help bring this project to life.
                </p>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Name</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Your Name" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input type="email" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Your Email" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Message</label>
                        <textarea className="w-full p-2 border border-gray-300 rounded-md" rows="4" placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Send Message</button>
                </form>
            </div>
            <div className="mt-8 w-full max-w-3xl">
                <h2 className="text-2xl font-bold mb-4 text-center">Features</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Feature 1: A Simple and Clean UI to Display Weather Conditions In Specific Regions. Create Personalizes AI bots.</li>
                    <li>Feature 2: Challenge is to design a tool that connects the agricultural community with NASA &apos s satellite and geospatial datasets in ways that increase data access, integration, environmental topic of concern to farmers.</li>
                    <li>Feature 3: By integrating NASA datasets and data analyses in your tool&aposs design, you can create new solutions and prototypes that support farmers by providing improved prediction capacity, risk management, and/or decision-making processes.</li>
                    <li>Feature 4: Farmers will likely want to determine the characteristics of Resources for selected spatial and temporal ranges. They will want to understand how the information relates to their specific situation (e.g., locale, size, and type of farm, etc.).</li>
                    <li>Many More...</li>
                </ul>
            </div>
            <Footer/>
        </div>
    );
};

export default ContactPage;
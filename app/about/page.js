"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <Navbar />
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
                <p className="text-lg text-gray-700 mb-4">
                    Welcome to FarmRuler! We&aposre on a mission to build an Incredible Full-Stack Web Application Specially For Person With Interest in Agriculture and Farming. This repository is a collaborative effort where we invite developers, designers, and enthusiasts to contribute and help bring this project to life.
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🚀 Project Overview</h2>
                <p className="text-lg text-gray-700 mb-4">
                    FarmRuler aims to Ease The Agricultural Activities. Our focus is on Integrating AI and Tech In Agricultural World and Ease the Procedure. Whether you&aposre here to contribute code, design, or just explore, there&aposs a place for you!
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features</h2>
                <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                    <li className="mb-2">Feature 1: A Simple and Clean UI to Display Weather Conditions In Specific Regions. Create Personalized AI bots.</li>
                    <li className="mb-2">Feature 2: Challenge is to design a tool that connects the agricultural community with NASA&aposs satellite and geospatial datasets in ways that increase data access, integration, environmental topic of concern to farmers.</li>
                    <li className="mb-2">Feature 3: By integrating NASA datasets and data analyses in your tool&aposs design, you can create new solutions and prototypes that support farmers by providing improved prediction capacity, risk management, and/or decision-making processes.</li>
                    <li className="mb-2">Feature 4: Farmers will likely want to determine the characteristics of Resources for selected spatial and temporal ranges. They will want to understand how the information relates to their specific situation (e.g., locale, size, and type of farm, etc.).</li>
                    <li className="mb-2">Many Moreee</li>
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;
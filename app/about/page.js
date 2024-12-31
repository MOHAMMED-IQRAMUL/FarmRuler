"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';

const AboutPage = () => {
    return (
        <div className="min-h-screen p-6">
            <Navbar />
            <div className="max-w-4xl mx-auto shadow-md rounded-lg p-8 mt-20 text-justify">
                <PageTitle title="About Us" />
                <p className="text-lg mb-4">
                    Welcome to FarmRuler! We’re on a mission to build an incredible full-stack web application tailored for individuals passionate about agriculture and farming. This repository is a collaborative effort, and we warmly invite developers, designers, and enthusiasts to contribute and help bring this project to life.
                </p>
                <h2 className="text-2xl font-semibold mb-4">🚀 Project Overview</h2>
                <p className="text-lg mb-4">
                    FarmRuler aims to Ease The Agricultural Activities. Our focus is on Integrating AI and Tech In Agricultural World and Ease the Procedure. Whether you&aposre here to contribute code, design, or just explore, there&aposs a place for you!
                </p>
                <h2 className="text-2xl font-semibold mb-4">Features</h2>
                <ul className="list-disc list-inside text-lg mb-4">
                    <li className="mb-2">Feature 1: A Simple and Clean UI to Display Weather Conditions In Specific Regions. Create Personalized AI bots.</li>
                    <li className="mb-2">Feature 2: Challenge is to design a tool that connects the agricultural community with NASA&aposs satellite and geospatial datasets in ways that increase data access, integration, environmental topic of concern to farmers.</li>
                    <li className="mb-2">Feature 3: By integrating NASA datasets and data analyses in your tool&aposs design, you can create new solutions and prototypes that support farmers by providing improved prediction capacity, risk management, and/or decision-making processes.</li>
                    <li className="mb-2">Feature 4: Farmers will likely want to determine the characteristics of Resources for selected spatial and temporal ranges. They will want to understand how the information relates to their specific situation (e.g., locale, size, and type of farm, etc.).</li>
                    <li className="mb-2 list-none">...and many more!</li>
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;
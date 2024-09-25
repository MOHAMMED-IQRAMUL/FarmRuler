"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

 

const TermsPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-4">Terms and Services</h1>
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
                    <li className="mb-2">
                        Many Moreee
                    </li>
                </ul>
            </main>
            <Footer />
        </div>
    );
};

export default TermsPage;
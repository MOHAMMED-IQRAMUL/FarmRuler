"use client"
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FAQPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <Navbar/>
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold mb-6 text-center">FarmRuler FAQ</h1>
                <p className="text-lg mb-4">
                    Welcome to FarmRuler! We're on a mission to build an incredible full-stack web application specially for persons with interest in agriculture and farming. This repository is a collaborative effort where we invite developers, designers, and enthusiasts to contribute and help bring this project to life.
                </p>
                <p className="text-lg mb-8">
                    🚀 Project Overview: FarmRuler aims to ease the agricultural activities. Our focus is on integrating AI and tech in the agricultural world and easing the procedure. Whether you're here to contribute code, design, or just explore, there's a place for you!
                </p>
                <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">Feature 1: Weather Conditions and AI Bots</h2>
                        <p>
                            A simple and clean UI to display weather conditions in specific regions. Create personalized AI bots.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">Feature 2: Connecting Agricultural Community with NASA</h2>
                        <p>
                            Challenge is to design a tool that connects the agricultural community with NASA’s satellite and geospatial datasets in ways that increase data access, integration, and address environmental topics of concern to farmers.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">Feature 3: Improved Prediction and Risk Management</h2>
                        <p>
                            By integrating NASA datasets and data analyses in your tool’s design, you can create new solutions and prototypes that support farmers by providing improved prediction capacity, risk management, and/or decision-making processes.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">Feature 4: Resource Characteristics</h2>
                        <p>
                            Farmers will likely want to determine the characteristics of resources for selected spatial and temporal ranges. They will want to understand how the information relates to their specific situation (e.g., locale, size, and type of farm, etc.).
                        </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">Many More...</h2>
                        <p>
                            Explore more features and contribute to our project to help us build a comprehensive tool for the agricultural community.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default FAQPage;
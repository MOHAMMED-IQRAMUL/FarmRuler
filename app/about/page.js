"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';

const AboutPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-100 via-yellow-50 to-white">
            <Navbar />
            <main className="flex flex-1 items-center justify-center px-4 py-12">
                <section className="w-full max-w-4xl bg-white/90 shadow-2xl rounded-xl border border-gray-200 p-10 md:p-14 mt-14 animate-fade-in">
                    <PageTitle title="About Us" />
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        Welcome to <span className="font-semibold text-green-700">FarmRuler!</span> We’re on a mission to build an incredible full-stack web application tailored for individuals passionate about agriculture and farming. This repository is a collaborative effort, and we warmly invite developers, designers, and enthusiasts to contribute and help bring this project to life.
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-800 flex items-center gap-2">
                        <span>🚀</span> Project Overview
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        <span className="font-semibold text-green-600">FarmRuler</span> aims to <span className="italic">Ease The Agricultural Activities</span>. Our focus is on integrating AI and modern tech with farming, simplifying processes, and delivering real-world impact. Whether contributing code, design, or just exploring, there’s a place for you!
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-800">Features</h2>
                    <ul className="space-y-5 text-lg text-gray-800 pl-4">
                        <li className="flex items-start gap-2">
                            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                            A simple, clean UI to display weather conditions; create personalized AI bots for every farmer.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                            A tool linking the agricultural community to NASA’s satellite & geospatial datasets—improving data access, environmental awareness, and actionable insights for farmers.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                            Integrated NASA datasets and data analysis empower new solutions, prototypes for better prediction, risk management, and decision-making.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                            Tools that help farmers analyze resources for chosen regions, timeframes, and their unique needs—locale, farm size, type, and more.
                        </li>
                        <li className="text-green-700 italic font-medium mt-3">...and many more!</li>
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;


"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center">
            <div className="w-full">
                <Navbar />
            </div>

            <div className="min-h-screen bg-white flex flex-col items-center justify-center">
                <div className="bg-gray-100 shadow-md-500 border border-gray-300 rounded-lg p-6 m-14 w-full max-w-6xl flex justify-between space-x-8">
                    <div className="w-1/2">
                        <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
                        <p className="text-black-700 mb-6 text-center">
                            Welcome to FarmRuler! We &apos re a mission to build an Incredible Full-Stack Web Application for Agriculture and Farming enthusiasts.
                        </p>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-800 p-1">Name</label>
                                <input type="text" className="w-full p-2 border border-gray-400 rounded-md" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-gray-800 p-1">Email</label>
                                <input type="email" className="w-full p-2 border border-gray-400 rounded-md" placeholder="Your Email" />
                            </div>
                            <div>
                                <label className="block text-gray-800 p-1">Message</label>
                                <textarea className="w-full p-2 border border-gray-400 rounded-md" rows="4" placeholder="Your Message"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-green-700 via-green-500 to-green-600 border border-transparent text-black text-opacity-60 p-2 rounded-md transition duration-600 ease-in-out hover:border-gray-800 hover:text-black">
                                Send Message</button>

                        </form>
                    </div>

                    <div className="border-l border-gray-300 "></div>

                    <div className="w-1/2">
                        <h2 className="text-2xl font-bold mb-4 text-center">Features</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Simple and Clean UI to Display Weather Conditions</li>
                            <li>Tool connecting the agricultural community with NASA datasets</li>
                            <li>Integrate NASA datasets to support farmers decision-making</li>
                            <li>Farmers can determine resources for selected spatial and temporal ranges</li>
                            <li>Many More...</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <Footer />
            </div>
        </div >

    );
};

export default ContactPage;

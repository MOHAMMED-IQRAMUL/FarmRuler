"use client"

import { useState } from 'react';
import { SunIcon, CloudIcon, UserIcon, ChatIcon, BookOpenIcon } from '@heroicons/react/outline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Dashboard() {
    const [weather, setWeather] = useState(null);

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100 font-poppins">
            <Navbar />
            <main className="flex-grow container mx-auto p-6">
                <h1 className="text-4xl font-extrabold mb-6 text-indigo-700 text-center">Welcome to FarmRuler Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center transform hover:scale-105 transition-transform duration-300">
                        <SunIcon className="h-8 w-8 text-yellow-500 mr-4" />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">Weather Dashboard</h2>
                            <p className="text-gray-600">Check the weather conditions in specific regions.</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center transform hover:scale-105 transition-transform duration-300">
                        <CloudIcon className="h-8 w-8 text-blue-500 mr-4" />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">Season Dashboard</h2>
                            <p className="text-gray-600">Get insights on different seasons and their impact on crops.</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center transform hover:scale-105 transition-transform duration-300">
                        <UserIcon className="h-8 w-8 text-green-500 mr-4" />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">Inquire About Crops</h2>
                            <p className="text-gray-600">Ask questions and get answers about various crops.</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center transform hover:scale-105 transition-transform duration-300">
                        <ChatIcon className="h-8 w-8 text-purple-500 mr-4" />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">Personal AI Support Bot</h2>
                            <p className="text-gray-600">Get personalized support from our AI bot.</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center transform hover:scale-105 transition-transform duration-300">
                        <UserIcon className="h-8 w-8 text-red-500 mr-4" />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">User Profiles</h2>
                            <p className="text-gray-600">Manage your profile and settings.</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center transform hover:scale-105 transition-transform duration-300">
                        <ChatIcon className="h-8 w-8 text-indigo-500 mr-4" />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">Discussions</h2>
                            <p className="text-gray-600">Join discussions with other farmers and experts.</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center transform hover:scale-105 transition-transform duration-300">
                        <BookOpenIcon className="h-8 w-8 text-teal-500 mr-4" />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">Content Sharing</h2>
                            <p className="text-gray-600">Share and access valuable content.</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center transform hover:scale-105 transition-transform duration-300">
                        <BookOpenIcon className="h-8 w-8 text-orange-500 mr-4" />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">Learning and Resources</h2>
                            <p className="text-gray-600">Access learning materials and resources.</p>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}

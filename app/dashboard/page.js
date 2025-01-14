"use client";

import {
  SunIcon,
  CloudIcon,
  UserIcon,
  ChatIcon,
  BookOpenIcon,
} from "@heroicons/react/outline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import 'react-resizable/css/styles.css';
import LeftSideBar from "../components/LeftSideBar";

export default function Dashboard() {

const CardItems = [ 
    { name: "Content Sharing", url: "/ContentSharing" },
    { name: "Discussions", url: "/Discussions" },
    { name: "Inquire About Crops", url: "/InquireAboutCrops" },
    { name: "Learning And Resources", url: "/LearningAndResources" },
    { name: "Personal AI Support Bot", url: "/PersonalAiSupportBot" },
    { name: "Season Dashboard", url: "/SeasonDashboard" },
    { name: "User Profiles", url: "/UserProfiles" },
    { name: "Weather Dashboard", url: "/WeatherDashboard" }
];

const ExtraCardItems = [
    { name: "About US", url: "/aboutus" },
    { name: "Contact US", url: "/contactus" },
    { name: "FAQ", url: "/faq" },
    { name: "Privacy and Policy", url: "/privacy" },
    { name: "Terms and Services", url: "/terms" }
];

return (
    <>
        <div className="min-h-screen flex flex-col">
            <Navbar />
            
            <div className="flex min-h-screen">
                <LeftSideBar />
                <div className="right w-[70%] min-w-[56%] mt-28">
                    <main className="flex-grow container mx-auto p-4">
                        <h1 className="text-2xl font-bold mb-4 sm:text-3xl md:text-4xl sm:mb-8">
                            Welcome to FarmRuler Dashboard
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
                                <SunIcon className="h-6 w-6 text-yellow-500 mr-2" />
                                <div className="text-black">
                                    <h2 className="text-xl font-semibold">Weather Dashboard</h2>
                                    <p>Check the weather conditions in specific regions.</p>
                                </div>
                            </div>
                            <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
                                <CloudIcon className="h-6 w-6 text-blue-500 mr-2" />
                                <div className="text-black">
                                    <h2 className="text-xl font-semibold">Season Dashboard</h2>
                                    <p>
                                        Get insights on different seasons and their impact on
                                        crops.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
                                <UserIcon className="h-6 w-6 text-green-500 mr-2" />
                                <div className="text-black">
                                    <h2 className="text-xl font-semibold">
                                        Inquire About Crops
                                    </h2>
                                    <p>Ask questions and get answers about various crops.</p>
                                </div>
                            </div>
                            <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
                                <ChatIcon className="h-6 w-6 text-purple-500 mr-2" />
                                <div className="text-black">
                                    <h2 className="text-xl font-semibold">
                                        Personal AI Support Bot
                                    </h2>
                                    <p>Get personalized support from our AI bot.</p>
                                </div>
                            </div>
                            <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
                                <UserIcon className="h-6 w-6 text-red-500 mr-2" />
                                <div className="text-black">
                                    <h2 className="text-xl font-semibold">User Profiles</h2>
                                    <p>Manage your profile and settings.</p>
                                </div>
                            </div>
                            <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
                                <ChatIcon className="h-6 w-6 text-indigo-500 mr-2" />
                                <div className="text-black">
                                    <h2 className="text-xl font-semibold">Discussions</h2>
                                    <p>Join discussions with other farmers and experts.</p>
                                </div>
                            </div>
                            <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
                                <BookOpenIcon className="h-6 w-6 text-teal-500 mr-2" />
                                <div className="text-black">
                                    <h2 className="text-xl font-semibold">Content Sharing</h2>
                                    <p>Share and access valuable content.</p>
                                </div>
                            </div>
                            <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
                                <BookOpenIcon className="h-6 w-6 text-orange-500 mr-2" />
                                <div className="text-black">
                                    <h2 className="text-xl font-semibold">
                                        Learning and Resources
                                    </h2>
                                    <p>Access learning materials and resources.</p>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                 
            </div>
            <Footer />
        </div>
    </>
);
}

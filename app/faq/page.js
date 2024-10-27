"use client";
import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid'; 

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';

const faqData = [
  {
    heading: "Feature 1: Weather Conditions and AI Bots",
    value: "A simple and clean UI to display weather conditions in specific regions. Create personalized AI bots.",
  },
  {
    heading: "Feature 2: Connecting Agricultural Community with NASA",
    value: "Design a tool that connects the agricultural community with NASA’s satellite datasets, increasing access to environmental data.",
  },
  {
    heading: "Feature 3: Improved Prediction and Risk Management",
    value: "Create solutions that support farmers by integrating NASA datasets for better prediction and decision-making.",
  },
  {
    heading: "Feature 4: Resource Characteristics",
    value: "Help farmers determine the characteristics of resources for selected ranges based on farm type, location, and size.",
  },
  {
    heading: "Many More...",
    value: "Explore more features and contribute to help us build a comprehensive tool for the agricultural community.",
  },
];

const FAQ = ({ heading, value }) => (
  <Disclosure>
    {({ open }) => (
      <>
        <Disclosure.Button className="flex justify-between items-center w-full px-4 py-2 bg-gray-50 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-green-600">
          <h2 className="text-lg font-semibold text-green-600">{heading}</h2>
          <ChevronUpIcon
            className={`w-5 h-5 text-green-600 transform ${open ? 'rotate-180' : ''}`}
          />
        </Disclosure.Button>
        <Disclosure.Panel className="p-4 text-gray-700">
          {value}
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqData = faqData.filter(item =>
    item.heading.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-32 bg-gray-100 p-6 flex flex-col">
      <Navbar />
      <div className="flex-grow max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 text-gray-700 mb-10">
        <PageTitle title="FarmRuler FAQ" />
        <p className="text-lg mb-4">
          Welcome to FarmRuler! We&#39;re building a web app for agriculture enthusiasts.
          This project integrates AI and NASA datasets to help farmers.
        </p>

        <p className="text-lg mb-8">
          🚀 Contribute to the project by exploring the code and adding new features!
        </p>

        <input
          type="text"
          placeholder="Search FAQs..."
          className="mb-4 w-full px-4 py-2 border rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="space-y-4">
          {filteredFaqData.map((item) => (
            <FAQ key={item.heading} heading={item.heading} value={item.value} />
          ))}
          {filteredFaqData.length === 0 && (
            <p className="text-gray-500">No FAQs found.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;

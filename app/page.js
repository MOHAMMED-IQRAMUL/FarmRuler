"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <header className="bg-green-500 text-white text-center py-10">
        <h1 className="text-4xl font-bold">Welcome to FarmRuler</h1>
        <p className="mt-4 text-lg">Your ultimate farm management tool</p>
        <button className="mt-6 px-6 py-2 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-gray-100">
          Get Started
        </button>
      </header>
      <section id="features" className="py-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold">Features</h2>
        <ul className="mt-6 space-y-4">
          <li className="text-lg">Track your crops</li>
          <li className="text-lg">Manage your livestock</li>
          <li className="text-lg">Analyze farm performance</li>
        </ul>
      </section>
      <section id="vision" className="py-10 bg-white text-center">
        <h2 className="text-3xl font-semibold">Our Vision</h2>
        <p className="mt-4 text-lg">
          To revolutionize farm management with cutting-edge technology.
        </p>
      </section>
      <section id="mission" className="py-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold">Our Mission</h2>
        <p className="mt-4 text-lg">
          To provide farmers with the tools they need to succeed and thrive.
        </p>
      </section>
      <section className="bg-green-500 text-white text-center py-6 mt-auto">
        <button className="mx-2 px-6 py-2 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-gray-100">
          Sign Up
        </button>
        <button className="mx-2 px-6 py-2 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-gray-100">
          Sign In
        </button>
      </section>

      <Footer/>
    </div>
  );
}
"use client";

import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="bg-green-500 text-white text-center py-10 dark:bg-green-700 border-t-4 border-gray-300 rounded-lg">
        <h1 className="text-4xl font-bold">Welcome to FarmRuler</h1>
        <p className="mt-4 text-lg">Your ultimate farm management tool</p>
        <button className="mt-6 px-6 py-2 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-gray-100">
          Get Started
        </button>
      </header>

      <section
        id="features"
        className="py-10 text-center border-t-4 border-gray-300 rounded-lg"
      >
        <h2 className="text-3xl font-semibold">Features</h2>
        <ul className="mt-6 space-y-4">
          <li className="text-lg">Track your crops</li>
          <li className="text-lg">Manage your livestock</li>
          <li className="text-lg">Analyze farm performance</li>
        </ul>
      </section>

      <section
        id="vision"
        className="py-10 text-center border-t-4 border-gray-300 rounded-lg"
      >
        <h2 className="text-3xl font-semibold text-gray-500">Our Vision</h2>
        <p className="mt-4 text-lg text-gray-400">
          To revolutionize farm management with cutting-edge technology.
        </p>
      </section>

      <section
        id="mission"
        className="py-10 text-center border-t-4 border-gray-300 rounded-lg"
      >
        <h2 className="text-3xl font-semibold text-gray-500">Our Mission</h2>
        <p className="mt-4 text-lg text-gray-400">
          To provide farmers with the tools they need to succeed and thrive.
        </p>
      </section>

      <section className="bg-green-500 text-center py-6 mt-auto border-t-4 border-gray-300 rounded-lg">
        <Link className="mx-2 px-6 py-2 font-semibold rounded-lg shadow-md hover:bg-gray-100" href='/sign-up'>
          Sign Up
        </Link>
        <Link className="mx-2 px-6 py-2 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-gray-100" href='/sign-in'>
          Sign In
        </Link>
      </section>

      <Footer />
    </div>
  );
}

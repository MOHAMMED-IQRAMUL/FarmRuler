"use client";

import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white bg-white dark:bg-gray-800">
      <Navbar />

      <div className="absolute inset-0 -z-10 h-full w-full bg-gray-800 bg-[linear-gradient(to_right,#3f3f3f_1px,transparent_1px),linear-gradient(to_bottom,#3f3f3f_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#4caf50,transparent)]"></div>
      </div>

      <header className="text-center py-10 mt-[200px]">
        <h1 className="text-6xl lg:text-8xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-600">
          Welcome to FarmRuler
        </h1>
        <p className="mt-4 text-lg">
          Your ultimate farm management tool for modern farmers.
        </p>
        <p className="mt-2 text-gray-400 max-w-md mx-auto">
          FarmRuler offers an intuitive platform that simplifies farm
          management. Track crops, monitor livestock, analyze performance, and
          gain insights to make smarter, data-driven decisions for your farm.
        </p>
        <button className="mt-6 px-6 py-2 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition duration-200">
          Get Started
        </button>
      </header>

      <section
        id="features"
        className="p-10 border-t-2 border-gray-700 rounded-lg"
      >
        <h2 className="text-6xl font-semibold mb-6 text-green-400">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          <div className="bg-gray-800 p-6 shadow-md md:border-r-[1px] md:border-green-400">
            <h3 className="text-lg font-bold">Track Your Crops</h3>
            <p className="mt-2 text-gray-400">
              Monitor crop health, growth stages, and harvest cycles to optimize
              yield. Get alerts on when to irrigate or apply fertilizers for
              better productivity.
            </p>
          </div>
          <div className="bg-gray-800 p-6 shadow-md md:border-r-[1px] md:border-green-400">
            <h3 className="text-lg font-bold ">Manage Your Livestock</h3>
            <p className="mt-2 text-gray-400">
              Keep detailed records of livestock health, feeding schedules, and
              productivity. Receive notifications for vaccinations and health
              checks to ensure the well-being of your animals.
            </p>
          </div>
          <div className="bg-gray-800 p-6 shadow-md md:border-r-[1px] md:border-green-400">
            <h3 className="text-lg font-bold">Analyze Farm Performance</h3>
            <p className="mt-2 text-gray-400">
              Utilize farm analytics to increase productivity and profitability.
              Gain insights into crop rotation, soil health, and market trends
              to make informed decisions.
            </p>
          </div>
          <div className="bg-gray-800 p-6 shadow-md ">
            <h3 className="text-lg font-bold">Weather Forecasts</h3>
            <p className="mt-2 text-gray-400">
              Access localized weather data to plan farming activities
              efficiently. Stay informed about weather changes and get advice on
              the best times for planting and harvesting.
            </p>
          </div>
        </div>
      </section>

      <section
        id="vision"
        className="p-10 border-t-2 border-gray-700 rounded-lg"
      >
        <h2 className="text-6xl font-semibold text-green-400">Our Vision</h2>
        <p className="mt-6 text-lg text-gray-400">
          At FarmRuler, we envision a future where technology and agriculture go
          hand in hand. Our goal is to revolutionize farm management through
          cutting-edge technology, empowering farmers with the tools and data
          they need to thrive in the modern agricultural landscape. We believe
          that by providing innovative solutions, we can enhance productivity,
          promote sustainability, and improve the overall quality of life for
          farmers worldwide.
          <br />
          <br />
          We aim to build a community of forward-thinking farmers who leverage
          data-driven insights to make informed decisions. Our vision extends
          beyond mere profit; we are committed to fostering a culture of
          responsible farming that respects the environment and future
          generations. Join us in creating a sustainable future for agriculture,
          where every farmer can access the resources they need to succeed.
        </p>
      </section>

      <section
        id="mission"
        className="p-10 text-left border-t-2 border-gray-700 rounded-lg"
      >
        <h2 className="text-5xl font-semibold text-green-400">Our Mission</h2>
        <p className="mt-4 text-lg text-gray-400">
          At FarmRuler, our mission is to simplify farm operations and support
          sustainable farming practices by delivering a comprehensive and
          easy-to-use management tool. We’re dedicated to providing accurate
          insights and reliable support to help farmers succeed.
          <br />
          <br />
          Our aim is to equip farmers with the best resources available,
          ensuring they can make informed decisions to maximize their
          productivity and efficiency. We strive to create an intuitive platform
          that not only meets the current needs of farmers but also anticipates
          future challenges in the agricultural landscape.
          <br />
          <br />
          By fostering a culture of innovation and collaboration, we envision a
          farming community where everyone has access to the tools they need for
          success, contributing to a healthier planet and thriving agricultural
          economy.
        </p>
      </section>

      <section className="bg-green-600 text-center py-10 mt-auto rounded-lg">
        <h2 className="text-5xl font-semibold text-white mb-4">
          Join the FarmRuler Community!
        </h2>
        <p className="text-lg text-white mb-6 w-[80%] md:text-center mx-auto">
          Sign up today to start managing your farm more efficiently. With
          FarmRuler, you can track your crops, manage livestock, and access
          invaluable insights to boost your productivity. Don’t miss out on the
          opportunity to elevate your farming practices!
        </p>
        <Link
          className="mx-2 px-8 py-3 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-gray-800 hover:text-white transition duration-200"
          href="/sign-up"
        >
          Sign Up
        </Link>
        <Link
          className="mx-2 px-8 py-3 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-gray-800 hover:text-white transition duration-200"
          href="/sign-in"
        >
          Log In
        </Link>
      </section>

      <Footer />
    </div>
  );
}

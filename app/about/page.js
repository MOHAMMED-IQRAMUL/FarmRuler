"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-100 via-yellow-50 to-white">
      <Navbar />

      <main className="flex flex-1 flex-col items-center justify-start px-4 py-12">
        {/* Hero Section */}
        <section className="w-full text-center max-w-5xl mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800">
            About <span className="text-green-600">FarmRuler</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Empowering agriculture with{" "}
            <span className="font-semibold text-green-700">AI</span>, technology,
            and innovation — building tools for a smarter, more sustainable
            farming future.
          </p>
        </section>

        {/* Mission Section */}
        <section className="w-full max-w-4xl bg-white/90 shadow-xl rounded-xl border border-gray-200 p-10 md:p-14 mb-14">
          <PageTitle title="Our Mission" />
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-green-700">FarmRuler</span>,
            our mission is to{" "}
            <span className="italic">Ease The Agricultural Activities</span> by
            integrating AI and modern technologies into farming. We aim to
            provide innovative tools and a collaborative platform where farmers,
            developers, and designers come together to make agriculture smarter
            and more impactful.
          </p>
        </section>

        {/* Project Overview */}
        <section className="w-full max-w-5xl mb-14">
          <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-2">
            🚀 Project Overview
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            <span className="font-semibold text-green-600">FarmRuler</span> is
            designed as a collaborative, full-stack web application for
            individuals passionate about farming and agriculture. Whether you’re
            here to contribute code, design, or just explore, there’s a place
            for you in our community.
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "☀️",
                title: "Weather Insights",
                desc: "Clean UI to display weather conditions and forecasts for farmers.",
              },
              {
                icon: "🛰️",
                title: "NASA Data Integration",
                desc: "Connects farmers with satellite & geospatial datasets for better insights.",
              },
              {
                icon: "🤖",
                title: "AI Farming Assistants",
                desc: "Personalized AI bots to support farmers in day-to-day decisions.",
              },
              {
                icon: "🌍",
                title: "Sustainability",
                desc: "Encouraging eco-friendly, data-driven agricultural practices.",
              },
              {
                icon: "📊",
                title: "Smart Analytics",
                desc: "Resource analysis tools for farm size, locale, type, and timeframes.",
              },
              {
                icon: "💡",
                title: "Innovation Hub",
                desc: "A place for developers, designers, and farmers to collaborate.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="p-6 bg-white shadow-lg rounded-xl border hover:shadow-2xl transition"
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-10 mb-20">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            🌱 Join Our Community
          </h2>
          <p className="text-gray-700 mb-6">
            Contribute your skills, ideas, and passion to help shape the future
            of agriculture with technology.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/<farmruler-repo>"
              className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700"
            >
              Contribute on GitHub
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-gray-100 text-green-700 border border-green-600 rounded-xl hover:bg-green-50"
            >
              Join Community
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;

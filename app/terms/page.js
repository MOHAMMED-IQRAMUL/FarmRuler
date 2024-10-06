"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

 

const TermsPage = () => {
    return (
			<div className="flex flex-col min-h-screen">
				<Navbar />
				<main className="flex-grow mx-auto w-[80vw] hover:shadow-lg hover:shadow-slate-900 border-[2px] border-slate-500 rounded-md mt-12 mb-12 px-12 py-8">
					<h1 className="text-5xl font-bold mb-4 text-center">Terms and Services:-</h1>
					<p className="mb-4 font-normal text-[1rem] text-slate-800 leading-5 ml-4 text-center mx-auto">
						Welcome to FarmRuler! We re on a mission to build an Incredible
						Full-Stack Web Application Specially For Person With Interest in
						Agriculture and Farming. This repository is a collaborative effort
						where we invite developers, designers, and enthusiasts to contribute
						and help bring this project to life.
					</p>
					<h2 className="text-4xl mt-12 font-semibold mb-2">
						🚀 Project Overview:
					</h2>
					<p className="mb-4 font-normal text-[1rem] text-slate-800 leading-5 ml-4 mt-4">
						FarmRuler aims to Ease The Agricultural Activities. Our focus is on
						Integrating AI and Tech In Agricultural World and Ease the
						Procedure. Whether you re here to contribute code, design, or just
						explore, there s a place for you!
					</p>
					<h2 className="text-4xl font-semibold mt-6 mb-2">Features:</h2>
					<ul className="list-disc list-inside mb-4 ml-4">
						<li className="mb-2">
							<strong className="text-xl">Feature 1:</strong>{" "}
							<span>
								A Simple and Clean UI to Display Weather Conditions In Specific
								Regions. Create Personalized AI bots.
							</span>
						</li>
						<li className="mb-2">
							<strong className="text-xl">Feature 2:</strong>{" "}
							<span>
								Challenge is to design a tool that connects the agricultural
								community with NASA’s satellite and geospatial datasets in ways
								that increase data access, integration, environmental topic of
								concern to farmers.
							</span>
						</li>
						<li className="mb-2">
							<strong className="text-xl">Feature 3:</strong>{" "}
							<p>
								By integrating NASA datasets and data analyses in your tool’s
								design, you can create new solutions and prototypes that support
								farmers by providing improved prediction capacity, risk
								management, and/or decision-making processes.
							</p>
						</li>
						<li className="mb-2">
							<strong className="text-xl">Feature 4:</strong>{" "}
							<span>
								Farmers will likely want to determine the characteristics of
								Resources for selected spatial and temporal ranges. They will
								want to understand how the information relates to their specific
								situation (e.g., locale, size, and type of farm, etc.).
							</span>
						</li>
						<li className="mb-2 font-bold">Many Moreee..</li>
					</ul>
				</main>
				<Footer />
			</div>
		);
};

export default TermsPage;
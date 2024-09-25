import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-2xl font-bold">FarmRuler</h1>
                        <p className="text-sm">© 2023 FarmRuler. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-2xl hover:text-gray-400" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-2xl hover:text-gray-400" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-2xl hover:text-gray-400" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-2xl hover:text-gray-400" />
                        </a>
                    </div>
                </div>
                <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-4">
                        <a href="/about" className="hover:text-gray-400">About Us</a>
                        <a href="/contact" className="hover:text-gray-400">Contact</a>
                        <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
                        <a href="/terms" className="hover:text-gray-400">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#031b14] via-[#0f5a4f] to-[#031b14] text-white py-16 px-6 md:px-16">

      
      <div className="max-w-6xl mx-auto text-center">

       
        <h2 className="text-3xl md:text-5xl font-bold leading-snug mb-10">
          Your small contribution can bring big changes to society.
        </h2>

        
        <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-10 py-4 rounded-2xl shadow-lg transition duration-300 inline-flex items-center gap-3">
          Contribute Now
          <span className="text-xl">→</span>
        </button>

       
        <div className="w-full h-[1px] bg-white/30 my-14 relative">
          <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>

       
        <div className="flex justify-center items-center gap-8 text-3xl mb-12">

          <a
            href="/"
            className="hover:text-yellow-300 transition duration-300"
          >
            <FaFacebookF />
          </a>

          <a
            href="/"
            className="hover:text-yellow-300 transition duration-300"
          >
            <FaTwitter />
          </a>

          <a
            href="/"
            className="hover:text-yellow-300 transition duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="/"
            className="hover:text-yellow-300 transition duration-300"
          >
            <FaYoutube />
          </a>

          <a
            href="/"
            className="hover:text-yellow-300 transition duration-300"
          >
            <FaLinkedinIn />
          </a>

        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-14 text-lg font-semibold">

          <a
            href="/"
            className="hover:text-yellow-300 transition duration-300"
          >
            Contact Us
          </a>

          <a
            href="/"
            className="hover:text-yellow-300 transition duration-300"
          >
            FAQs
          </a>

          <a
            href="/"
            className="hover:text-yellow-300 transition duration-300"
          >
            Our Roles
          </a>

          <a
            href="/"
            className="hover:text-yellow-300 transition duration-300"
          >
            Our Program
          </a>

          <a
            href="/"
            className="hover:text-yellow-300 transition duration-300"
          >
            Support
          </a>

        </div>

      </div>
    </footer>
  );
}
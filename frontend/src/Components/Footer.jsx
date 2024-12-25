import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import assets from "../assets/cov.jpeg";
import { Link } from "react-router-dom"; // Import Link for navigation

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-10 w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img src={assets} alt="Logo" className="w-[250px] h-[64px] mb-4" />
          <p className="text-gray-300 text-center md:text-left">
            Building pathways to global opportunities through exceptional learning experiences.
          </p>
        </div>

        {/* Address Section */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4 text-red-600">ADDRESS</h2>
          <ul className="space-y-3">
            <li className="flex items-center justify-center md:justify-start">
              <MdLocationOn size={20} className="mr-2" />
              <span>
                A-1 First Floor, Sameera Plaza Building, Lalbagh, Lucknow-226001
              </span>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <MdPhone size={20} className="mr-2" />
              <span>+91 9335920991</span>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <MdEmail size={20} className="mr-2" />
              <span>irwinamitdas@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Courses Section */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4 text-red-600">COURSES</h2>
          <ul className="space-y-3">
            <li>
              <Link to="/hindi" className="hover:text-gray-300">Hindi</Link>
            </li>
            <li>
              <Link to="/urdu" className="hover:text-gray-300">Urdu</Link>
            </li>
            <li>
              <Link to="/ielts" className="hover:text-gray-300">IELTS</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; 2024 DhiWise PVT. LTD. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com/profile.php?id=100076156932259&mibextid=ZbWKwL" className="text-gray-400 hover:text-gray-100">
              <FaFacebook size={20} />
            </a>
            <a href="https://www.instagram.com/covenanteducation?igsh=MnB1c2NlODgwbWg2" className="text-gray-400 hover:text-gray-100">
              <FaInstagram size={20} />
            </a>
            <a href="https://youtube.com/@covenanteducation3561?si=3AAWkc3HlVw8yKlc" className="text-gray-400 hover:text-gray-100">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

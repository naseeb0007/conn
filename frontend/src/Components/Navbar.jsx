import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io"; // Arrow icon
import assets from "../assets/covv.png";
import { FaInstagram, FaFacebook, FaYoutube, FaBook, FaGlobe } from "react-icons/fa";

function Navbar() {
  const [show, setShow] = useState(false); // For toggling mobile menu
  const [aboutOpen, setAboutOpen] = useState(false); // State for toggling dropdown menu on mobile
  const [courseOpen, setCourseOpen] = useState(false);
  const [orgnaisationOpen, setOrgnaisationOpen] = useState(false);
  const [internationalOpen, setInternationalOpen] = useState(false);
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setShow(!show);
  };

  return (
    <nav className="shadow-[0_10px_30px_rgba(0,0,0,0.3)] py-4 bg-slate-800 text-white w-full z-50 w-full ">
      {/* Upper Navbar: Contact, Email, and Social Icons */}
<div className="text-black hidden md:block">
  <div className="container mx-auto flex justify-between items-center">
    {/* Contact and Email */}
    <div className="flex items-center ml-auto space-x-4">
      <span className="text-white flex items-center space-x-1 hover:rounded-lg hover:px-2 hover:py-1 transition-all duration-300 ease-in-out">
        +91 9335920991
      </span>
      <span className="text-white flex items-center space-x-1 hover:rounded-lg hover:px-2 hover:py-1 transition-all duration-300 ease-in-out">
        irwinamitdas@gmail.com
      </span>
    </div>

    {/* Social Media Icons */}
    <div className="flex items-center space-x-4 ml-4">
      {/* YouTube */}
      <a
        href="https://youtube.com/@covenanteducation3561?si=3AAWkc3HlVw8yKlc"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:text-red-400 transition-all duration-300 ease-in-out"
      >
        <FaYoutube className="text-2xl" />
      </a>
      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=100076156932259&mibextid=ZbWKwL"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-400 transition-all duration-300 ease-in-out"
      >
        <FaFacebook className="text-2xl" />
      </a>
      {/* Instagram */}
      <a
        href="https://www.instagram.com/covenanteducation?igsh=MnB1c2NlODgwbWg2"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-300 transition-all duration-300 ease-in-out"
      >
        <FaInstagram className="text-2xl" />
      </a>
    </div>
  </div>
</div>

      {/* Main Navbar (Logo and Menu) */}
      <div className="flex items-center justify-between container mx-auto mt-2">
      <a href="/">
  <div className="flex w-full justify-start sm:justify-center items-center">
    <img src={assets} alt="Logo" className="w-[250px] h-[64px]" />
  </div>
</a>

        {/* Mobile Menu Toggle Icon */}
        <div className="md:hidden" onClick={toggleMobileMenu}>
          {show ? (
            <IoCloseSharp size={30} className="text-white font-bold text-3xl" />
          ) : (
            <span className="text-white font-bold text-3xl">☰</span>
          )}
        </div>

        {/* Desktop Navbar - All options visible */}
        <div className="hidden md:flex space-x-12 text-black">
          <div className="relative group"> {/* group added for hover */}
            <Link
              to="/#"
              className=" text-white flex  items-center space-x-2  hover:rounded-lg hover:px-2 hover:py-1 transition-all duration-300 ease-in-out"
            >
              ABOUT-US
              <IoIosArrowDown className="ml-2" />
            </Link>
            {/* Dropdown Menu for About-US */}
            <div className=" absolute left-0 mt-2 bg-slate-800 shadow-lg rounded-lg p-4 z-10 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 ease-in-out">
              <Link
                to="/achievment"
                className=" py-2 text-white flex  items-center space-x-2  hover:rounded-lg transition-all duration-300 ease-in-out"
              >
                Achievements
              </Link>
              <Link
                to="/director"
                className=" py-2 text-white flex  items-center space-x-2  hover:rounded-lg  transition-all duration-300 ease-in-out"
              >
                Our Director
              </Link>
              
            </div>
          </div>









         <div className="relative group"> {/* group added for hover */}
            <Link
              to="/#"
              className="text-white flex items-center space-x-2  hover:rounded-lg hover:px-2 hover:py-1 transition-all duration-300 ease-in-out"
            >
              COURSES
              <IoIosArrowDown className="ml-2" />
            </Link>
            {/* Dropdown Menu for About-US */}
            <div className="absolute left-0 mt-2 bg-slate-800 shadow-lg rounded-lg p-4 z-10 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 ease-in-out">
              <Link
                to="/hindi"
                className="py-2 text-white flex  items-center space-x-2  hover:rounded-lg  transition-all duration-300 ease-in-out"
              >
                Hindi
              </Link>
              <Link
                to="/urdu"
                className="py-2 text-white flex  items-center space-x-2  hover:rounded-lg  transition-all duration-300 ease-in-out"
              >
                Urdu
              </Link>
              <Link
                to="/ielts"
                className="py-2 text-white flex  items-center space-x-2  hover:rounded-lg  transition-all duration-300 ease-in-out"
              >
                IELTS
              </Link>
             
            </div>
          </div>
















          <div className="relative group"> {/* group added for hover */}
            <Link
              to="/#"
              className="text-white flex items-center space-x-2 hover:rounded-lg hover:px-2 hover:py-1 transition-all duration-300 ease-in-out"
            >
              FOR ORGNAISATIONS
              <IoIosArrowDown className="ml-2" />
            </Link>
            {/* Dropdown Menu for About-US */}
            <div className="absolute left-0 mt-2 bg-slate-800 shadow-lg rounded-lg p-4 z-10 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 ease-in-out">
              
              <Link
                to="/translation"
                className="py-2 text-white flex  items-center space-x-2  hover:rounded-lg  transition-all duration-300 ease-in-out"
              >
                Translation System
              </Link>
             
            </div>
          </div>
















          <div className="relative group"> {/* group added for hover */}
            <Link
              to="/#"
              className="text-white flex  items-center space-x-2  hover:rounded-lg hover:px-2 hover:py-1 transition-all duration-300 ease-in-out"
            >
              INTERNATIONAL STUDENTS
              <IoIosArrowDown className="ml-2" />
            </Link>
            {/* Dropdown Menu for About-US */}
            <div className="absolute left-0 mt-2 bg-slate-800 shadow-lg rounded-lg p-4 z-10 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 ease-in-out">
              
              <Link
                to="/student"
                className="py-2 text-white flex  items-center space-x-2  hover:rounded-lg  transition-all duration-300 ease-in-out"
              >
                International Student Service
              </Link>
              
            </div>
          </div>
















          <Link
            to="/contact"
            className="text-white flex  items-center space-x-1  hover:rounded-lg hover:px-2 hover:py-1 transition-all duration-300 ease-in-out"
          >
            CONTACT
          </Link>
        </div>
      </div>


















      {/* Mobile Navbar Drawer menu */}
      {show && (
        <div
          className="fixed z-50 top-10 right-0 bg-white text-black w-3/4 sm:w-1/2 max-h-[80%] transform transition-all duration-300 ease-in-out rounded-sm"
          style={{
            transform: show ? "translateX(0)" : "translateX(100%)",
            marginTop: "50px", 
            height: "auto", 
            bottom: "auto", 
            left: "auto",
            right: "0", 
            boxShadow: "none", 
            padding: "20px", 
          }}
        >
          <ul className="flex flex-col items-start justify-start space-y-6 text-xl py-6">
            <li className="w-full">
              <Link
                to="/#"
                onClick={() => setAboutOpen(!aboutOpen)} // Toggle sub-options
                className="flex items-center justify-between py-2 px-4 w-full hover:text-red-600 hover:underline transition-all duration-300 ease-in-out"
              >
                ABOUT-US
                <IoIosArrowDown
                  className={`transition-transform duration-300 ease-in-out ${
                    aboutOpen ? "transform rotate-180" : ""
                  }`}
                />
              </Link>

              {/* Dropdown Menu for About-US on Mobile */}
              {aboutOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="/achievment"
                    className="block text-black-400 font-semibold py-2 px-4 hover:bg-gray-200 hover:text-red-500"
                  >
                    Achievements
                  </Link>
                  <Link
                    to="/director"
                    className="block text-black-400 font-semibold py-2 px-4 hover:bg-gray-200 hover:text-red-500"
                  >
                    Our Director
                  </Link>
                  
                </div>
              )}
            </li>

            {/* Other Links */}
             <li className="w-full">
              <Link
                to="/#"
                onClick={() => setCourseOpen(!courseOpen)} // Toggle sub-options
                className="flex items-center justify-between py-2 px-4 w-full hover:text-red-600 hover:underline transition-all duration-300 ease-in-out"
              >
                COURSES
                <IoIosArrowDown
                  className={`transition-transform duration-300 ease-in-out ${
                    courseOpen ? "transform rotate-180" : ""
                  }`}
                />
              </Link>

              {/* Dropdown Menu for About-US on Mobile */}
              {courseOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="/hindi"
                    className="block text-black-400 font-semibold py-2 px-4 hover:bg-gray-200 hover:text-red-500"
                  >
                    Hindi
                  </Link>
                  <Link
                    to="/urdu"
                    className="block text-black-400 font-semibold py-2 px-4 hover:bg-gray-200 hover:text-red-500"
                  >
                    Urdu
                  </Link>
                  <Link
                    to="/ielts"
                    className="block text-black-400 font-semibold py-2 px-4 hover:bg-gray-200 hover:text-red-500"
                  >
                    IELTS
                  </Link>
                  
                </div>
              )}
            </li>

            <li className="w-full">
              <Link
                to="/#"
                onClick={() => setOrgnaisationOpen(!orgnaisationOpen)} // Toggle sub-options
                className="flex items-center justify-between py-2 px-4 w-full hover:text-red-600 hover:underline transition-all duration-300 ease-in-out"
              >
                FOR ORGNAISATIONS
                <IoIosArrowDown
                  className={`transition-transform duration-300 ease-in-out ${
                    orgnaisationOpen ? "transform rotate-180" : ""
                  }`}
                />
              </Link>

              {/* Dropdown Menu for About-US on Mobile */}
              {orgnaisationOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  
                  <Link
                    to="/translation"
                    className="block text-black-400 font-semibold py-2 px-4 hover:bg-gray-200 hover:text-red-500"
                  >
                    Translation
                  </Link>
                  
                </div>
              )}
            </li>

            <li className="w-full">
              <Link
                to="/#"
                onClick={() => setInternationalOpen(!internationalOpen)} // Toggle sub-options
                className="flex items-center justify-between py-2 px-4 w-full hover:text-red-600 hover:underline transition-all duration-300 ease-in-out"
              >
                INTERNATIONAL STUDENT
                <IoIosArrowDown
                  className={`transition-transform duration-300 ease-in-out ${
                    internationalOpen ? "transform rotate-180" : ""
                  }`}
                />
              </Link>

              {/* Dropdown Menu for About-US on Mobile */}
              {internationalOpen && (
                <div className="ml-4 mt-2 space-y-2">
                 
                  <Link
                    to="/student"
                    className="block text-black-400 font-semibold py-2 px-4 hover:bg-gray-200 hover:text-red-500"
                  >
                    International Student System
                  </Link>
                 
                </div>
              )}
            </li>


            <li>
              <Link
                to="/contact"
                onClick={toggleMobileMenu}
                className="py-2 px-4 hover:text-red-600 hover:underline transition-all duration-300 ease-in-out"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

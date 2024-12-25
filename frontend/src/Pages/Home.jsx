import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaGlobe, FaBuilding } from "react-icons/fa";
import Student1 from "../assets/cr1.jpeg";
import Student2 from "../assets/st1.jpeg";
import Student3 from "../assets/student3.jpeg";
import Studentdown from "../assets/Bannerdown.jpeg";
import { FaClock, FaCertificate, FaLanguage } from 'react-icons/fa';
import studentsit from "../assets/sg.jpeg";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa"; 
import { Link } from 'react-router-dom'; 
import Banner1 from "../assets/bn.jpeg";

import Banner2 from "../assets/bn1.jpeg";


const Home = () => {
  const [currentBanner, setCurrentBanner] = useState(0); // State for managing current banner

  // Static values for student counseled, courses, and universities
  const targetStudentCounseled = 1200;
  const targetCourses = 100;
  const targetUniversities = 50;

  // States to store the animated values
  const [studentCounseled, setStudentCounseled] = useState(0);
  const [courses, setCourses] = useState(0);
  const [universities, setUniversities] = useState(0);



  // Sample student data with photo and text
const studentData = [
  {
    name: "Nitin Samuel",
    photo: Student1, // Replace with actual path
    text: "Covananteducation helped me excel in IELTS, their approach is practical and engaging.",
  },
  {
    name: "Akansha Esther",
    photo: Student2, // Replace with actual path
    text: "Learning Hindi at Covananteducation gave me confidence to speak fluently in daily life.",
  },
  {
    name: "INDERPREET SINGH",
    photo:Student3, // Replace with actual path
    text: "The coaching here is personalized, and the results speak for themselves in both Hindi and IELTS.",
  },
];



  // Array of banners with their respective images, titles, descriptions, and buttons
  const banners = [
    {
      image: Banner1,
      title: "",
      subtitle: "",
      description: "Discover courses & universities abroad and connect with students studying there!",
      buttonText: "Explore Now",
      link: "/hindi" // Link for the button
    },
    {
      image: Banner2,
      title: "Achieve Your Dream Score with",
      subtitle: "IELTS Preparation",
      description: "Get expert guidance and practice material for your IELTS exam preparation!",
      buttonText: "Get Started",
      link: "/ielts" // Link for the button
    },
    
  ];
  // Function to handle the next banner
const nextBanner = () => {
  setCurrentBanner((prev) => (prev + 1) % banners.length);
};

// Function to handle the previous banner
const prevBanner = () => {
  setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
};

// Function to animate the numbers
const animateNumbers = () => {
  let studentCounter = 0;
  let coursesCounter = 0;
  let universitiesCounter = 0;

  const interval = setInterval(() => {
    if (studentCounter < targetStudentCounseled) {
      studentCounter += 1;
      setStudentCounseled(studentCounter);
    }
    if (coursesCounter < targetCourses) {
      coursesCounter += 1;
      setCourses(coursesCounter);
    }
    if (universitiesCounter < targetUniversities) {
      universitiesCounter += 1;
      setUniversities(universitiesCounter);
    }

    if (studentCounter >= targetStudentCounseled && coursesCounter >= targetCourses && universitiesCounter >= targetUniversities) {
      clearInterval(interval);
    }
  }, 50);
};





const [currentIndex, setCurrentIndex] = useState(0);


useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % studentData.length);
  }, 5000); // Move every 5 seconds

  return () => clearInterval(interval); // Clean up the interval
}, []); // Empty dependency array to run only once on component mount

// useEffect to trigger animation once on page load and banner rotation
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  }, 4000);

  // Call your animation function here
  animateNumbers();

  return () => clearInterval(interval); // Clean up the interval
}, []); // Empty dependency array to run only once on component mount


  return (
    <div className="outer-container">
      <div className="relative overflow-hidden">
  {/* Banner Container */}
  
<div className="banner-container">
  {currentBanner === 0 && (
    <div className="relative">
      <div
        className="w-full h-34 sm:h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${banners[0].image})` }}
      >
        {/* Banner image for small screens */}
      </div>
      <div className="absolute w-full px-4 sm:px-20 bottom-10 sm:bottom-20 text-center md:text-right text-white sm:mt-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{banners[0].title}</h1>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 text-red-600">{banners[0].subtitle}</h1>
        <p className="text-sm sm:text-base md:text-lg mt-4"></p>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-4 space-y-4 sm:space-y-0 sm:space-x-8">
          </div>
        <div className="mt-6">
          <Link to={banners[0].link}>
            
          </Link>
        </div>
      </div>
    </div>
  )}
</div>

{/* Banner 2 */}
<div className="banner-container">
  {currentBanner === 1 && (
    <div className="relative">
      <div
        className="w-full h-64 sm:h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${banners[1].image})` }}
      >
        {/* Banner image for small screens */}
      </div>
      <div className="absolute w-full px-4 sm:px-20 bottom-10 sm:bottom-20 text-center md:text-right text-white sm:mt-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold"></h1>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 text-red-600"></h1>
        <p className="text-sm sm:text-base md:text-lg mt-4"></p>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-4 space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm"></h1>
          </div>
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm"></h1>
          </div>
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm"></h1>
          </div>
        </div>
        <div className="mt-6">
          <Link to={banners[0].link}>
           
          </Link>
        </div>
      </div>
    </div>
  )}
</div>








  {/* Navigation Arrows */}
  <div className="arrow-buttons">
    <button
      onClick={prevBanner}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2"
    >
      <FaArrowLeft size={20} />
    </button>
    <button
      onClick={nextBanner}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2"
    >
      <FaArrowRight size={20} />
    </button>
  </div>
</div>








<div className="mt-0 p-4 bg-gray-100 flex flex-col items-center justify-center">
 

  <div className="relative w-full max-w-lg overflow-hidden">
    <div
      className="flex transition-transform duration-1000 ease-in-out transform"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {studentData.map((student, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-gray-300 text-base p-6 shadow-lg rounded-lg mx-auto"
          style={{ minWidth: '100%' }}
        >
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 mb-4">
            <img
              src={student.photo}
              alt={student.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center">
            <p className="text-lg font-semibold text-gray-700 mb-2">"{student.text}"</p>

            <p className="mt-2 text-blue-600 font-medium">- {student.name}</p>

            <div className="mt-3 flex justify-center items-center">
              {Array(5)
                .fill()
                .map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="none"
                  >
                    <path d="M12 .587l3.668 7.568L24 9.423l-6 5.863L19.336 24 12 20.012 4.664 24l1.336-8.714L0 9.423l8.332-1.268L12 .587z" />
                  </svg>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className="flex justify-center mt-6">
    
    
  </div>
</div>








    <div className="mt-0 p-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800">STRUCTURE</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 shadow">
        {/* Proven Results Box */}
        <div className="p-6 bg-gray-300 text-base rounded-lg shadow-lg flex flex-col items-center transition-all duration-300">
          <FaCheckCircle className="text-6xl mb-4 text-blue-600" /> {/* Icon */}
          <h2 className="text-xl font-semibold text-center">Proven Results</h2>
          <p className="mt-4 text-center">
            After more than 10 years in business and 1,500 students, we don't teach from theory. We teach from experience.​
          </p>
        </div>

        {/* Global Community Box */}
        <div className="p-6 bg-gray-300 text-base  rounded-lg shadow-lg flex flex-col items-center  transition-all duration-300">
          <FaGlobe className="text-6xl mb-4 text-blue-600" /> {/* Icon */}
          <h2 className="text-xl font-semibold text-center">Global Community</h2>
          <p className="mt-4 text-center">
            With students and staff representing ten countries walking through our doors every day, the world really is at Heritage Institute of Languages.​
          </p>
        </div>

        {/* Strong Foundation Box */}
        <div className="p-6 bg-gray-300 text-base rounded-lg shadow-lg flex flex-col items-center transition-all duration-300">
          <FaBuilding className="text-6xl mb-4 text-blue-600" /> {/* Icon */}
          <h2 className="text-xl font-semibold text-center">Strong Foundation</h2>
          <p className="mt-4 text-center">
            Founded in 2005 by a team of directors with over 50 years of experience, Heritage is built to last and grow into a bright future.​
          </p>
        </div>
      </div>
    </div>




 {/* Banner Section */}
<div className="relative w-full">
  {/* Banner Image */}
  <img src={Studentdown} alt="Doctor" className="w-full h-80 object-cover" />
  
  {/* Centered Text */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
    <h1 className="text-3xl md:text-5xl font-bold mb-6">Welcome to Covananteducation</h1>
  </div>
</div>

{/* Stats Section - Icons and Text */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-6 text-center bg-gradient-to-r from-blue-50 to-blue-100">
  <div className="flex flex-col items-center">
    <FaClock className="w-12 h-12 mb-3 text-blue-600" />
    <p className="text-gray-800 text-lg font-semibold">
      114,076<br />
      <span className="text-gray-600">Class Hours Completed</span>
    </p>
  </div>
  <div className="flex flex-col items-center">
    <FaGlobe className="w-12 h-12 mb-3 text-green-600" />
    <p className="text-gray-800 text-lg font-semibold">
      35<br />
      <span className="text-gray-600">Countries Represented</span>
    </p>
  </div>
  <div className="flex flex-col items-center">
    <FaCertificate className="w-12 h-12 mb-3 text-red-600" />
    <p className="text-gray-800 text-lg font-semibold">
      8<br />
      <span className="text-gray-600">Certifying Organizations</span>
    </p>
  </div>
  <div className="flex flex-col items-center">
    <FaLanguage className="w-12 h-12 mb-3 text-yellow-600" />
    <p className="text-gray-800 text-lg font-semibold">
      7<br />
      <span className="text-gray-600">Languages Offered</span>
    </p>
  </div>
</div>





<div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-12 bg-gradient-to-r from-blue-50 to-blue-100 gap-6 mb-10">
  {/* Top Section - Image (appears at the top on mobile) */}
  <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
    <img
      src={studentsit} // Replace with the updated image URL after removing the background
      alt="Students Sitting"
      className="rounded-lg shadow-lg max-w-sm md:max-w-lg w-auto h-auto object-contain"
    />
  </div>

 {/* Bottom Section - Text */}
<div className="w-full md:w-1/2 text-gray-700">
  <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 md:mb-6 text-center md:text-left">
    The Covenant Education Difference
  </h2>
  <p className="text-justify mb-4 md:mb-8 text-base md:text-lg leading-relaxed">
    At Covenant Education, we recognize that our students want more than to simply learn a language. They want to connect with people across the world, compete in a global marketplace, or simply navigate the local bazaar on their own. That’s why all of our classes are focused on teaching you to truly engage with the language in a way that will give you the confidence to use it outside the classroom.
  </p>
  <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 md:mb-6 text-center md:text-left">
    Our Mission
  </h2>
  <p className="text-justify text-base md:text-lg leading-relaxed">
    To be a bridge that connects India and the world by providing culturally relevant and innovative language learning, equipping students to communicate confidently and succeed in their individual goals.
  </p>
</div>
</div>




























     
      
    </div>
    
  );
};

export default Home;

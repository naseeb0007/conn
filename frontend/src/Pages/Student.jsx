import React from 'react';
import Doctor3 from "../assets/Bannerdown.jpeg";
import Doctor2 from "../assets/un.jpeg";

const Student = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full">
        <img src={Doctor3} alt="Doctor" className="w-full h-60 md:h-120 object-cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-4xl font-bold">Hindi Language Learning</h1>
        </div>
      </div>

      {/* Responsive layout for text and image */}
      <div className="container mx-auto my-12 px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          
          {/* Left side: Text */}
          <div className="md:w-1/2 space-y-4 text-gray-800 md:order-1">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">International Services</h2>
            <p className="text-lg leading-relaxed text-justify">
              To help our students make a smooth transition to life in India, we’ve partnered with Good World Study Abroad to provide online orientation and advising for a reduced price for <strong className="text-blue-800 font-semibold">Covenanteducation</strong> students. Good World Study Abroad specializes in preparing students and their families for a successful experience in India.
            </p>
            
            <h3 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">Services for <strong className="text-blue-800 font-semibold">Covenanteducation</strong> Students:</h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Temporary Accommodation Booking</li>
              <li>Airport Pickup & Transfer</li>
              <li>Housing Search Assistance</li>
              <li>Transportation Solutions</li>
              <li>Local Phone/SIM Card</li>
              <li>Local Bank Account</li>
              <li>Local ID Card</li>
              <li>Local Service Providers (Electrician, Plumber, etc.)</li>
              <li>Kids Schooling Options & Enrollment</li>
              <li>Specialized Family Counseling</li>
              <li>Local Excursions & Overnight Trips</li>
            </ul>
          </div>
          
          {/* Right side: Image */}
          <div className="md:w-1/2 mt-6 md:mt-0 md:order-2">
            <img 
              src={Doctor2} 
              alt="University Image" 
              className="w-full max-h-[650px] object-contain" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;

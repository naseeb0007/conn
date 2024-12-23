import React from 'react';
import Doctor3 from "../assets/univ.jpeg";
import Doctor2 from "../assets/uni.jpeg";

const Universities = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full">
        <img src={Doctor3} alt="University" className="w-full h-60 md:h-120 object-cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-4xl font-bold">Hindi Language Learning</h1>
        </div>
      </div>

      {/* Responsive layout for text and image */}
      <div className="container mx-auto my-12 px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          
          {/* Left side: Text */}
          <div className="md:w-1/2 space-y-4 text-gray-800">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Translation Services</h2>
            <p className="text-lg leading-relaxed">
              At Heritage, we offer high-quality translation services for every application. We use a combination of native speakers in both the original and target language to preserve the meaning and nuance from your original text and ensure your words are never lost in translation.
            </p>
            
            <h3 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">Languages Supported:</h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>English (British and American)</li>
              <li>Hindi</li>
              <li>IELTS</li>
            </ul>
          </div>
          
          {/* Right side: Image with increased height and width */}
          <div className="md:w-1/2 mt-6 md:mt-0">
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

export default Universities;

import React from 'react';
import Doctor3 from "../assets/Bannerdown.jpeg";
import { FaUserGraduate, FaChalkboardTeacher, FaRocketchat } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Hindi = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full">
        <img src={Doctor3} alt="Doctor" className="w-full h-60 md:h-120 object-cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-4xl font-bold">Hindi Language Learning</h1>
        </div>
      </div>

      {/* Description Section */}
      <div className="p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Hindi Language Learning</h1>
        <p className="text-justify text-gray-700 mb-6">
          Learning Hindi in India is the fastest, most effective method for one reason: total immersion. Our Hindi teachers bring this immersion into the classroom by teaching in your target language, helping you not only to make new linguistic connections but also to pick up on common expressions and idioms that you will encounter in your everyday interactions here in India. Select any level below to learn more about the course.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row justify-center gap-8 p-8">
        {/* Beginner Card */}
        <div className="bg-white shadow-xl rounded-lg p-8 w-full md:w-80">
          <div className="flex justify-center text-5xl text-blue-500 mb-4">
            <FaUserGraduate />
          </div>
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-3">Beginner</h2>
          <p className="text-center text-gray-600 mb-4">
            Start learning Hindi from the basics. Learn essential words, phrases, and pronunciation.
          </p>
          <button
            onClick={() => navigate("/begginer")} // Use navigate for navigation
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Start Learning
          </button>
        </div>

        {/* Intermediate Card */}
        <div className="bg-white shadow-xl rounded-lg p-8 w-full md:w-80">
          <div className="flex justify-center text-5xl text-green-500 mb-4">
            <FaChalkboardTeacher />
          </div>
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-3">Intermediate</h2>
          <p className="text-center text-gray-600 mb-4">
            Improve your Hindi skills. Learn more complex grammar, vocabulary, and sentence structure.
          </p>
          <button
            onClick={() => navigate("/Intermediate")} // Use navigate for navigation
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
          >
            Start Learning
          </button>
        </div>

        {/* Advanced Card */}
        <div className="bg-white shadow-xl rounded-lg p-8 w-full md:w-80">
          <div className="flex justify-center text-5xl text-red-500 mb-4">
            <FaRocketchat />
          </div>
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-3">Advanced</h2>
          <p className="text-center text-gray-600 mb-4">
            Master advanced Hindi. Understand complex language aspects, idioms, and cultural expressions.
          </p>
          <button
            onClick={() => navigate("/advance")} // Use navigate for navigation
            className="w-full py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
          >
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hindi;

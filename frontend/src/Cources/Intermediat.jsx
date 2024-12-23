import React from "react";
import Doctor3 from "../assets/Bannerdown.jpeg";
import HindiIntermediate from "../assets/Hindi2.jpeg"; // Add the appropriate image for intermediate course
import { useNavigate } from "react-router-dom";

const Intermediate = () => {
  const navigate = useNavigate(); // For navigation

  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full">
        <img src={Doctor3} alt="Doctor" className="w-full h-64 md:h-120 object-cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-5xl font-bold">Intermediate Hindi Learning</h1>
        </div>
      </div>

      {/* Course Details Section */}
      <div className="container mx-auto py-10 px-6 md:px-12 text-center">
        {/* Content Section */}
        <div className="space-y-8">
          {/* Second Image */}
          <div>
            <img
              src={HindiIntermediate}
              alt="Intermediate Hindi Course"
              className="w-full md:w-1/2 mx-auto h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Course Overview */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-red-600">Hindi Level 2 - Intermediate</h2>
           
           
            <h3 className="text-xl font-semibold mt-8 mb-4">About this course:</h3>
            <p className="text-lg mb-4 text-justify">
              The Intermediate Hindi course is designed for learners who have acquired basic knowledge of the language and want to enhance
              their skills to handle more complex conversations and texts. This course will focus on grammar, vocabulary, and cultural nuances
              to help students become more comfortable in everyday situations.
            </p>
            <p className="text-lg mb-4 text-justify">
              In this course, you will cover key grammatical structures such as compound sentences, verb conjugations, and possessive
              forms. Emphasis will also be placed on expanding your vocabulary to help you communicate effectively in a variety of contexts, 
              from family gatherings to professional settings.
            </p>
            <p className="text-lg mb-4 text-justify">
              Additionally, we will work on improving your writing skills. You’ll write short essays, stories, and informal letters, 
              gradually building your confidence to express yourself in written Hindi. 
              By the end of the course, you’ll be able to read moderately difficult texts, engage in conversations with ease, and understand the nuances
              of language used in public speeches, news, and cultural exchanges.
            </p>
            <h4 className="text-xl font-semibold mb-4">Typical Duration:</h4>
            <p className="text-lg mb-4 text-justify">
              The Intermediate Hindi course spans <strong>200 class hours</strong> over <strong>20 weeks</strong>, ensuring a thorough understanding of the language and its applications.
              You will receive personalized guidance and plenty of practice in both spoken and written Hindi.
            </p>

            {/* Course Features Section */}
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-4 text-red-600">Course Features</h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-justify">
                <li>Conversational Practice for Everyday Situations</li>
                <li>In-depth Grammar Lessons</li>
                <li>Writing Essays and Short Stories</li>
                <li>Intermediate Vocabulary Expansion</li>
                <li>Reading Comprehension for Moderate Texts</li>
                <li>Engagement with Hindi Media (News, TV Shows, etc.)</li>
                <li>Pronunciation and Accent Improvement</li>
                <li>Interactive Language Games and Exercises</li>
                <li>Cultural Immersion through Hindi Music and Films</li>
              </ul>
            </div>
            <button
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={() => navigate("/contact")} // Navigate to the contact page
            >
              CONTACT US
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Intermediate;

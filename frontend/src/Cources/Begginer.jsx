import React from "react";
import Doctor3 from "../assets/Bannerdown.jpeg";
import Hindi1 from "../assets/Hindi1.jpeg";
import { useNavigate } from "react-router-dom";

const Beginner = () => {
  const navigate = useNavigate(); // For navigation

  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full">
        <img src={Doctor3} alt="Doctor" className="w-full h-64 md:h-120 object-cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-5xl font-bold">Begginer Hindi Learning</h1>
        </div>
      </div>

      {/* Course Details Section */}
      <div className="container mx-auto py-10 px-6 md:px-12 text-center">
        {/* Content Section */}
        <div className="space-y-8">
          {/* Second Image */}
          <div>
            <img
              src={Hindi1}
              alt="Hindi Course"
              className="w-full md:w-1/2 mx-auto h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Course Overview */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-red-600">Hindi Level 1 - Beginner</h2>
            
            
           

            <h3 className="text-xl font-semibold mt-8 mb-4">About this course:</h3>
            <p className="text-lg mb-4 text-justify">
              Designed specifically for foreigners to provide a foundational understanding of all aspects of the Hindi
              language, our Beginner Hindi course is ideal for anyone arriving in India with little or no Hindi
              knowledge. You’ll learn the Hindi alphabet, pronunciation, and basic conversation skills.
            </p>
            <p className="text-lg mb-4 text-justify">
              By the time you complete this course, you’ll be able to read and write short texts and hold basic
              conversations confidently. Our focus is to make learning Hindi practical and enjoyable.
            </p>
            <p className="text-lg mb-4 text-justify">
              Classes are tailored to students’ needs, whether for everyday conversations, cultural insights, or
              professional purposes like job interviews. We are well-known for successfully teaching students who
              struggled to learn at other schools.
            </p>
            <h4 className="text-xl font-semibold mb-4">Typical Duration:</h4>
            <p className="text-lg mb-4 text-justify">
              The course runs for <strong>260 class hours</strong> over <strong>26 weeks</strong>, offering flexible
              scheduling for working professionals and busy individuals.
            </p>
            <h4 className="text-xl font-semibold mb-4">Additional Support:</h4>
            <p className="text-lg mb-4 text-justify">
              Access online resources, language practice sessions, and cultural exchange events. By the end of this
              course, you’ll have the confidence and skills to communicate effectively in Hindi.
            </p>

            {/* Course Features Section */}
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-4 text-red-600">Course Features</h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-justify">
                <li>Introductions</li>
                <li>Basic Conversation</li>
                <li>Practical Interactions</li>
                <li>Commonly Used Words</li>
                <li>Alphabet & Spelling</li>
                <li>Writing Skills</li>
                <li>Present & Future Tense</li>
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

export default Beginner;

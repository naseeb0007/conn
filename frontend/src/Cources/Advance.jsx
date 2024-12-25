import React from "react";
import Doctor3 from "../assets/Bannerdown.jpeg";
import HindiAdvanced from "../assets/sg.jpeg"; // Add the appropriate image for advanced course
import { useNavigate } from "react-router-dom";

const Advanced = () => {
  const navigate = useNavigate(); // For navigation

  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full">
        <img src={Doctor3} alt="Doctor" className="w-full h-64 md:h-120 object-cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-5xl font-bold">Advanced Hindi Learning</h1>
        </div>
      </div>

      {/* Course Details Section */}
      <div className="container mx-auto py-10 px-6 md:px-12 text-center">
        {/* Content Section */}
        <div className="space-y-8">
          {/* Second Image */}
          <div>
            <img
              src={HindiAdvanced}
              alt="Advanced Hindi Course"
              className="w-full md:w-1/2 mx-auto h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Course Overview */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-red-600">Hindi Level 3 - Advanced</h2>
            
           
            

            <h3 className="text-xl font-semibold mt-8 mb-4">About this course:</h3>
            <p className="text-lg mb-4 text-justify">
              The Advanced Hindi course is for individuals who are already proficient in Hindi and want to reach native-level fluency.
              This course will deepen your understanding of complex grammatical structures, vocabulary, and idiomatic expressions.
              Students will engage with higher-level texts, including advanced literary works and journalistic materials, improving both written and spoken comprehension. 
              This level will cover sophisticated tenses, moods, and syntax, making it suitable for those who wish to master formal and informal Hindi for various contexts.
            </p>
            <p className="text-lg mb-4 text-justify">
              In this course, you’ll work on advanced writing skills, including essay writing and creative composition, as well as
              develop high-level conversational skills in professional, academic, and cultural contexts. Emphasis will be placed on making nuanced
              and culturally appropriate statements in both speech and writing. 
              As you progress, you will gain exposure to idiomatic expressions, colloquialisms, and deeper cultural references that shape everyday conversations.
            </p>
            <p className="text-lg mb-4 text-justify">
              Classes are tailored to meet the needs of each student, offering specialized sessions in topics like literature, business
              communication, and public speaking in Hindi. As the course progresses, students will work on writing longer pieces, including formal reports, debates, and complex essays.
              Additionally, there will be a strong emphasis on reading comprehension, especially in areas like Hindi literature, social sciences, and history.
            </p>
            <h4 className="text-xl font-semibold mb-4">Typical Duration:</h4>
            <p className="text-lg mb-4 text-justify">
              The course runs for <strong>300 class hours</strong> over <strong>30 weeks</strong>, designed for students seeking mastery
              of the language. This structure allows for thorough exploration of each topic and ample time for practice in real-world settings. 
              During the course, students will have access to additional resources like reading material, interactive exercises, and guided speaking sessions with native speakers.
            </p>

            {/* Course Features Section */}
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-4 text-red-600">Course Features</h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-justify">
                <li>Fluent Conversational Hindi</li>
                <li>Advanced Vocabulary Building</li>
                <li>Understanding Literary Hindi</li>
                <li>Business & Professional Hindi</li>
                <li>Advanced Sentence Structure</li>
                <li>Creative Writing Skills</li>
                <li>Public Speaking and Debates in Hindi</li>
                <li>Literature Analysis and Discussion</li>
                <li>Real-life Situational Practice</li>
                <li>Deep Dive into Hindi Idioms and Cultural Contexts</li>
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

export default Advanced;

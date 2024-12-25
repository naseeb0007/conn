import React from 'react';
import UrduImage from "../assets/urdu.jpeg"; // Import the image
import { useNavigate } from 'react-router-dom';

const Urdu = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white">

      {/* Banner Section */}
      <div className="relative w-full">
        <img src={UrduImage} alt="Urdu Language" className="w-full h-auto object-cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-4xl font-bold">Learn Urdu</h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="px-10 py-10">
        <h2 className="text-4xl font-bold text-blue-900 mb-5">Introduction to Urdu</h2>
        <p className="text-lg text-gray-700 mb-6 text-justify">
          Urdu is a rich and beautiful language spoken by millions across the world, especially in South Asia, including Pakistan, India, and various other countries. Known for its poetic elegance, Urdu combines the best of Persian, Arabic, Turkish, and native Indian languages, making it one of the most cultured languages with a vast vocabulary and expressive range.
        </p>
        <p className="text-lg text-gray-700 mb-6 text-justify">
          As the official language of Pakistan and one of the 22 scheduled languages of India, Urdu holds a significant cultural and historical position in South Asia. Its script is derived from the Persian alphabet, which is also the script for languages like Arabic and Farsi. Urdu's connection to classical music, poetry, and film gives it a rich heritage and cultural value that has endured through generations.
        </p>
        <p className="text-lg text-gray-700 mb-6 text-justify">
          The beauty of Urdu lies in its versatility. Whether you're reading a classical ghazal, enjoying a contemporary novel, or watching an Urdu film, the language has a unique ability to connect deeply with its audience. The fluidity of its script and its musicality when spoken makes learning Urdu not just practical, but a profoundly enriching experience.
        </p>
        <p className="text-lg text-gray-700 mb-6 text-justify">
          This course is designed to take you through the fundamentals of the Urdu language, helping you become proficient in speaking, reading, and writing. Whether you're a beginner or looking to refine your skills, the course provides structured lessons that will enable you to explore the language's beauty and culture. By the end of this course, you'll have a strong foundation in Urdu, making you capable of communicating with confidence and understanding Urdu's rich literary tradition.
        </p>
      </div>

      {/* Syllabus Section */}
      <div className="px-10 py-10 bg-gray-50">
        <h2 className="text-4xl font-bold text-blue-900 mb-5">Course Syllabus</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6 text-justify">
          <li><strong>Introduction to Urdu Script:</strong> In this module, you will be introduced to the Urdu script. You'll learn how to read and write the 39 letters of the Urdu alphabet, including understanding how the script is written from right to left. You will also practice pronunciation, helping you identify the various sounds of the letters and understand their forms in different positions (initial, medial, and final) in words. Additionally, you'll learn the use of diacritics and how they affect pronunciation.</li>
          <li><strong>Basic Grammar and Sentence Structure:</strong> This module covers the core elements of Urdu grammar. You'll study sentence construction, including word order (Subject-Object-Verb) and basic sentence patterns. The course will teach you about noun-adjective agreement, use of articles, and proper placement of verbs. You’ll also learn verb conjugation, covering tenses such as past, present, and future, as well as the pluralization of nouns and the correct use of pronouns.</li>
          <li><strong>Vocabulary Building:</strong> This module focuses on expanding your vocabulary, which is essential for fluency. You'll learn everyday words and phrases used in common situations, such as greetings, introductions, and expressions of gratitude. Additionally, we will introduce thematic vocabulary, covering topics like family, travel, food, and the environment, giving you the tools to converse on a variety of subjects.</li>
          <li><strong>Speaking and Listening Skills:</strong> In this section, you'll practice conversational Urdu through dialogues and role-playing exercises. You’ll be introduced to common expressions and idioms used in everyday speech, helping you communicate more naturally. The listening component will include audio lessons to improve your comprehension, with recordings of native speakers to help you understand pronunciation and intonation in various contexts.</li>
          <li><strong>Reading Urdu Literature:</strong> This section takes you through the rich literary history of Urdu. You'll begin with simple stories and poems to understand the nuances of the language and develop your reading skills. As the course progresses, you’ll study works of famous Urdu poets and writers like Mirza Ghalib, Allama Iqbal, and Faiz Ahmed Faiz. The goal is to appreciate the beauty and depth of Urdu poetry and prose, and to understand the cultural context of the texts.</li>
          <li><strong>Writing in Urdu:</strong> The writing module is designed to improve your ability to write in Urdu with clarity and precision. You will start by learning to write basic sentences and gradually progress to more complex compositions, including short essays and descriptive paragraphs. Emphasis will be placed on the proper use of grammar, spelling, and punctuation. The course also includes a segment on Urdu calligraphy, where you will learn the art of beautifully writing Urdu script.</li>
          <li><strong>Understanding Urdu Poetry and Music:</strong> This section explores the deep connection between Urdu and its classical poetry, especially the ghazal and qawwali. You'll learn about the history and structure of these poetic forms, and how they are used to express emotions, spirituality, and philosophical themes. We will also explore the influence of Urdu on modern music and film, showcasing how poets like Faiz Ahmed Faiz and Ahmad Faraz have shaped the soundtracks of popular Pakistani films.</li>
          <li><strong>Advanced Conversation:</strong> In this advanced level section, you will engage in more sophisticated conversations on a wide range of topics, from current affairs to cultural debates. This will help you gain fluency in speaking Urdu in varied settings, from casual discussions to formal debates. You will also practice negotiation, problem-solving, and expressing opinions, making sure you can communicate confidently and eloquently in all situations.</li>
        </ul>
      </div>

      {/* Contact Button Section */}
      <div className="px-10 py-10 flex justify-center">
        <button onClick={() => navigate("/contact")} className="bg-red-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-red-700">
          Contact Us
        </button>
      </div>

    </div>
  );
};

export default Urdu;

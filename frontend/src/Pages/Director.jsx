import React from "react";
import Doctor3 from "../assets/dir.jpeg";
import Sir from "../assets/sir.jpeg";

const Director = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full">
        <img
          src={Doctor3}
          alt="Doctor"
          className="w-full h-60 md:h-120 object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-4xl font-bold">
            Learn <span className="text-pink-600 font-bold">Hindi</span>, Urdu, and IELTS
          </h1>
        </div>
      </div>

      <div className="container mx-auto my-12 p-4 space-y-9 w-full border-l-2 border-r-2 border-gray-300">
        {/* Sir's Image and Introduction */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src={Sir}
            alt="Bobby Sir"
            className="w-40 h-40 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110"
          />
          <h2 className="text-2xl font-semibold text-center text-blue-600 animate__animated animate__fadeIn">
            Hi, my name is Irwin (Bobby Sir)
          </h2>
          <p className="text-justify justify-text text-lg text-center max-w-3xl text-gray-700 leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
            I am your Hindi, Urdu, and IELTS instructor, with over 20 years of experience in teaching. My mission is to help you master the Hindi language and achieve excellent scores in IELTS. I have been trained by the British Council (United Kingdom) for IELTS and specialize in guiding students to their goals. Over the years, I’ve helped hundreds of students excel in their language learning journey. My teaching methodology is based on real-world application and personal growth, ensuring each student’s progress is both measurable and meaningful. 
            I bring a wealth of experience in understanding the challenges students face while learning a new language, and I strive to make learning both fun and effective. My personalized approach is tailored to meet your unique learning needs, ensuring that your time and efforts in mastering Hindi, Urdu, and preparing for IELTS lead to success. I understand the importance of language skills in today’s globalized world, and I’m here to guide you every step of the way towards achieving your dreams.
          </p>
        </div>

        {/* About Section */}
        <h1 className="text-3xl font-bold text-center mb-6 text-pink-600 animate__animated animate__fadeIn animate__delay-1s">
          About Covenant Education
        </h1>
        <p className="mx- text-lg text-gray-800 mb-4 animate__animated animate__fadeIn animate__delay-2s text-justify">
          Welcome to
          <strong className="mx-2 text-blue-800 font-semibold hover:scale-105 duration-500">
               Covenant Education
          </strong>
          , a trusted institute dedicated to teaching <span className="text-pink-600">Hindi</span>, Urdu, and IELTS. Whether you are looking to learn a new language or achieve a high IELTS band score, we are here to guide you every step of the way. Our commitment to excellence, tailored coaching, and extensive resources help students not only succeed academically but also build a foundation for personal and professional success. Our institute offers a unique learning environment that encourages intellectual growth, self-confidence, and the mastery of language skills.
          Covenant Education takes pride in its highly qualified instructors who have undergone extensive training and bring years of experience in the language learning and test preparation industry. We offer courses designed for students of all levels, from beginners to advanced learners, ensuring that everyone has an opportunity to succeed. Our mission is to empower students to not only achieve their desired IELTS scores but also become proficient in the Hindi language, enabling them to connect with others globally, explore new opportunities, and gain a deeper understanding of the world around them.
        </p>

        <p className="text-lg text-gray-800 mb-4 animate__animated animate__fadeIn animate__delay-2s text-justify">
          At Covenant Education, we understand the challenges that come with learning a new language, especially <span className="text-pink-600">Hindi</span> and Urdu. We are dedicated to providing comprehensive resources, expert guidance, and personalized attention to ensure every student reaches their fullest potential. Whether your goal is to pass the IELTS with a high band score or to learn Hindi and Urdu for personal growth, we have the tools and expertise to help you achieve success.
          Our institute offers both online and offline classes, ensuring flexibility and convenience for students worldwide. We also provide a wide range of supplementary materials such as practice tests, interactive exercises, and one-on-one coaching to further enhance your learning experience. By joining Covenant Education, you’ll be joining a community of passionate learners who share your goals and aspirations, and you will have access to the resources needed to achieve them.
        </p>

        {/* Mission Section */}
        <h2 className="font-semibold text-blue-800 text-xl animate__animated animate__fadeIn animate__delay-3s">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 mb-4 animate__animated animate__fadeIn animate__delay-3s text-justify">
          Our mission is to provide exceptional training in <span className="text-pink-600">Hindi</span> language learning and IELTS preparation. We strive to create a learning environment that fosters confidence and excellence, enabling students to achieve their personal and professional aspirations. At Covenant Education, we believe in nurturing the intellectual potential of every student and providing them with the tools they need to succeed in their exams and in life. Our highly experienced instructors work tirelessly to ensure that each student receives the best possible education, guidance, and support.
        </p>
        <p className="text-lg text-gray-700 mb-4 animate__animated animate__fadeIn animate__delay-3s text-justify">
          We are committed to empowering our students with the skills and knowledge needed to communicate effectively in <span className="text-pink-600">Hindi</span> and excel in IELTS exams, paving the way for success in global opportunities. Our focus is on ensuring that every student feels confident and ready to face the challenges of their exams and personal language development. Our holistic approach to learning not only focuses on passing exams but also aims to build self-confidence, cultural understanding, and global awareness. We believe in a comprehensive approach to learning that prepares students for success in both the academic and professional realms.
        </p>

        {/* Why Choose Us Section */}
        <h2 className="font-semibold text-blue-800 text-xl animate__animated animate__fadeIn animate__delay-4s">
          Why Choose Covenant Education?
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700 animate__animated animate__fadeIn animate__delay-4s text-justify">
          <li>
            <strong>Expert Training:</strong> Learn from experienced instructors with a proven track record in <span className="text-pink-600">Hindi</span>, Urdu, and IELTS coaching. Our teachers are not only highly skilled but also passionate about your success, bringing years of experience to every lesson.
          </li>
          <li>
            <strong>Personalized Coaching:</strong> We tailor our teaching methods to meet each student’s unique learning style and goals. Whether you prefer one-on-one coaching or group sessions, we adapt our approach to suit your needs and pace.
          </li>
          <li>
            <strong>Comprehensive Programs:</strong> Our courses cover everything from basic to advanced levels, ensuring mastery in <span className="text-pink-600">Hindi</span>, Urdu, and IELTS. We provide a range of materials to help students at all stages of their learning journey, from beginner to expert.
          </li>
          <li>
            <strong>Proven Results:</strong> Hundreds of students have successfully achieved their goals through our structured programs. Our students consistently score high in their IELTS exams and become fluent in <span className="text-pink-600">Hindi</span> and Urdu, opening doors to new opportunities in both personal and professional life.
          </li>
          <li>
            <strong>Supportive Environment:</strong> We provide a nurturing and encouraging atmosphere to help you reach your full potential. Our community of learners supports and motivates each other, ensuring that no student feels left behind.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Director;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Whatshap from './Components/Whatshapp';

// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cources from './Pages/Cources';
import International from './Pages/International';
import Orgnaisation from './Pages/Orgnaisation';
import Achievment from './Pages/Achievments';

import Director from './Pages/Director';
import Hindi from './Pages/hindi';
import Ielts from './Pages/Ielts';
import Begginer from './Cources/Begginer';
import Intermediate from './Cources/Intermediat';
import Advance from './Cources/Advance';

import Translation from './Pages/Translation';

import Student from './Pages/Student';

const App = () => {
  return (
    <HelmetProvider>
      {/* Global metadata via Helmet */}
      <Helmet>
        <title>Bobby IELTS - Professional Training</title>
        <meta
          name="description"
          content="Bobby IELTS provides comprehensive training for IELTS, OET, NCLEX, OSCE, and study abroad programs. Unlock your potential today."
        />
        <meta
          name="keywords"
          content="IELTS, OET, NCLEX, OSCE, Bobby IELTS, training, study abroad, nurse training"
        />
        <meta name="author" content="Bobby IELTS" />
      </Helmet>

      <Router>
        <Navbar />

        {/* WhatsApp floating button */}
        <Whatshap />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/#" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Cources />} />
          <Route path="/achievment" element={<Achievment />} />
          <Route path="/orgnaisation" element={<Orgnaisation />} />
          <Route path="/international" element={<International />} />
          
          <Route path="/director" element={<Director />} />
          <Route path="/hindi" element={<Hindi />} />
          <Route path="/ielts" element={<Ielts />} />
          <Route path="/translation" element={<Translation />} />
          <Route path="/begginer" element={<Begginer />} />
          <Route path="/Intermediate" element={<Intermediate />} />
          <Route path="/advance" element={<Advance />} />
          
          
          <Route path="/student" element={<Student />} />
        </Routes>

        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default App;

// Imports
import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Component Imports
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Pages/Homepage/Homepage';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import Submission from './Pages/Submission/Submission';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/submission" element={<Submission />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

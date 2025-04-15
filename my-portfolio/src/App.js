// Imports
import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Component Imports
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Homepage/Homepage";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
// import Blogs from "./Pages/Blog/Blog";
import Submission from "./Pages/Submission/Submission";
import Footer from "./Components/Footer/Footer";
import Chatbot from "./Components/Chatbot/Chatbot";
import { VideoBlog } from "./Pages/VideoBlog/VideoBlog";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/videoBlog" element={<VideoBlog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

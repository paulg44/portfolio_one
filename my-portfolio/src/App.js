// Imports 
import {React} from "react"
import './App.css';

// Component Imports
import Navbar from "./Navbar/Navbar";
import Homepage from "./Homepage/Homepage";
import Footer from "./Footer/Footer";

function App() {
  return (
   <div>
    <Navbar/>
    <Homepage />
    <Footer />
   </div>
  );
}

export default App;

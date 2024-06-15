import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import './App.css'
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
function App() {
  const [count, setCount] = useState(0);

  return (
  
      <BrowserRouter>
        <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
            <Footer/>
          </div>
        
      </BrowserRouter>
  
  );
}

export default App;

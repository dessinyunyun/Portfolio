import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import AddPortofolio from "./adminPages/AddPortofolio";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/adminarea/addportofolio" element={<AddPortofolio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

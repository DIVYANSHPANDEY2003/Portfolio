import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Projects/Project';
import Skills from './components/Skills/Skills';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        {/* Optional: 404 Page */}
        <Route path="*" element={<h1 style={{textAlign: "center", marginTop: "50px"}}>404 Page Not Found</h1>} />
      </Routes>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </Router>
  );
}

export default App;

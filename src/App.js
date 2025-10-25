import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import Work from './components/Work/Work';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer.js';
import ProjectPage from './ProjectPage';
import Labs from './components/Labs/Labs'; // import your Labs page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Work />
            <About />
            <hr className="section-separator" />
            <Services />
            <hr className="section-separator" />

            <Contact />
            <Footer />
          </>
        } />
        <Route path="/work/:id" element={<ProjectPage />} />
        <Route path="/labs" element={<Labs />} /> {/* new Labs route */}
      </Routes>
    </Router>
  );
}

export default App;

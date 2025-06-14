import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AddProject from './components/AddProject.jsx';
import FaceDetector from './components/FaceDetector.jsx';
import Chatbot from "./components/Chatbot.jsx";

function App() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <Navbar />
      <main className="px-6 py-10 space-y-16">
        <About />
        <FaceDetector />
        <Projects />
        <Skills />
        <Contact />
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
          >
          ⬆
        </button>
      </main>
      <Chatbot />
    </div>
  );
}

export default App;

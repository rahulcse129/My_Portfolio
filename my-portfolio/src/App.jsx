import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';


function App() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <Navbar />
      <main className="px-6 py-10 space-y-16">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;

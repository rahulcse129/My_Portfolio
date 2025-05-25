const Projects = () => {
  return (
    <section id="projects" className="py-12 px-6 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Section: Projects */}
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Projects
        </h2>
        <div className="space-y-10">
          {/* Project 1: Portfolio Website */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
              About My Portfolio Website
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A responsive and modern portfolio website built with React.js, Vite, and Tailwind CSS to showcase my work and skills. It’s fully optimized for performance and designed with a clean user interface.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
              <li>🚀 Built with <strong>Vite</strong> for fast development and build times</li>
              <li>🎨 Styled using <strong>Tailwind CSS</strong></li>
              <li>🧑‍💻 Modular <strong>React Components</strong></li>
              <li>📱 Fully <strong>Responsive Design</strong> (desktop/tablet/mobile)</li>
              <li>📂 Sections: Home, About Me, Skills, Projects, Contact</li>
              <li>📨 Contact form integration with EmailJS/Formspree</li>
              <li>🌐 Deployed on <strong>[Your Hosting Platform]</strong></li>
            </ul>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              <strong>Tech Stack:</strong> React.js, Vite, Tailwind CSS, HTML, JavaScript
            </p>
          </div>

          {/* Project 2: NASA Space Apps Challenge */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
              River Guardian – NASA Space Apps 2023
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Participated in the NASA Space Apps Challenge 2023 as a frontend developer for the "River Guardian" project. The initiative aimed to create a platform showing real-time data about rivers including water quality, tides, weather, and local wildlife.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
              <li>🎨 Designed user interfaces using React.js and Tailwind CSS</li>
              <li>📊 Integrated real-time data visualizations with Chart.js</li>
              <li>📱 Ensured responsive design for multiple device types</li>
              <li>🤝 Collaborated with backend team for API integration</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              <strong>Tech Stack:</strong> React.js, Tailwind CSS, Chart.js, HTML5, CSS3, JavaScript
            </p>
            <a
              href="https://github.com/ExoQuesters/nasaspaceapp2023"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-500 hover:underline"
            >
              🔗 GitHub Repository
            </a>
          </div>
        </div>

        {/* Section: Research Experience */}
        <h2 className="text-4xl font-bold mt-16 mb-8 text-center text-gray-800 dark:text-white">
          Research Experience
        </h2>
        <div className="space-y-10">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
              Near-Earth Object (NEO) Observation – NASA & IASC
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Conducted asteroid and NEO observation research in 9th grade through the International Astronomical Search Collaboration (IASC), in partnership with NASA. This involved using real astronomical data to track Main Belt Asteroids and identify potential Near-Earth Objects.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
              <li>🔭 Used <strong>Astrometrica</strong> to analyze FITS images from the PAN-STARRS telescope</li>
              <li>🛰️ Performed astrometric measurements to track celestial object movement</li>
              <li>📊 Applied data analysis techniques for identifying and confirming asteroid paths</li>
              <li>🌐 Submitted reports that contributed to real-world astronomical databases</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              <strong>Skills:</strong> Image Analysis, Astrometry, Data Interpretation, Scientific Observation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

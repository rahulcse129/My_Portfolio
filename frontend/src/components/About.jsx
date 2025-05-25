import React from "react";
import profilePic from "../assets/profile.jpeg"; // Adjust path to your image

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Image */}
        <div className="flex-shrink-0 w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-blue-600 dark:border-purple-600">
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text content */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hi! I’m Rahul Pal, a passionate developer and data enthusiast with skills in
            data mining, big data, computer science, and software development. I love
            building modern, responsive websites and diving deep into data analysis.
            Always eager to learn and grow in tech.
          </p>
           <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          My journey in technology began early, and by 9th grade I was already contributing to real-world scientific research through a NASA-affiliated program, analyzing asteroid data and working with astronomical imaging software.
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            When I’m not coding or analyzing data, I enjoy reading research papers,
            contributing to open-source, and exploring new technologies.
          </p>
           <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Let’s connect and create something amazing together!
          
          Here's my LinkedIn Id : https://www.linkedin.com/in/rahul-pal-b28b9727b
        </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

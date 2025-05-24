// Skills.jsx
import React from "react";
import {
  FaJava,
  FaPython,
  FaJsSquare,
  FaReact,
  FaChartBar,
  FaSearch,
  FaFileAlt,
  FaRobot,
  FaDatabase,
  FaBullhorn,
  FaLightbulb,
  FaCogs,
  FaCode,
} from "react-icons/fa";
import { SiJupyter, SiTailwindcss, SiContentful } from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava className="text-red-500" />, level: 80 },
  { name: "Python", icon: <FaPython className="text-yellow-500" />, level: 90 },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, level: 85 },
  { name: "React.js", icon: <FaReact className="text-cyan-400" />, level: 80 },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, level: 75 },
  { name: "Big Data", icon: <FaDatabase className="text-purple-600" />, level: 70 },
  { name: "Data Mining", icon: <FaSearch className="text-blue-500" />, level: 85 },
  { name: "Data Analysis", icon: <FaChartBar className="text-green-500" />, level: 90 },
  { name: "Content Management", icon: <SiContentful className="text-pink-500" />, level: 80 },
  { name: "Content Strategy", icon: <FaFileAlt className="text-indigo-500" />, level: 75 },
  { name: "Research Skills", icon: <FaSearch className="text-gray-700" />, level: 85 },
  { name: "Presentations", icon: <FaBullhorn className="text-red-600" />, level: 70 },
  { name: "Communication", icon: <FaBullhorn className="text-blue-700" />, level: 80 },
  { name: "Content and Documentation", icon: <FaFileAlt className="text-gray-600" />, level: 85 },
  { name: "Digital Strategy", icon: <FaLightbulb className="text-yellow-300" />, level: 75 },
  { name: "Social Media", icon: <FaBullhorn className="text-blue-400" />, level: 85 },
  { name: "Social Media Marketing", icon: <FaBullhorn className="text-pink-400" />, level: 80 },
  { name: "Automation", icon: <FaRobot className="text-gray-500" />, level: 85 },
  { name: "Robotic Process Automation", icon: <FaRobot className="text-blue-500" />, level: 80 },
  { name: "Jupyter", icon: <SiJupyter className="text-orange-400" />, level: 70 },
  { name: "C", icon: <FaCode className="text-blue-500" />, level: 75 },
  { name: "Analytical Skills", icon: <FaChartBar className="text-blue-400" />, level: 85 },
  { name: "Strategy", icon: <FaLightbulb className="text-yellow-500" />, level: 80 },
  { name: "Microsoft Excel", icon: <FaFileAlt className="text-green-700" />, level: 75 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-14 text-gray-900 dark:text-white tracking-tight">
          Skills & Proficiency
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-4 text-gray-900 dark:text-white">
                <div className="text-4xl">{skill.icon}</div>
                <p className="text-2xl font-semibold">{skill.name}</p>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-4 rounded-full overflow-hidden shadow-inner">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="mt-3 text-gray-700 dark:text-gray-300 font-medium">{skill.level}% proficiency</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

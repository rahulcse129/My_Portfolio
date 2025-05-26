import { useState } from "react";

const AddProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    techStack: "",
    highlights: "",
    github: "",
    live: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Transform techStack and highlights into arrays
    const payload = {
      ...formData,
      techStack: formData.techStack.split(",").map((s) => s.trim()),
      highlights: formData.highlights.split(",").map((s) => s.trim()),
    };

    const res = await fetch("http://localhost:5000/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    alert("✅ Project added!");
    setFormData({
      title: "",
      description: "",
      techStack: "",
      highlights: "",
      github: "",
      live: "",
    });
  };

  return (
    <section className="py-12 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Add New Project</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded border dark:bg-gray-800"
          />
          <textarea
            name="description"
            placeholder="Project Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded border dark:bg-gray-800"
          />
          <input
            type="text"
            name="techStack"
            placeholder="Tech Stack (comma separated)"
            value={formData.techStack}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border dark:bg-gray-800"
          />
          <input
            type="text"
            name="highlights"
            placeholder="Highlights (comma separated)"
            value={formData.highlights}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border dark:bg-gray-800"
          />
          <input
            type="url"
            name="github"
            placeholder="GitHub URL"
            value={formData.github}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border dark:bg-gray-800"
          />
          <input
            type="url"
            name="live"
            placeholder="Live Site URL"
            value={formData.live}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border dark:bg-gray-800"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            ➕ Submit Project
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddProject;

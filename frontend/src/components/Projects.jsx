import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    techStack: "",
    highlights: "",
    github: "",
    live: "",
  });

  const fetchProjects = () => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;

    const res = await fetch(`http://localhost:5000/api/projects/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setProjects(projects.filter((p) => p._id !== id));
    } else {
      alert("Failed to delete project.");
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProject = {
      ...formData,
      techStack: formData.techStack.split(",").map((s) => s.trim()),
      highlights: formData.highlights.split(",").map((s) => s.trim()),
    };

    const res = await fetch("http://localhost:5000/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProject),
    });

    const data = await res.json();
    setProjects([...projects, data]);

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
    <section id="projects" className="py-12 px-6 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Projects
        </h2>

        {/* ➕ Add Project Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-12 bg-white dark:bg-gray-800 p-6 rounded shadow-md">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Add New Project</h3>
          <input type="text" name="title" placeholder="Title" required value={formData.title} onChange={handleChange} className="w-full px-3 py-2 border rounded dark:bg-gray-700" />
          <textarea name="description" placeholder="Description" required value={formData.description} onChange={handleChange} className="w-full px-3 py-2 border rounded dark:bg-gray-700" />
          <input type="text" name="techStack" placeholder="Tech Stack (comma-separated)" value={formData.techStack} onChange={handleChange} className="w-full px-3 py-2 border rounded dark:bg-gray-700" />
          <input type="text" name="highlights" placeholder="Highlights (comma-separated)" value={formData.highlights} onChange={handleChange} className="w-full px-3 py-2 border rounded dark:bg-gray-700" />
          <input type="url" name="github" placeholder="GitHub URL" value={formData.github} onChange={handleChange} className="w-full px-3 py-2 border rounded dark:bg-gray-700" />
          <input type="url" name="live" placeholder="Live Site URL" value={formData.live} onChange={handleChange} className="w-full px-3 py-2 border rounded dark:bg-gray-700" />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add Project</button>
        </form>

        {/* 📋 Display Projects */}
        <div className="space-y-10">
          {loading ? (
            <p className="text-center text-gray-600 dark:text-gray-400">Loading projects...</p>
          ) : projects.length > 0 ? (
            projects.map((project) => (
              <div key={project._id} className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 relative">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  {project.highlights?.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  <strong>Tech Stack:</strong> {project.techStack?.join(", ")}
                </p>
                <div className="mt-4 flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">🔗 GitHub</a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">🌐 Live Site</a>
                  )}
                </div>

                {/* ❌ Delete Button */}
                <button onClick={() => handleDelete(project._id)} className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm">
                  🗑 Delete
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 dark:text-gray-400">No projects found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;

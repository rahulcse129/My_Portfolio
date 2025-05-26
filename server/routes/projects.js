const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Get all projects
router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// Add new project
router.post('/', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE project by ID
router.delete('/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Failed to delete project." });
  }
});

module.exports = router;

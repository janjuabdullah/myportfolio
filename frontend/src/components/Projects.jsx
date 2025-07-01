import React, { useState } from 'react';
import './Projects.css';
import ProjectModal from './ProjectModal';

const projects = [
  {
    id: 1,
    title: 'Fire Forest Detection',
    description: 'A deep learning Model system used to identify Fire in Forests.',
    image: 'https://via.placeholder.com/400x300?text=Brain+Tumor+App',
    tech: ['Flask', 'Python', 'OpenCV'],
    category: 'AI',
    github: 'https://github.com/your-username/brain-tumor-app',
    demo: 'https://brain-tumor-demo.com'
  },
  {
    id: 2,
    title: 'Vision Guard',
    description: 'A smart face & uniform detection system for educational premises.',
    image: 'https://via.placeholder.com/400x300?text=Vision+Guard',
    tech: ['React', 'OpenCV', 'ML'],
    category: 'AI',
    github: 'https://github.com/your-username/vision-guard',
    demo: 'https://vision-guard.com'
  },
  {
    id: 3,
    title: 'Wedding Match',
    description: 'Clone of Wedding Match Landing page',
    image: 'https://via.placeholder.com/400x300?text=Virtual+Try-On',
    tech: ['HTML', 'CSS', 'Tailwind'],
    category: 'Frontend',
    github: 'https://github.com/your-username/virtual-try-on',
    demo: 'https://vtry-clone.com'
  }
];

const categories = ['All', 'AI', 'Frontend'];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      {/* Filter Bar */}
      <div className="filter-bar">
        {categories.map(cat => (
          <button
            key={cat}
            className={cat === activeCategory ? 'active' : ''}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((tag, idx) => (
                  <span key={idx}>{tag}</span>
                ))}
              </div>
              <button className="view-btn" onClick={() => setSelectedProject(project)}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;

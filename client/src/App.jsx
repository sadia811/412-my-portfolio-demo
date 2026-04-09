/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
*/
import "./index.css";

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Git",
    "GitHub",
    "Vercel",
    "Render",
  ];

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern personal portfolio built with React to showcase my skills, projects, and contact information.",
      tech: ["React", "CSS", "Vite"],
      live: "https://your-portfolio-link.com",
      github: "https://github.com/yourusername/portfolio",
    },
    {
      title: "MERN Blog App",
      description:
        "A full-stack blog application with authentication, CRUD operations, and MongoDB database integration.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      live: "https://your-blog-link.com",
      github: "https://github.com/yourusername/mern-blog",
    },
    {
      title: "Task Manager App",
      description:
        "A task management app where users can add, update, and delete daily tasks with a clean UI.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      live: "https://your-task-link.com",
      github: "https://github.com/yourusername/task-manager",
    },
  ];

  return (
    <div className="app">
      <header className="navbar">
        <div className="container nav-content">
          <h2 className="logo">YourName</h2>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <p className="intro">Hello, my name is</p>
            <h1>
              Md. Your Name
            </h1>
            <h2>MERN Stack Developer</h2>
            <p className="hero-description">
              I build responsive, modern, and full-stack web applications using
              MongoDB, Express.js, React, and Node.js.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="profile-box">
              <div className="profile-circle">YN</div>
              <h3>Your Name</h3>
              <p>Frontend + Backend Developer</p>
              <span>Based in Bangladesh</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className="section-title">
            <p>Who I Am</p>
            <h2>About Me</h2>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <h3>My Journey</h3>
              <p>
                I am a passionate MERN Stack Developer who enjoys building
                clean, user-friendly, and scalable web applications. I love
                turning ideas into real-world digital products.
              </p>
            </div>

            <div className="about-card">
              <h3>What I Do</h3>
              <p>
                I create full-stack applications with responsive frontend
                designs, secure backend APIs, and database integration using
                MongoDB Atlas.
              </p>
            </div>

            <div className="about-card">
              <h3>My Goal</h3>
              <p>
                My goal is to become a professional software engineer and build
                impactful products that solve real problems for people.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section section-dark">
        <div className="container">
          <div className="section-title">
            <p>My Tech Stack</p>
            <h2>Skills</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <div className="section-title">
            <p>My Work</p>
            <h2>Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-top">
                  <span className="project-badge">Featured</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="project-tech">
                  {project.tech.map((item, techIndex) => (
                    <span key={techIndex}>{item}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section-dark">
        <div className="container">
          <div className="section-title">
            <p>Get In Touch</p>
            <h2>Contact Me</h2>
          </div>

          <div className="contact-box">
            <p>
              I am open to internships, freelance work, and developer
              opportunities. Reach out to me anytime.
            </p>

            <div className="contact-links">
              <a href="mailto:yourmail@gmail.com">yourmail@gmail.com</a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© 2026 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
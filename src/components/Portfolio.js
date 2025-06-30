import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Portfolio = () => {
  const [text, setText] = useState('');
  const welcomeMessage = "Welcome to Saheer's Personal Website";
  const [typingComplete, setTypingComplete] = useState(false);
  const [leftPacmanPosition, setLeftPacmanPosition] = useState(0);
  const [rightPacmanPosition, setRightPacmanPosition] = useState(0);
  const [leftPacmanDirection, setLeftPacmanDirection] = useState('down');
  const [rightPacmanDirection, setRightPacmanDirection] = useState('up');

  const projectsRef = useRef(null);
  const technologiesRef = useRef(null);
  const experienceRef = useRef(null);
  const blogsRef = useRef(null);

  // Typing effect
  useEffect(() => {
    setText('');
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < welcomeMessage.length) {
        setText(welcomeMessage.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTypingComplete(true);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  // Pacman animation
  useEffect(() => {
    const animateInterval = setInterval(() => {
      setLeftPacmanPosition(prev => {
        if (prev >= 90 && leftPacmanDirection === 'down') {
          setLeftPacmanDirection('up');
          return prev - 1;
        }
        if (prev <= 0 && leftPacmanDirection === 'up') {
          setLeftPacmanDirection('down');
          return prev + 1;
        }
        return leftPacmanDirection === 'down' ? prev + 1 : prev - 1;
      });
      setRightPacmanPosition(prev => {
        if (prev >= 90 && rightPacmanDirection === 'down') {
          setRightPacmanDirection('up');
          return prev - 1;
        }
        if (prev <= 0 && rightPacmanDirection === 'up') {
          setRightPacmanDirection('down');
          return prev + 1;
        }
        return rightPacmanDirection === 'down' ? prev + 1 : prev - 1;
      });
    }, 50);
    return () => clearInterval(animateInterval);
  }, [leftPacmanDirection, rightPacmanDirection]);

  const scrollToSection = ref => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // ----- UPDATED TECHNOLOGIES -----
  const technologies = {
    'Programming Languages': [
      'Java', 'Python', 'JavaScript', 'C', 'MIPS Assembly', 'VHDL'
    ],
    'Web Development': [
      'HTML', 'CSS', 'Django', 'Node.js', 'React.js', 'Express.js', 'WebSockets'
    ],
    'Databases & Analytics': [
      'PostgreSQL',
      'MySQL',
      'Data Normalization (3NF, BCNF)',
      'Query Optimization & Indexing (B-Tree)',
      'Triggers & Stored Procedures',
      'Transactional Integrity',
      'Power BI'
    ],
    'Tools & Platforms': [
      'Docker', 'VSCode', 'IntelliJ', 'Github'
    ],
    'Office & Productivity Tools': [
      'MS Word', 'MS Excel', 'MS PowerPoint'
    ]
  };

  return (
    <div className="min-h-screen bg-[#1a1f3c] relative">
      {/* Navigation Bar */}
      <nav className="sticky top-0 bg-[#2a2f4c] border-b border-gray-700 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex gap-6 justify-center text-white">
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="hover:text-gray-300 transition-colors px-4 py-2 rounded-lg hover:bg-[#1a1f3c]"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection(technologiesRef)}
              className="hover:text-gray-300 transition-colors px-4 py-2 rounded-lg hover:bg-[#1a1f3c]"
            >
              Technologies
            </button>
            <button
              onClick={() => scrollToSection(experienceRef)}
              className="hover:text-gray-300 transition-colors px-4 py-2 rounded-lg hover:bg-[#1a1f3c]"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection(blogsRef)}
              className="hover:text-gray-300 transition-colors px-4 py-2 rounded-lg hover:bg-[#1a1f3c]"
            >
              Blogs
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="font-mono text-4xl md:text-6xl text-white mb-12">
            <span className="block">{text}</span>
            <span className={`inline-block ${typingComplete ? 'animate-pulse' : ''}`}>_</span>
          </div>
          <div className="text-gray-100 text-xl md:text-2xl leading-relaxed font-light mb-8 bg-[#2a2f4c] p-8 rounded-xl border border-gray-700">
            Hi! I'm Saheer, a CS student at UB, passionate about turning my code into reality :)) I'm experienced in React, Django, and databases like MongoDB, PostgreSQL, and MySQL. Lately, I've been diving deep into AI/ML and Data Science. Btw, this site is made with React!
            <br /><br />
            Besides showcasing my profile, this site will be my space to share blogs about anything that interests me. Stay tuned!
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/Saheerr"
              className="text-white hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/saheer-rahman-40098728a/"
              className="text-white hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:saheerrahman98@gmail.com"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <section
        ref={technologiesRef}
        className="mb-16 bg-[#2a2f4c] p-8 rounded-xl border border-gray-700 max-w-5xl mx-auto px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          Technologies I am experienced in
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {Object.entries(technologies).map(([category, items]) => (
            <div key={category} className="border-b border-gray-700 pb-6 last:border-0 last:pb-0">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map(tech => (
                  <span key={tech} className="bg-[#1a1f3c] text-white px-4 py-2 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section
        ref={experienceRef}
        className="mb-16 bg-[#2a2f4c] p-8 rounded-xl border border-gray-700 max-w-5xl mx-auto px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Experience</h2>
        <div className="space-y-8">
          <div className="border-l-4 border-[#1a1f3c] pl-6">
            <h3 className="text-xl md:text-2xl font-semibold text-white">Intern at Ontik Technology</h3>
            <p className="text-gray-400 mb-4">Dec 2024 - Apr 2025</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Gaining practical experience in Web Development, AI/ML, and Data Science</li>
              <li>Conducting research on SaaS platforms, focusing on LazyChat</li>
              <li>Contributing to LazyChat's dashboard design</li>
            </ul>
          </div>
          <div className="border-l-4 border-[#1a1f3c] pl-6">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Intern at Center for Natural Resource Studies
            </h3>
            <p className="text-gray-400 mb-4">Oct 2021 - Jan 2022</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Analyzed national projects</li>
              <li>Engaged with senior staff</li>
              <li>Contributed to team discussions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        className="mb-16 bg-[#2a2f4c] p-8 rounded-xl border border-gray-700 max-w-5xl mx-auto px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Location Review Platform */}
          <div className="bg-[#1a1f3c] p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
              Location Review Platform
            </h3>
            <p className="text-gray-400 mb-4">
              Python · Django · JavaScript · Leaflet.js
            </p>
            <a
              href="https://github.com/10Fari10/Project"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 border rounded hover:bg-gray-100 mb-4 inline-block"
            >
              View Project Code
            </a>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Built a dynamic map interface using Leaflet.js for location-based reviews</li>
              <li>Implemented user authentication and media upload functionality</li>
              <li>Created an interactive puzzle-map leaderboard with WebSockets</li>
            </ul>
          </div>

          {/* Real-Time Chat Application */}
          <div className="bg-[#1a1f3c] p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
              Real-Time Chat Application
            </h3>
            <p className="text-gray-400 mb-4">
              JavaScript · Node.js · WebSocket · HTML · CSS
            </p>
            <button
              onClick={() =>
                window.alert(
                  "This is a school project — please contact me at saheerrahman98@gmail.com for the code."
                )
              }
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 mb-4"
            >
              Contact for Code
            </button>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Lightweight chat platform built from scratch (no framework)</li>
              <li>Supports instant messaging, user authentication, and media sharing with minimal latency</li>
            </ul>
          </div>

          {/* Music Streaming Analytics System */}
          <div className="bg-[#1a1f3c] p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
              Music Streaming Analytics System
            </h3>
            <p className="text-gray-400 mb-4">
              PostgreSQL · SQL · ER Modeling · Power BI
            </p>
            <div className="flex space-x-2 mb-4">
              <a
                href="https://app.powerbi.com/view?r=eyJrIjoiZjAyNjczNzUtZTAzNS00M2U3LTgxMGYtZjlkYzQ5ZjZlNDBmIiwidCI6Ijk2NDY0YThhLWY4ZWQtNDBiMS05OWUyLTVmNmI1MGEyMDI1MCIsImMiOjN9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 border rounded hover:bg-gray-100"
              >
                View Power BI Demo
              </a>
              <button
                onClick={() =>
                  window.alert(
                    "This is a school project — please contact me at saheerrahman98@gmail.com for the code."
                  )
                }
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Contact for Code
              </button>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Designed a BCNF-normalized PostgreSQL schema with 10+ entities</li>
              <li>Wrote 30+ advanced SQL queries (joins, subqueries, aggregations)</li>
              <li>Implemented triggers to simulate transaction-failure handling</li>
              <li>Added B-Tree indexing to achieve a 60% query speedup</li>
            </ul>
          </div>

          {/* Personal Portfolio Website */}
          <div className="bg-[#1a1f3c] p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
              Personal Portfolio Website
            </h3>
            <p className="text-gray-400 mb-4">React.js · Tailwind CSS · Next.js</p>
            <a
              href="https://github.com/Saheerr/saheer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 border rounded hover:bg-gray-100 mb-4 inline-block"
            >
              View Project Code
            </a>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Designed and built this responsive portfolio using React and TailwindCSS</li>
              <li>Features smooth scrolling, Pac-Man animations, and a light/dark theme toggle</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Relevant Coursework Section */}
      <section className="mb-16 bg-[#2a2f4c] p-8 rounded-xl border border-gray-700 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Relevant Coursework</h2>
        <div className="space-y-4 text-lg">
          <div className="text-white">CSE 250: Data Structures</div>
          <div className="text-white">CSE 312: Web Applications</div>
          <div className="text-white">CSE 460: Data Models and Query Language</div>
        </div>
      </section>

      {/* Blogs Section */}
      <section
        ref={blogsRef}
        className="mb-16 bg-[#2a2f4c] p-8 rounded-xl border border-gray-700 max-w-5xl mx-auto px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Blogs</h2>
        <div className="text-white text-xl md:text-2xl text-center">Upcoming!</div>
      </section>

      {/* Pacman Animation */}
      <div
        className="fixed left-8 top-0 bottom-0 w-8 z-50"
        style={{ pointerEvents: 'none' }}
      >
        <div
          className="absolute"
          style={{
            top: `${leftPacmanPosition}%`,
            fontSize: '3rem',
            transform: 'translateY(-50%)',
          }}
        >
          👾
        </div>
      </div>
      <div
        className="fixed right-8 top-0 bottom-0 w-8 z-50"
        style={{ pointerEvents: 'none' }}
      >
        <div
          className="absolute"
          style={{
            top: `${rightPacmanPosition}%`,
            fontSize: '3rem',
            transform: 'translateY(-50%)',
          }}
        >
          👾
        </div>
      </div>

      <div className="h-16 bg-[#1a1f3c]"></div>
    </div>
  );
};

export default Portfolio;

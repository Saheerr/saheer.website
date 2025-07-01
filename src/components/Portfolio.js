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

  const technologies = {
    'Programming Languages': ['Java', 'Python', 'JavaScript', 'C', 'MIPS Assembly', 'VHDL'],
    'Web Development': ['HTML', 'CSS', 'Django', 'Node.js', 'React.js', 'Express.js', 'WebSockets'],
    'Databases & Analytics': [
      'PostgreSQL',
      'MySQL',
      'Data Normalization (3NF, BCNF)',
      'Query Optimization & Indexing (B-Tree)',
      'Triggers & Stored Procedures',
      'Transactional Integrity',
      'Power BI'
    ],
    'Tools & Platforms': ['Docker', 'VSCode', 'IntelliJ', 'Github'],
    'Office & Productivity Tools': ['MS Word', 'MS Excel', 'MS PowerPoint']
  };

  return (
    <div className="min-h-screen bg-[#1a1f3c] relative">
      <nav className="sticky top-0 bg-[#2a2f4c] border-b border-gray-700 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex gap-6 justify-center text-white">
            <button onClick={() => scrollToSection(projectsRef)} className="hover:text-gray-300 transition-colors px-4 py-2 rounded-lg hover:bg-[#1a1f3c]">Projects</button>
            <button onClick={() => scrollToSection(technologiesRef)} className="hover:text-gray-300 transition-colors px-4 py-2 rounded-lg hover:bg-[#1a1f3c]">Technologies</button>
            <button onClick={() => scrollToSection(experienceRef)} className="hover:text-gray-300 transition-colors px-4 py-2 rounded-lg hover:bg-[#1a1f3c]">Experience</button>
            <button onClick={() => scrollToSection(blogsRef)} className="hover:text-gray-300 transition-colors px-4 py-2 rounded-lg hover:bg-[#1a1f3c]">Blogs</button>
          </div>
        </div>
      </nav>

      <div className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="font-mono text-4xl md:text-6xl text-white mb-12">
            <span className="block">{text}</span>
            <span className={`inline-block ${typingComplete ? 'animate-pulse' : ''}`}>_</span>
          </div>
          <div className="text-gray-100 text-xl md:text-2xl leading-relaxed font-light mb-4 bg-[#2a2f4c] p-8 rounded-xl border border-gray-700">
            Hi! I'm Saheer, a Computer Science student at UB with a minor in Economics, passionate about leveraging data science and machine learning to solve real-world economic problems while retaining my full-stack web development expertise. I excel in front-end frameworks like React and back-end technologies like Django and Node.js, and I have extensive database experience with MongoDB, PostgreSQL, and MySQL.
            <br /><br />
            This site showcases my projects, alongside research articles and blog posts on economic topics that involve data analysis and visualization, balanced with my web development work. Check back often for new insights!
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/Saheerr" className="text-white hover:text-gray-300 transition-colors" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/saheer-rahman-40098728a/" className="text-white hover:text-gray-300 transition-colors" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
            <a href="mailto:saheerrahman98@gmail.com" className="text-white hover:text-gray-300 transition-colors"><Mail size={24} /></a>
          </div>
          <a href="/Saheer Rahman Resume 2025.pdf" download className="mt-4 inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">Download Resume</a>
        </div>
      </div>

      <section ref={technologiesRef} className="mb-16 bg-[#2a2f4c] p-8 rounded-xl border border-gray-700 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Technologies I am experienced in</h2>
        <div className="grid grid-cols-1 gap-8">
          {Object.entries(technologies).map(([category, items]) => (
            <div key={category} className="border-b border-gray-700 pb-6 last:border-0 last:pb-0">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">{category}</h3>
              <div className="flex flex-wrap gap-2">{items.map(tech => (<span key={tech} className="bg-[#1a1f3c] text-white px-4 py-2 rounded-full text-sm">{tech}</span>))}</div>
            </div>
          ))}
        </div>
      </section>

      <section ref={experienceRef} className="mb-16 bg-[#2a2f4c] p-8 rounded-xl border border-gray-700 max-w-5xl mx-auto px-6">
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
            <h3 className="text-xl md:text-2xl font-semibold text-white">Intern at Center for Natural Resource Studies</h3>
            <p className="text-gray-400 mb-4">Oct 2021 - Jan 2022</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Analyzed national projects</li>
              <li>Engaged with senior staff</li>
              <li>Contributed to team discussions</li>
            </ul>
          </div>
        </div>
      </section>

      <section ref={projectsRef} className="mb-16 bg-[#2a2f4c] p-8 rounded-xl border border-gray-700 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white



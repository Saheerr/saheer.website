import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Portfolio = () => {
  const [text, setText] = useState('');
  const welcomeMessage = "Welcome to Saheer's Personal Website";
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    setText(''); // Reset text at start
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

  return (
    <div className="min-h-screen bg-[#1a1f3c]">
      {/* Hero Section with Terminal Effect Name */}
      <div className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="font-mono text-4xl md:text-6xl text-white">
            <span className="block">> {text}</span>
            <span className={`inline-block ${typingComplete ? 'animate-pulse' : ''}`}>_</span>
          </div>
          
          <div className="mt-8 flex gap-4">
            <a href="https://github.com/Saheerr" className="text-white hover:text-gray-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/saheer-rahman-40098728a/" className="text-white hover:text-gray-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:saheerrahman98@gmail.com" className="text-white hover:text-gray-300">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-white">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'JavaScript', 'C', 'MIPS Assembly', 'VHDL'].map(skill => (
                  <span key={skill} className="bg-[#2a2f4c] text-white px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Web Development</h3>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'Django', 'Node.js', 'React.js', 'Express.js', 'Websockets'].map(skill => (
                  <span key={skill} className="bg-[#2a2f4c] text-white px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-white">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-[#2a2f4c] pl-4">
              <h3 className="text-xl font-semibold text-white">Intern at Ontik Technology</h3>
              <p className="text-gray-400 mb-2">Dec 2024 - Apr 2025</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Gained practical experience in Web Development, AI/ML, and Data Science</li>
                <li>Conducted research on SaaS platforms, focusing on LazyChat</li>
                <li>Contributed to LazyChat's dashboard design</li>
              </ul>
            </div>
            <div className="border-l-4 border-[#2a2f4c] pl-4">
              <h3 className="text-xl font-semibold text-white">Intern at Center for Natural Resource Studies</h3>
              <p className="text-gray-400 mb-2">Oct 2021 - Jan 2022</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Analyzed national projects</li>
                <li>Engaged with senior staff</li>
                <li>Contributed to team discussions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#2a2f4c] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">Location Review Platform</h3>
              <p className="text-gray-400 mb-4">Python, JavaScript, HTML, CSS, Django, PostgreSQL</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Built an intuitive review system with likes and media uploads</li>
                <li>Interactive map showcasing locations and user reviews</li>
                <li>Implemented secure user authentication</li>
              </ul>
            </div>
            
            <div className="bg-[#2a2f4c] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">Real-time Chat Application</h3>
              <p className="text-gray-400 mb-4">Python, JavaScript, MongoDB, Websockets, Docker</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Developed real-time chat with secure authentication</li>
                <li>Implemented media upload and instant messaging</li>
              </ul>
            </div>

            <div className="bg-[#2a2f4c] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">Travel Booking System</h3>
              <p className="text-gray-400 mb-4">React.js, Node.js, Express.js, PostgreSQL</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Travel booking platform with user authentication</li>
                <li>Integration with Amadeus API for flight booking</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
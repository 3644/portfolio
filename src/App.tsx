import React, { useState, useEffect } from 'react';
import { Terminal, Github, Mail, FileText, ExternalLink, Database, Code2, BookOpen, Server, Cpu, Cloud } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [currentQuery, setCurrentQuery] = useState(0);
  
  const queries = [
    "SELECT name, skills, passion FROM developer WHERE id = 1;",
    "SELECT * FROM projects ORDER BY completion_date DESC;",
    "SELECT experience, duration FROM work_history;"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuery((prev) => (prev + 1) % queries.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const TabButton = ({ id, icon: Icon, label }: { id: string; icon: any; label: string }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
        activeTab === id 
          ? 'bg-green-600 text-white' 
          : 'hover:bg-green-100 text-gray-700'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="matrix-bg text-green-400 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="terminal-window mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <Terminal className="ml-4" />
            </div>
            <div className="space-y-2">
              <p className="command-prompt typing-effect">{queries[currentQuery]}</p>
              <div className="query-result mt-4 text-sm opacity-75">
                {currentQuery === 0 && (
                  <div className="grid grid-cols-3 gap-4 text-xs">
                    <div>name: "Baptiste Reiter"</div>
                    <div>skills: ["C", "C++", "SQL","Python","Web"]</div>
                    <div>passion: "Software Engineering"</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-12 px-6">
        <nav className="flex flex-wrap gap-4 mb-8">
          <TabButton id="about" icon={Database} label="SELECT * FROM about" />
          <TabButton id="projects" icon={Code2} label="SELECT * FROM projects" />
          <TabButton id="experience" icon={FileText} label="SELECT * FROM experience" />
        </nav>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {activeTab === 'about' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <Server className="mr-2" />
                About Me
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                    alt="Code illustration"
                    className="rounded-lg shadow-md"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg flex items-end">
                    <div className="p-4 text-white">
                      <div className="font-mono text-sm">
                        <span className="text-green-400">$</span> whoami
                      </div>
                      <div className="font-mono text-sm">
                        <span className="text-green-400">&gt;</span> Computer Science Student
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="terminal-window">
                    <p className="text-green-400 mb-2">$ cat about.txt</p>
                    <p className="text-gray-300">
                    Hi, I'm Baptiste Reiter, a computer science student at CESI Nancy with a passion for software development, databases, and network systems. My experience includes web development (HTML, CSS, JavaScript, PHP, SQL), programming in C, C++, and Python, as well as embedded systems and network simulations. I thrive on problem-solving and building efficient, scalable solutions.  
Let's connect and create something great!  
                    </p>
                  </div>
                  <div className="flex space-x-4 mt-4">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                      <Github size={20} />
                      <span>GitHub</span>
                    </a>
                    <a href="mailto:baptistereiter2005@gmail.com"
                      className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                      <Mail size={20} />
                      <span>Contact</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <Cpu className="mr-2" />
                Projects
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Network System Simulation",
                    description: "Installed and simulated a network system for a fictitious city using Cisco Packet Tracer, configuring and testing network infrastructure.",
                    icon: Cloud
                  },
                  {
                    title: "Game of Life Development",
                    description: "Developed a simulation of the 'Game of Life' using C++, implementing algorithmic logic to simulate cellular automata.",
                    icon: Code2
                  },
                  {
                    title: "Weather Station Prototype",
                    description: "Developed an embedded prototype for measuring and analyzing environmental data using C Arduino.",
                    icon: Cpu
                  },
                  {
                    title: "Security and Control Prototype",
                    description: "Designed a prototype for security and control of a safe box using C Arduino.",
                    icon: Server
                  }
                ].map((project, index) => (
                  <div key={index} className="card-hover border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <project.icon className="text-green-600 mr-2" size={24} />
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex items-center space-x-2 text-green-600">
                      <ExternalLink size={18} />
                      <a href="#" className="hover:underline">View Project</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <FileText className="mr-2" />
                Experience
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "French Army",
                    role: "Reservist",
                    date: "July 2023",
                    icon: Server
                  },
                  {
                    title: "Brasserie La Lorraine",
                    role: "Waiter",
                    location: "Luxembourg City",
                    icon: Cloud
                  },
                  {
                    title: "InnoClean Luxembourg",
                    role: "Janitor",
                    date: "August 2022 and July 2024",
                    icon: Database
                  }
                ].map((exp, index) => (
                  <div key={index} className="card-hover border-l-4 border-green-600 pl-4 py-4 bg-gray-50 rounded-r-lg">
                    <div className="flex items-center mb-2">
                      <exp.icon className="text-green-600 mr-2" size={20} />
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                    </div>
                    <p className="text-gray-600">
                      {exp.role} {exp.location && `- ${exp.location}`} {exp.date && `• ${exp.date}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <BookOpen size={24} />
              <span className="font-mono">Portfolio SQL Edition v2.0</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-400 transition-colors"><Github size={24} /></a>
              <a href="#" className="hover:text-green-400 transition-colors"><Mail size={24} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
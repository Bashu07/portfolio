import { useState, useEffect } from "react";
import { Download, Mail, Phone, MapPin, Github, Linkedin, Briefcase, GraduationCap, Code, Award, ExternalLink } from "lucide-react";

// Reusable Card Component - moved outside to prevent recreation on every render
const Card = ({ icon, title, children }) => (
  <div className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-blue-300 dark:hover:border-gray-700 hover:shadow-lg dark:hover:shadow-none transition-all duration-300">
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
        {icon}
      </div>
      {title}
    </h3>
    {children}
  </div>
);

const Resume = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 150);
  }, []);

  const handleDownload = () => {
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Bashu_Awasthi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = {
    technical: [
      "HTML5, CSS3, JavaScript,TypeScript",
      "React JS, Tailwind CSS",
      "React Hooks & Context API",
      "State Management (Redux)",
      "Node.js, Express.js",
      "MongoDB, Mongoose ORM",
      "RESTful API Development",
      "Authentication (JWT, Cookies)",
      "Git & GitHub, Postman",
      "Vercel Deployment"
    ],
    soft: [
      "Problem Solving",
      "Debugging",
      "Clean Code Writing",
      "Communication & Teamwork",
      "Learning Attitude"
    ]
  };

  const experience = {
    title: "Web Developer Intern",
    duration: "DEC 2024 - Mar 2025",
    responsibilities: [
      "Built responsive web interfaces using React.js and Tailwind CSS",
      "Developed REST APIs using Node.js and integrated with frontend",
      "Collaborated with senior developers using Git/GitHub and Agile practices",
      "Participated in daily standups and code reviews"
    ]
  };

  const education = {
    degree: "Bachelors in Computer Science and Information Technology",
    university: "TRIBHUVAN UNIVERSITY",
    duration: "2019-2024"
  };

  const projects = [
    {
      name: "E-Commerce Website (GreenCart)",
      tech: "React, Node.js, Express.js, MongoDB, Clerk Auth, JWT",
      description: "Full-stack e-commerce platform featuring product listings, cart, and search.",
      links: {
        live: "https://greencart-frontend-jade.vercel.app",
        github: "https://github.com/Bashu07/GreenCart"
      }
    },
    {
      name: "Social Media App (PingUp)",
      tech: "React, Node.js, Express.js, MongoDB, JWT, Cloudinary, Inngest",
      description: "Full-featured social media app with login, posting, likes, comments, real-time chat.",
      links: {
        live: "https://pingup-nu.vercel.app",
        github: "https://github.com/Bashu07/Pingup"
      }
    },
    {
      name: "Authentication System",
      tech: "React, Node.js, Express.js, MongoDB, Clerk Auth, JWT, bcrypt",
      description: "Secure user authentication with sign-up, login, logout, and email verification.",
      links: {
        live: "https://authentication-app-two-beige.vercel.app",
        github: "https://github.com/Bashu07/Authentication-app"
      }
    }
  ];

  return (
    <section className="relative min-h-screen px-6 py-20 overflow-hidden bg-gray-50 dark:bg-black text-gray-800 dark:text-gray-200">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className={`relative z-10 max-w-5xl mx-auto transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full mb-6">
            <Briefcase size={24} className="text-blue-500 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-500 dark:text-blue-400 uppercase">My Resume</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-100 dark:to-purple-200 bg-clip-text text-transparent mb-6 leading-tight">
            Resume
          </h1>

          <div className="mx-auto w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_20px_#3b82f680] mb-8"></div>

          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-[0_0_30px_#3b82f680] transform hover:scale-105 transition-all duration-300"
          >
            <Download size={20} /> Download Resume PDF
          </button>
        </div>

        {/* Header Info */}
        <div className="text-center pb-8 border-b border-gray-300 dark:border-gray-800 mb-10">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">BASHU DEV AWASTHI</h2>
          <p className="text-xl text-blue-500 dark:text-blue-400 font-semibold mb-6">FULLSTACK DEVELOPER</p>

          <div className="flex flex-wrap justify-center text-gray-600 dark:text-gray-400 gap-4 text-sm">
            <a href="tel:+9779842999420" className="flex items-center gap-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <Phone size={16} /> +977 9842999420
            </a>
            <a href="mailto:bawasthi089@gmail.com" className="flex items-center gap-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <Mail size={16} /> bawasthi089@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> Kalanki, Kathmandu
            </span>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <a href="https://github.com/Bashu07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-all">
              <Github size={16} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/bashu-awasthi-368a2228a" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-all">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>

        {/* Resume Content */}
        <div className="space-y-10">

          {/* Profile */}
          <Card icon={<Code size={18} className="text-white" />} title="PROFILE">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Full-Stack Developer skilled in MERN, building production-ready apps with clean code and scalable architecture. Strong in React, Node.js, MongoDB, and API development. Passionate about learning new technologies and modern tools. Looking for opportunities to grow and contribute to real-world projects.
            </p>
          </Card>

          {/* Work Experience */}
          <Card icon={<Briefcase size={18} className="text-white" />} title="WORK EXPERIENCE">
            <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <div className="flex justify-between mb-3">
                <h4 className="text-xl font-semibold text-blue-500 dark:text-blue-400">{experience.title}</h4>
                <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full">{experience.duration}</span>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                {experience.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Education */}
          <Card icon={<GraduationCap size={18} className="text-white" />} title="EDUCATION">
            <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{education.degree}</h4>
                  <p className="text-blue-500 dark:text-blue-400">{education.university}</p>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full">{education.duration}</span>
              </div>
            </div>
          </Card>

          {/* Skills */}
          <Card icon={<Award size={18} className="text-white" />} title="SKILLS">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Technical */}
              <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-blue-500 dark:text-blue-400 mb-3">Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-xs text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {/* Soft */}
              <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-purple-500 dark:text-purple-400 mb-3">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-xs text-gray-700 dark:text-gray-300 hover:border-purple-500 hover:text-purple-500 dark:hover:text-purple-400 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Projects */}
          <Card icon={<Code size={18} className="text-white" />} title="PROJECTS">
            <div className="space-y-4">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-blue-300 dark:hover:border-gray-700 hover:shadow-md dark:hover:shadow-none transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{project.name}</h4>
                    <div className="flex gap-2">
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-all" title="Live Demo">
                        <ExternalLink size={16} />
                      </a>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-all" title="GitHub">
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-blue-500 dark:text-blue-400 font-medium mb-2">Tech: {project.tech}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Bottom Download Button */}
          <div className="text-center pt-8 border-t border-gray-300 dark:border-gray-800">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-[0_0_30px_#3b82f680] transform hover:scale-105 transition-all duration-300"
            >
              <Download size={20} /> Download PDF Version
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;

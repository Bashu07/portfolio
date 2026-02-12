import { useState, useEffect } from "react";
import { ExternalLink, Github, ShoppingCart, MessageCircle, Shield, Code2, Sparkles, FileText } from "lucide-react";

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 150);
  }, []);

  const projects = [
    {
      id: 1,
      title: "GreenCart",
      subtitle: "E-Commerce Platform",
      description: "A full-stack e-commerce platform featuring product listings, shopping cart, and product searching with secure authentication.",
      icon: <ShoppingCart size={28} />,
      color: "from-green-500 to-emerald-500",
      tech: ["React", "Node.js", "MongoDB", "Clerk Auth", "JWT"],
      features: [
        "Product search & filtering",
        "Shopping cart management",
        "Secure authentication",
        "MongoDB database"
      ],
      liveUrl: "https://greencart-frontend-jade.vercel.app",
      githubUrl: "https://github.com/Bashu07/GreenCart",
      // Placeholder image - replace with your actual screenshot URL
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop"
    },
    {
      id: 2,
      title: "PingUp",
      subtitle: "Social Media Platform",
      description: "Full-featured social media platform with user authentication, posting, likes, comments, and real-time messaging capabilities.",
      icon: <MessageCircle size={28} />,
      color: "from-blue-500 to-cyan-500",
      tech: ["React", "Node.js", "MongoDB", "JWT", "Cloudinary"],
      features: [
        "User profiles & posts",
        "Real-time messaging",
        "Likes & comments",
        "Cloud image storage"
      ],
      liveUrl: "https://pingup-nu.vercel.app",
      githubUrl: "https://github.com/Bashu07/Pingup",
      // Placeholder image - replace with your actual screenshot URL
      image: "projects/pingup.png"
    },
    {
      id: 3,
      title: "Authentication System",
      subtitle: "Secure User Management",
      description: "Comprehensive authentication system with sign-up, login, logout functionalities, and email verification using OTP.",
      icon: <Shield size={28} />,
      color: "from-purple-500 to-pink-500",
      tech: ["React", "Node.js", "MongoDB", "JWT", "bcrypt"],
      features: [
        "User registration & login",
        "Email OTP verification",
        "Password encryption",
        "JWT authentication"
      ],
      liveUrl: "https://authentication-app-two-beige.vercel.app",
      githubUrl: "https://github.com/Bashu07/Authentication-app",
      // Placeholder image - replace with your actual screenshot URL
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=500&fit=crop"
    },
    {
      id: 4,
      title: "QuickBlog",
      subtitle: "AI-Powered Blog Generator",
      description: "An intelligent blog generation platform that leverages AI to create high-quality blog content automatically with customizable topics.",
      icon: <FileText size={28} />,
      color: "from-orange-500 to-red-500",
      tech: ["React", "Node.js", "AI/ML", "MongoDB", "OpenAI API"],
      features: [
        "AI-powered content generation",
        "Topic customization",
        "commenting on the post",
        "Auto formatting & styling"
      ],
      liveUrl: "https://quick-blog-client-nu.vercel.app/",
      githubUrl: "https://github.com/Bashu07/QuickBlog",
      // Placeholder image - replace with your actual screenshot URL
      image: "/projects/Quickblog.png"
    }
  ];

  return (
    <section className="relative min-h-screen bg-black text-gray-200 px-6 py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full mb-6">
            <Code2 size={24} className="text-blue-400" />
            <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase">My Work</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6 leading-tight">
            Featured Projects
          </h1>
          
          <div className="mx-auto w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_20px_#3b82f680] mb-6"></div>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Explore my latest full-stack projects showcasing modern web technologies, 
            clean architecture, and production-ready implementations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group relative bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-gray-800 rounded-3xl overflow-hidden
              transition-all duration-500 hover:border-gray-700
              ${hoveredProject === project.id ? 'shadow-[0_0_50px_rgba(59,130,246,0.3)] scale-[1.02] -translate-y-2' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
                
                {/* Icon Badge */}
                <div className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-br ${project.color} shadow-lg
                  group-hover:scale-110 transition-transform duration-500`}>
                  <div className="text-white">
                    {project.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 space-y-4">
                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-400 font-semibold">{project.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={16} className="text-purple-400" />
                    <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wide">Tech Stack</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-xs text-gray-300
                          hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Code2 size={16} className="text-green-400" />
                    <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wide">Key Features</h4>
                  </div>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-400 group/item"
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 group-hover/item:bg-purple-500 transition-colors duration-300 flex-shrink-0"></div>
                        <span className="text-xs group-hover/item:text-gray-300 transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-xl
                      hover:shadow-[0_0_30px_#3b82f680] transform hover:scale-105 transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-transparent border-2 border-gray-700 text-gray-300 text-sm font-semibold rounded-xl
                      hover:border-blue-500 hover:text-blue-400 hover:shadow-[0_0_20px_#3b82f640] transform hover:scale-105 transition-all duration-300"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-3">Want to see more?</h3>
            <p className="text-gray-400 mb-6">Check out my GitHub for more projects and contributions</p>
            <a
              href="https://github.com/Bashu07"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full
                hover:shadow-[0_0_30px_#3b82f680] transform hover:scale-105 transition-all duration-300"
            >
              <Github size={20} />
              Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
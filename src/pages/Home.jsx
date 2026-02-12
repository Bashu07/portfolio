import { useState, useEffect } from "react";
import { ArrowRight, Code, Sparkles, Github, Linkedin, Mail, Download } from "lucide-react";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const roles = ["Full Stack Developer", "Software Developer", "Problem Solver", "Tech Enthusiast"];

  useEffect(() => {
    setTimeout(() => setVisible(true), 150);
    
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen px-6 py-20 overflow-hidden bg-gray-50 dark:bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 dark:bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 text-blue-500/20 dark:text-blue-500/10 text-6xl font-mono animate-float">{'<>'}</div>
        <div className="absolute top-40 right-20 text-purple-500/20 dark:text-purple-500/10 text-6xl font-mono animate-float" style={{ animationDelay: "1s" }}>{'{}'}</div>
        <div className="absolute bottom-40 left-20 text-pink-500/20 dark:text-pink-500/10 text-6xl font-mono animate-float" style={{ animationDelay: "2s" }}>{'[]'}</div>
        <div className="absolute bottom-20 right-10 text-cyan-500/20 dark:text-cyan-500/10 text-6xl font-mono animate-float" style={{ animationDelay: "1.5s" }}>{'()'}</div>
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full">
              <Sparkles size={18} className="text-blue-500 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-500 dark:text-blue-400">Welcome to my portfolio</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Bashu Dev Awasthi</span>
              </h1>
              <div className="h-20 md:h-24">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-700 dark:text-gray-300 transition-all duration-500">
                  {roles[textIndex]}
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              Passionate about building modern web applications with <span className="text-blue-500 dark:text-blue-400 font-semibold">React</span>, <span className="text-green-500 dark:text-green-400 font-semibold">Node.js  Expresss.js</span>, and <span className="text-purple-500 dark:text-purple-400 font-semibold">MongoDB</span>. I create clean code, build scalable solutions that make a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Bashu07"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-[0_0_30px_#3b82f680] transform hover:scale-105 transition-all duration-300"
              >
                View My Work <ArrowRight size={20} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-semibold rounded-full border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transform hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Connect with me:</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Bashu07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-500 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/bashu-awasthi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-500 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:bawasthi089@gmail.com"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-500 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Developer Illustration */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
              
              {/* Main Circle with Code Animation */}
              <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-full border-4 border-blue-500/30 p-8 backdrop-blur-sm">
                <div className="aspect-square rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center overflow-hidden relative">
                  
                  {/* Animated Code Lines */}
                  <div className="absolute inset-0 p-8 font-mono text-xs text-gray-400 dark:text-gray-600 space-y-2">
                    <div className="animate-slide-right" style={{ animationDelay: "0s" }}>
                      <span className="text-purple-500">const</span> <span className="text-blue-500">developer</span> = {'{'}
                    </div>
                    <div className="animate-slide-right pl-4" style={{ animationDelay: "0.2s" }}>
                      name: <span className="text-green-500">'Bashu'</span>,
                    </div>
                    <div className="animate-slide-right pl-4" style={{ animationDelay: "0.4s" }}>
                      skills: [<span className="text-orange-500">'React'</span>, <span className="text-orange-500">'Node'</span>],
                    </div>
                    <div className="animate-slide-right pl-4" style={{ animationDelay: "0.6s" }}>
                      passion: <span className="text-green-500">'Coding'</span>,
                    </div>
                    <div className="animate-slide-right" style={{ animationDelay: "0.8s" }}>{'}'}</div>
                    <div className="animate-slide-right mt-4" style={{ animationDelay: "1s" }}>
                      <span className="text-purple-500">function</span> <span className="text-blue-500">buildAmazing</span>() {'{'}
                    </div>
                    <div className="animate-slide-right pl-4" style={{ animationDelay: "1.2s" }}>
                      <span className="text-purple-500">return</span> <span className="text-green-500">'Products'</span>;
                    </div>
                    <div className="animate-slide-right" style={{ animationDelay: "1.4s" }}>{'}'}</div>
                  </div>

                  {/* Center Icon */}
                  <div className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-2xl">
                    <Code size={64} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg animate-bounce">
                React
              </div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg animate-bounce" style={{ animationDelay: "0.5s" }}>
                Node
              </div>
              <div className="absolute top-1/2 -right-12 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-lg animate-bounce" style={{ animationDelay: "1s" }}>
                Mongo
              </div>
            </div>
          </div>

        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { label: "Projects", value: "5+" },
            { label: "Technologies", value: "15+" },
            { label: "Learning Experience", value: "2+ Years" },
            { label: "Coffee Cups", value: "∞" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-gray-700 hover:shadow-lg dark:hover:shadow-none transform hover:scale-105 transition-all duration-300"
              style={{ animation: `fadeInUp 0.6s ease-out ${0.5 + index * 0.1}s both` }}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-slide-right {
          animation: slide-right 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Home;
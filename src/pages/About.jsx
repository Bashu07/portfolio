import { useState, useEffect } from "react";
import { User, Code2, Heart, Target, Lightbulb, Rocket, Coffee, Globe, MapPin, Briefcase, Mail } from "lucide-react";

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 150);
  }, []);

  const interests = [
    { icon: <Code2 size={24} />, title: "Clean Code", desc: "Writing maintainable and scalable code" },
    { icon: <Lightbulb size={24} />, title: "Problem Solving", desc: "Finding elegant solutions to complex problems" },
    { icon: <Rocket size={24} />, title: "Innovation", desc: "Exploring new technologies and frameworks" },
    { icon: <Heart size={24} />, title: "Fixing bugs", desc: "fixing the bugs and error from the code" }
  ];

  const values = [
    { icon: <Target size={24} />, title: "Goal-Oriented", desc: "Focused on delivering results and meeting objectives" },
    { icon: <Coffee size={24} />, title: "Persistent", desc: "Never giving up until the solution is found" },
    { icon: <Heart size={24} />, title: "Passionate", desc: "Genuinely love what I do and always eager to learn" },
    { icon: <Globe size={24} />, title: "Collaborative", desc: "Believe in teamwork and knowledge sharing" }
  ];

  return (
    <section className="relative min-h-screen px-6 py-20 overflow-hidden bg-gray-50 dark:bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className={`relative z-10 max-w-6xl mx-auto transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full mb-6">
            <User size={24} className="text-blue-500 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-500 dark:text-blue-400 uppercase tracking-wide">Get to Know Me</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-100 dark:to-purple-200 bg-clip-text text-transparent mb-6 leading-tight">
            About Me
          </h1>

          <div className="mx-auto w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_20px_#3b82f680] mb-8"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Enhanced Profile Card */}
          <div className="lg:col-span-1">
            <div className="relative group">
              {/* Animated gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
              
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 sticky top-24">
                {/* Profile Image with enhanced effects */}
                <div className="relative w-52 h-52 mx-auto mb-6 group/image">
                  {/* Outer glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-40 group-hover/image:opacity-70 transition-opacity duration-500"></div>
                  
                  {/* Rotating gradient ring */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-75 group-hover/image:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>
                  
                  {/* Image container */}
                  <div className="relative w-full h-full rounded-full p-1 bg-white dark:bg-gray-900">
                    <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-white dark:ring-gray-900 shadow-2xl">
                      <img 
                        src="../src/assets/profile.jpg" 
                        className="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-500" 
                        alt="Bashu Dev Awasthi" 
                      />
                    </div>
                  </div>
                  
                  {/* Status indicator */}
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg">
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                </div>
                
                {/* Name and Title */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-100 dark:to-purple-200 bg-clip-text text-transparent mb-2">
                    Bashu Dev Awasthi
                  </h2>
                  <p className="text-blue-500 dark:text-blue-400 font-semibold mb-1">Full Stack Developer</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Available for work</span>
                  </div>
                </div>

                {/* Info badges */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-lg border border-blue-200 dark:border-blue-900/50 hover:scale-105 transition-transform duration-300">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Kathmandu, Nepal</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border border-purple-200 dark:border-purple-900/50 hover:scale-105 transition-transform duration-300">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <Briefcase size={16} className="text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">FullStack Developer</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 rounded-lg border border-pink-200 dark:border-pink-900/50 hover:scale-105 transition-transform duration-300">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                      <Code2 size={16} className="text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">MERN Stack Expert</span>
                  </div>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-3 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-1">5+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
                  </div>
                  <div className="text-center border-x border-gray-200 dark:border-gray-800">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-1">1+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Exp. Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-1">10+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Tech Stack</div>
                  </div>
                </div>

                {/* CTA Button */}
                <a 
                  href="mailto:bawasthi089@gmail.com"
                  className="mt-6 flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-[0_0_30px_#3b82f680] transform hover:scale-105 transition-all duration-300"
                >
                  <Mail size={18} />
                  Get In Touch
                </a>
              </div>
            </div>
          </div>

          {/* Story Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* My Story */}
            <div className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-blue-300 dark:hover:border-gray-700 hover:shadow-xl dark:hover:shadow-none transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <User size={20} className="text-white" />
                </div>
                My Story
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Hello! I'm Bashu, a passionate Full Stack Developer with a strong foundation in the MERN stack. My journey into web development started during my Bachelor's degree in Computer Science and Information Technology at Tribhuvan University, where I discovered my love for creating digital solutions.
                </p>
                <p>
                  What drives me is the ability to transform ideas into functional, user-friendly applications. I specialize in building production-ready apps with clean, scalable code and modern architecture. From designing intuitive frontends with React to developing robust backends with Node.js and Express, I enjoy every aspect of the development process.
                </p>
                <p>
                  Currently working as a FullStack software developer I'm gaining hands-on experience in building real-world applications, collaborating with teams, and following professional development practices. Each project teaches me something new, and I'm always excited to tackle new challenges.
                </p>
              </div>
            </div>

            {/* What I Love */}
            <div className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-blue-300 dark:hover:border-gray-700 hover:shadow-xl dark:hover:shadow-none transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Heart size={20} className="text-white" />
                </div>
                What I Love Doing
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {interests.map((item, index) => (
                  <div
                    key={item.title}
                    className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
                    style={{ animation: `fadeIn 0.5s ease-out ${0.3 + index * 0.1}s both` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white mb-3">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-blue-300 dark:hover:border-gray-700 hover:shadow-xl dark:hover:shadow-none transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <Target size={20} className="text-white" />
            </div>
            Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
                style={{ animation: `fadeInUp 0.5s ease-out ${0.3 + index * 0.1}s both` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
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
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradient-xy {
          0%, 100% {
            background-size: 400% 400%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-gradient-xy {
          animation: gradient-xy 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
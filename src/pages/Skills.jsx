import { useState, useEffect } from "react";
import { Code, Sparkles, Zap, Award, TrendingUp, CheckCircle } from "lucide-react";

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setTimeout(() => setVisible(true), 150);
  }, []);

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: <Code size={24} />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React JS",
        "Tailwind CSS",
        "React Hooks & Context API",
        "State Management (Redux)"
      ]
    },
    backend: {
      title: "Backend Development",
      icon: <Zap size={24} />,
      color: "from-purple-500 to-pink-500",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Postgress SQL",
        "Mongoose ORM",
        "RESTful API Development",
        "Authentication & Authorization (JWT)",
        "Middleware & Error Handling"
      ]
    },
    tools: {
      title: "Tools & Technologies",
      icon: <Sparkles size={24} />,
      color: "from-orange-500 to-red-500",
      skills: [
        "Git & GitHub",
        "Postman",
        "Docker and container",
        "Vercel Deployment",
        "Clerk Authentication",
        "Cloudinary",
        "Inngest"
      ]
    },
    soft: {
      title: "Soft Skills",
      icon: <Award size={24} />,
      color: "from-green-500 to-emerald-500",
      skills: [
        "Problem Solving",
        "Debugging",
        "Clean Code Writing",
        "Communication & Teamwork",
        "Learning Attitude"
      ]
    }
  };

  const getFilteredSkills = () => {
    if (activeCategory === "all") {
      return Object.entries(skillCategories);
    }
    return [[activeCategory, skillCategories[activeCategory]]];
  };

  return (
    <section className="relative min-h-screen px-6 py-20 overflow-hidden bg-gray-50 dark:bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 dark:bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className={`relative z-10 max-w-6xl mx-auto transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full mb-6">
            <TrendingUp size={24} className="text-blue-500 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-500 dark:text-blue-400 uppercase tracking-wide">My Expertise</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-100 dark:to-purple-200 bg-clip-text text-transparent mb-6 leading-tight">
            Skills & Technologies
          </h1>

          <div className="mx-auto w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_20px_#3b82f680] mb-8"></div>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and proficiencies in modern web development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["all", "frontend", "backend", "tools", "soft"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50"
                  : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {getFilteredSkills().map(([key, category], categoryIndex) => (
            <div
              key={key}
              className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-blue-300 dark:hover:border-gray-700 hover:shadow-xl dark:hover:shadow-none transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${categoryIndex * 0.1}s both`
              }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 hover:shadow-md transition-all duration-300 transform hover:scale-105`}
                    style={{
                      animation: `fadeIn 0.5s ease-out ${0.3 + index * 0.05}s both`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Technologies", value: "15+", icon: <Code size={20} /> },
            { label: "Projects Completed", value: "5+", icon: <CheckCircle size={20} /> },
            { label: "Lines of Code", value: "30K+", icon: <Zap size={20} /> },
            { label: "Learning Hours", value: "1000+", icon: <Award size={20} /> }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center hover:border-blue-300 dark:hover:border-gray-700 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 transform hover:scale-105"
              style={{
                animation: `fadeInUp 0.6s ease-out ${0.8 + index * 0.1}s both`
              }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-1">
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
      `}</style>
    </section>
  );
};

export default Skills;
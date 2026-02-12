import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  User,
  Code,
  FolderKanban,
  FileText,
  Mail,
  Sun,
  Moon,
} from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      setTheme("light");
    } else {
      html.classList.add("dark");
      setTheme("dark");
    }
  };

  const navItems = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "About", path: "/about", icon: <User size={18} /> },
    { name: "Skills", path: "/skills", icon: <Code size={18} /> },
    { name: "Projects", path: "/projects", icon: <FolderKanban size={18} /> },
    { name: "Resume", path: "/resume", icon: <FileText size={18} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={18} /> },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Bashu.dev
        </Link>

        <ul className="hidden md:flex gap-8 text-lg">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center gap-2 pb-1 transition ${
                  location.pathname === item.path
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

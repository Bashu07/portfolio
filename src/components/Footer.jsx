import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: "https://github.com/Bashu07",
      name: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/bashu-awasthi-368a2228a/",
      name: "LinkedIn",
    },
    {
      icon: <Mail size={20} />,
      url: "mailto:bawasthi089@gmail.com",
      name: "Email",
    },
  ];

  return (
    <footer
      className="
        bg-white dark:bg-black
        text-gray-700 dark:text-gray-300
        border-t border-gray-200 dark:border-gray-800
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo / Name */}
        <div className="text-2xl font-bold text-black dark:text-white">
          Bashu.dev
        </div>

        {/* Social Icons */}
        <div className="flex gap-5">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="
                text-gray-600 dark:text-gray-400
                hover:text-blue-500 dark:hover:text-blue-400
                transition-colors duration-300
              "
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm py-4 text-gray-500 dark:text-gray-500">
        © {new Date().getFullYear()} Bashu Dev Awasthi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

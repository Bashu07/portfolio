import { useState, useEffect } from "react";
import {
  Mail, Phone, MapPin, Send, Github, Linkedin,
  MessageSquare, User, Clock, CheckCircle
} from "lucide-react";

const Contact = () => {
  const [visible, setVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: ""
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setTimeout(() => setVisible(true), 150);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(p => ({ ...p, [name]: value }));
    setErrors(p => ({ ...p, [name]: "" }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen px-6 py-20 overflow-hidden
      bg-white text-gray-800
      dark:bg-black dark:text-gray-200"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div
        className={`relative z-10 max-w-6xl mx-auto transition-all duration-1000
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2
            bg-blue-500/10 dark:bg-blue-500/20
            border border-blue-500/30 rounded-full mb-5">
            <MessageSquare size={18} className="text-blue-500" />
            <span className="text-sm font-semibold text-blue-500 uppercase">
              Get In Touch
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Contact Me
          </h1>

          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Have a project or idea? Let’s talk and build something great together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: <Mail />, title: "Email", value: "bawasthi089@gmail.com" },
              { icon: <Phone />, title: "Phone", value: "+977 9842999420" },
              { icon: <MapPin />, title: "Location", value: "Kathmandu, Nepal" }
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border
                bg-gray-100 border-gray-200
                dark:bg-neutral-900 dark:border-neutral-800"
              >
                <div className="flex items-center gap-4">
                  <div className="text-blue-500">{item.icon}</div>
                  <div>
                    <p className="text-sm text-gray-500">{item.title}</p>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="flex gap-4">
              <a href="https://github.com/Bashu07" target="_blank"
                className="flex items-center gap-2 px-5 py-3 rounded-xl
                bg-gray-100 dark:bg-neutral-900 border
                border-gray-200 dark:border-neutral-800 hover:scale-105 transition">
                <Github size={18} /> GitHub
              </a>

              <a href="https://www.linkedin.com/in/bashu-awasthi-368a2228a" target="_blank"
                className="flex items-center gap-2 px-5 py-3 rounded-xl
                bg-gray-100 dark:bg-neutral-900 border
                border-gray-200 dark:border-neutral-800 hover:scale-105 transition">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>

            {/* Availability */}
            <div className="p-6 rounded-2xl
              bg-green-500/10 border border-green-500/30">
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <Clock size={18} />
                <span className="font-semibold">Available for work</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-2xl border
              bg-gray-100 border-gray-200
              dark:bg-neutral-900 dark:border-neutral-800">
              <h2 className="text-2xl font-bold mb-6">Send a message</h2>

              {isSubmitted ? (
                <div className="text-center py-10">
                  <CheckCircle size={40} className="mx-auto text-green-500" />
                  <p className="mt-4 font-semibold">Message sent successfully!</p>
                </div>
              ) : (
                <div className="space-y-5">
                  {["name", "email", "subject"].map((field) => (
                    <input
                      key={field}
                      name={field}
                      placeholder={field.toUpperCase()}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl
                      bg-white dark:bg-black
                      border border-gray-300 dark:border-neutral-700
                      focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ))}

                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your message..."
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl
                    bg-white dark:bg-black
                    border border-gray-300 dark:border-neutral-700
                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <button
                    onClick={handleSubmit}
                    className="w-full py-4 rounded-xl font-semibold text-white
                    bg-gradient-to-r from-blue-500 to-purple-500
                    hover:scale-[1.02] transition"
                  >
                    <Send className="inline mr-2" size={18} />
                    Send Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false); // mobile menu close
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <h1
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold cursor-pointer"
        >
          <span className="text-red-500">S</span>atyam
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative cursor-pointer group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black px-6 pb-6"
          >
            <ul className="flex flex-col gap-4 text-white text-lg">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="border-b border-gray-700 pb-2 cursor-pointer"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;

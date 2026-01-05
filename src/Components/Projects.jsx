import { motion } from "framer-motion";

const projects = [
  {
    title: "Home Chef Hub",
    description:
      "A recipe-sharing platform built with React, featuring categories, admin dashboard, and API integration.",
    tech: ["React", "Tailwind", "Node.Js"],
    live: "https://homechef-hub.vercel.app/",
    github:
      "https://github.com/Satyam-nalkar/Home-Chef-Hub/tree/main/Homechef-Hub",
  },
  {
    title: "Animated Portfolio",
    description:
      "A modern portfolio with smooth animations using Framer Motion and Tailwind CSS.",
    tech: ["React", "Framer Motion", "Tailwind"],
    live: "https://portfolio-gray-kappa-mqe2n7u0ne.vercel.app/",
    github: "https://github.com/Satyam-nalkar/Portfolio",
  },
  {
    title: "C++ Numerical Computing Library",
    description:
      "A custom-built numerical computing library in C++ implementing matrix operations, Gaussian Elimination, LU Decomposition, Gauss-Seidel, Gauss-Jacobi methods, and interpolation techniques for scientific computing.",
    tech: [
      "C++",
      "Matrix Operations",
      "Gaussian Elimination",
      "LU Decomposition",
      "Iterative Methods",
    ],
    github: "https://github.com/Satyam-nalkar/Numerical_Computing/tree/main/Numerical_computing_1/Assignment",
  },
];

function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-14 text-center"
        >
          My <span className="text-red-500">Projects</span>
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-red-500 transition-all"
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>

              <p className="text-gray-400 mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 border border-red-500 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-red-500 rounded text-sm hover:bg-red-600 transition"
                  >
                    Live
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-red-500 rounded text-sm hover:bg-red-500 transition"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

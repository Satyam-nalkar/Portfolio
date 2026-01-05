import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        {/* Left Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-red-500">Me</span>
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            I am a passionate React developer who loves building interactive,
            responsive, and animated user interfaces. I enjoy turning complex
            problems into simple, beautiful solutions.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Currently, I focus on frontend development using React, Tailwind CSS,
            and modern JavaScript.
          </p>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4"
        >
          {[
            "React",
            "JavaScript",
            "Tailwind CSS",
            "Framer Motion",
            "API Integration",
            "Git & GitHub",
          ].map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.1 }}
              className="px-5 py-2 border border-red-500 rounded-full text-sm cursor-pointer"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;

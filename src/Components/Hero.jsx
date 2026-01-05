import { motion } from "framer-motion";

function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center flex flex-col items-center"
      >
        {/* Profile Image */}
        <motion.img
          src="./public/Profile.jpeg"
          alt="Satyam Nalkar"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-36 h-36 rounded-full border-4 border-red-500 mb-6 object-cover"
        />

        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-red-500">Satyam Nalkar</span>
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          React Developer | Frontend Engineer
        </p>

        <div className="flex justify-center gap-5">
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-red-500 rounded-full text-white"
          >
            View My Work
          </motion.button>

          <motion.a
            href="./public/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 border border-red-500 rounded-full text-white"
          >
            View / Download Resume
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;

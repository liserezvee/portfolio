import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <Typewriter
            words={[" Hi, I'm Rezvee", "Welcome to My Portfolio"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          {/* Hi, I'm <span className="text-blue-600">Rez<span className='text-black'>vee</span></span> */}
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8">Front-End Developer</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium"
        >
          <a href="#projects"> View My Work</a>
        </motion.button>
      </motion.div>
    </section>
  );
}

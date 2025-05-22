import { motion } from "framer-motion";
import animation from "../assets/animation.json"
import Lottie from "lottie-react";

export default function Hero() {
  return (
    <div className="h-screen w-full flex items-center justify-center text-center bg-white px-4">
      <div className="w-1/2"><motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I'm rezvee</h1>
        <p className="text-xl text-gray-600 mb-6">
          A passionate Frontend Developer specializing in React.
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700"
        >
          View Projects
        </a>
      </motion.div></div>
      <div className="w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
           <Lottie animationData={animation} loop={true} />
        </motion.div>
      </div>
    </div>
  );
}

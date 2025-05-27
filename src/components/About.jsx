import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg font-semibold text-black">
          I'm a junior frontend developer with a strong passion for crafting
          clean, responsive, and engaging user interfaces. I specialize in{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            ReactJS
          </span>
          ,{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            TailwindCSS
          </span>
          ,
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Bootstrap
          </span>
          , and enjoy bringing ideas to life with smooth animations using{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Framer Motion, Lottiefiles
          </span>
          .
        </p>
        <p className="text-lg font-semibold text-black mt-4">
          I'm constantly learning and experimenting to improve my skills and
          build experiences that are both functional and visually appealing.
          When I’m not coding, I love exploring design trends and contributing
          to small open-source projects.
        </p>
      </motion.div>
    </section>
  );
}

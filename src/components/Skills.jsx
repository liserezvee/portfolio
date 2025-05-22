// components/Skills.jsx
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "TypeScript",
  "Tailwind CSS",
  "Bootstrap",
  "Animation",
  "Git",
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 bg-gray-50 rounded-xl mt-2 shadow p-6">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Skills 
      </motion.h2>

      <motion.div
        className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <p className="text-center font-medium text-gray-800">{skill}</p>
            
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

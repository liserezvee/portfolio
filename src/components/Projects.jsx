import { motion } from "framer-motion";
import { Link } from "lucide-react";

const projects = [
  {
    title: "Landing page",
    description: "A Tech Landing Page with React and Tailwind",
    gitLink: "https://github.com/liserezvee/miztek",
    link: "https://miztek-eight.vercel.app/",
  },
  {
    title: "Portfolio Site",
    description: "My personal portfolio using React and Tailwind",
    gitLink: "https://github.com/liserezvee/portfolio",
    link: "https://portfolio-b6zv4r1zy-liserezvees-projects.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 px-4 bg-gray-50 rounded-xl mt-2 shadow p-6"
    >
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <a
              href={project.link}
              className="text-blue-400 hover:underline cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit here
            </a>
            <p className="text-gray-600 mb-4">{project.description}</p>

            <a
              href={project.gitLink}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

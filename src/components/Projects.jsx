import { motion } from "framer-motion";

const projects = [
  {
    title: "Weather App",
    description: "React app using OpenWeather API",
    link: "https://github.com/yourgithub/weather-app",
  },
  {
    title: "Portfolio Site",
    description: "My personal portfolio using React and Tailwind",
    link: "https://github.com/yourgithub/portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 bg-gray-50 rounded-xl mt-2 shadow p-6">
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
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
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

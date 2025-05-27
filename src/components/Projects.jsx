import { motion } from "framer-motion";
const projects = [
  {
    id: 1,
    title: "MizTek",
    description: "A Business Landing Page For a Tech Company.",
    tags: ["React", "Tailwind", "API"],
    link: "https://miztek-eight.vercel.app/",
  },
  {
    id: 1,
    title: "Project 1",
    description: "A brief description of the project and technologies used.",
    tags: ["React", "Tailwind", "API"],
    link: "#",
  },
  {
    id: 1,
    title: "Project 1",
    description: "A brief description of the project and technologies used.",
    tags: ["React", "Tailwind", "API"],
    link: "#",
  },
  // Add more projects
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                to={project.link}
                className="text-blue-600 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

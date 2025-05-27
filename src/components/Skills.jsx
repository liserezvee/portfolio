import { motion } from 'framer-motion';

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "RESPONISVE DESGINE", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React.JS", level: 80 },
  { name: "NEXT.JS", level: 75 },
  { name: "Tailwind CSS", level: 85 },
  { name: "BOOTSTRAP", level: 80 },
  { name: "NODE.JS", level: 75 },
  { name: "GIT", level: 85 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
      
      <div className="space-y-6 w-full mx-auto grid grid-cols-3 gap-10">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="h-2.5 rounded-full bg-blue-600"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
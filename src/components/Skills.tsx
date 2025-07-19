import React from "react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React.js",
          level: "Expert",
          color: "from-blue-500 to-cyan-500",
        },
        {
          name: "Next.js",
          level: "Expert",
          color: "from-gray-700 to-gray-900",
        },
        {
          name: "Vue.js",
          level: "Expert",
          color: "from-green-500 to-emerald-500",
        },
        {
          name: "Nuxt.js",
          level: "Expert",
          color: "from-green-400 to-blue-500",
        },
        {
          name: "TypeScript",
          level: "Advanced",
          color: "from-blue-600 to-blue-800",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          level: "Expert",
          color: "from-green-600 to-green-800",
        },
        {
          name: "Laravel",
          level: "Advanced",
          color: "from-red-500 to-orange-500",
        },
        {
          name: "Express.js",
          level: "Expert",
          color: "from-gray-600 to-gray-800",
        },
        {
          name: "PHP",
          level: "Advanced",
          color: "from-purple-600 to-blue-600",
        },
        {
          name: "MongoDB",
          level: "Intermediate",
          color: "from-green-500 to-green-700",
        },
        {
          name: "MySQL",
          level: "Expert",
          color: "from-green-500 to-green-700",
        },
      ],
    },
    {
      title: "Styling & Design",
      skills: [
        {
          name: "Tailwind CSS",
          level: "Expert",
          color: "from-cyan-500 to-blue-500",
        },
        {
          name: "Bootstrap",
          level: "Advanced",
          color: "from-purple-600 to-pink-600",
        },
        { name: "CSS3", level: "Expert", color: "from-blue-500 to-blue-700" },
        {
          name: "Sass/SCSS",
          level: "Advanced",
          color: "from-pink-500 to-rose-500",
        },
        {
          name: "Figma",
          level: "Expert",
          color: "from-purple-500 to-pink-500",
        },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        {
          name: "Git & GitHub",
          level: "Expert",
          color: "from-gray-700 to-gray-900",
        },
        {
          name: "Docker",
          level: "Intermediate",
          color: "from-blue-500 to-cyan-500",
        },
        {
          name: "Digital Ocean",
          level: "Intermediate",
          color: "from-orange-500 to-yellow-500",
        },
        {
          name: "MySQL",
          level: "Advanced",
          color: "from-blue-600 to-blue-800",
        },
        {
          name: "REST APIs",
          level: "Expert",
          color: "from-green-500 to-teal-500",
        },
      ],
    },
  ];

  const getLevelWidth = (level: string) => {
    switch (level) {
      case "Expert":
        return "w-full";
      case "Advanced":
        return "w-4/5";
      case "Intermediate":
        return "w-3/5";
      default:
        return "w-2/5";
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across the full
            development stack
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span
                  className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.skills[0].color} mr-3`}
                ></span>
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 dark:text-gray-200 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width:
                            getLevelWidth(skill.level).replace("w-", "") ===
                            "full"
                              ? "100%"
                              : getLevelWidth(skill.level).replace("w-", "") ===
                                "4/5"
                              ? "80%"
                              : getLevelWidth(skill.level).replace("w-", "") ===
                                "3/5"
                              ? "60%"
                              : "40%",
                        }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                        }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} group-hover:shadow-lg transition-shadow duration-300`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

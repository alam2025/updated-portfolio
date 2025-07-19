import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 2,
      title: "Full-Stack Developer",
      company: "WebCartisan",
      location: "Uttara, Dhaka, BD",
      period: "Jun 2024 - Present",
      type: "Full-time",
      description:
        "Developed and maintained multiple client projects using modern web technologies.",
      achievements: [
        "Built 8+ responsive web applications with React and Vue.js",
        "Integrated payment systems processing $1M+ in transactions",
        "Optimized database queries improving response time by 45%",
        "Collaborated with design team to implement pixel-perfect UI/UX",
        "Maintained 95% code coverage through comprehensive testing",
      ],
      technologies: [
        "Vue.js",
        "NuxtJS",
        "React.JS",
        "NextJS",
        "NodeJS",
        "Laravel",
        "MySQL",
        "Tailwind CSS",
        "REST APIs",
      ],
    },
    {
      id: 1,
      title: "Senior Full-Stack Developer(part-time)",
      company: "Aniya Network Solutions Inc.",
      location: "Remote",
      period: "Jul 2023 - Present",
      type: "Full-time",
      description:
        "Leading development of enterprise web applications and mentoring junior developers.",
      achievements: [
        "Architected and delivered 5+ enterprise applications serving 100k+ users",
        "Reduced application load time by 60% through performance optimization",
        "Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes",
        "Led a team of 4 developers on critical projects with 100% on-time delivery",
        "Resolved critical production issues with 99.9% uptime maintenance",
      ],
      technologies: [
        "React",
        "Next.js",
        "VueJS",
        "NuxtJS",
        "Node.js",
        "Laravel",
        "TypeScript",

        "Digital Ocean",
      ],
    },

    {
      id: 3,
      title: "Vue & NuxtJS Frontend Dev",
      company: "POSWARE",
      location: "Remote",
      period: "Jul 2025 - present",
      type: "Full-time",
      description:
        "Started my professional journey building modern web applications and learning best practices.",
      achievements: [
        "Contributed to 3 major product launches with 50k+ user adoption",
        "Fixed 100+ bugs and implemented 20+ new features",
        "Learned and applied Vue, Nuxt.js, and modern development practices",
        "Participated in code reviews and agile development processes",
        "Achieved 98% customer satisfaction on delivered features",
      ],
      technologies: ["Vue", "Nuxt", "Tailwind CSS", "Bootstrap"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            2+ years of hands-on experience delivering scalable solutions and
            solving complex challenges
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-32 bg-gradient-to-b from-blue-600 to-purple-600" />
              )}

              <div className="flex items-start space-x-6">
                {/* Timeline Icon */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                        {experience.company}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{experience.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

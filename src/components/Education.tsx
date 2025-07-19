import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, School } from "lucide-react";

const Education: React.FC = () => {
  const education = [
    {
      id: 1,
      title: "Bachelor of Science in Computer Science & Engineering",
      institution: "Dhaka University (Technology unit - MEC)",
      location: "Mymensingh, Bangladesh",
      period: "2018 - 2022",
      type: "Degree",
      description:
        "Comprehensive study of computer science fundamentals, software engineering, and web technologies.",
      highlights: [
        "Graduated with GPA 3.69/4.0",
        "Specialized in Web Development and Software Engineering",
        "Completed capstone project on scalable web applications",
        "Active member of Computer Science Society",
        "Dean's List for 8 consecutive semesters",
      ],
      icon: <GraduationCap className="h-8 w-8 text-white" />,
      color: "from-blue-600 to-indigo-600",
    },
    {
      id: 2,
      title: "Complete Web development Certificate",
      institution: "Programming Hero",
      location: "Online",
      period: "Jan 2023 - Jun 2023",
      type: "Certificate",
      description:
        "Intensive bootcamp focusing on modern web development technologies and industry best practices.",
      highlights: [
        "Completed 600+ hours of hands-on coding",
        "Built 30  applications from scratch",
        "Learned React, Node.js, MongoDB, and modern frameworks",
        "Collaborated on team projects using Agile methodology",
        "Achieved 100% course completion rate",
      ],
      icon: <Award className="h-8 w-8 text-white" />,
      color: "from-green-600 to-emerald-600",
    },
  ];

  // const certifications = [
  //   "AWS Certified Solutions Architect - Associate",
  //   "MongoDB Certified Developer",
  //   "Google Analytics Certified",
  //   "Scrum Master Certified (SMC)",
  //   "React Developer Certification",
  // ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Strong academic foundation combined with practical industry training
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index < education.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-32 bg-gradient-to-b from-blue-600 to-green-600" />
              )}

              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-lg`}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full mb-2">
                        {item.type}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <div className="flex items-center text-lg text-blue-600 dark:text-blue-400 font-semibold">
                        <School className="h-5 w-5 mr-2" />
                        {item.institution}
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{item.period}</span>
                      </div>
                      <div className="text-gray-500 dark:text-gray-400 text-sm">
                        {item.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Professional Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">
                    {cert}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Education;

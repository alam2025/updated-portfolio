import React from "react";
import { motion } from "framer-motion";
import { Code, Lightbulb, Users, Zap } from "lucide-react";
import profile from "./../image.jpg";

const About: React.FC = () => {
  const values = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and well-documented code that stands the test of time.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Problem Solving",
      description:
        "Approaching complex challenges with analytical thinking and innovative solutions.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description:
        "Working effectively with cross-functional teams to deliver exceptional results.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance",
      description:
        "Optimizing applications for speed, efficiency, and excellent user experience.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate developer dedicated to creating impactful digital
            experiences
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image and Stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full p-2">
                  <img
                    src={profile}
                    alt="Professional headshot"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      2+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                  <div className="text-2xl font-bold text-green-600">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Projects
                  </div>
                </div>
                <div className="text-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                  <div className="text-2xl font-bold text-blue-600">150+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Users Served
                  </div>
                </div>
                <div className="text-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                  <div className="text-2xl font-bold text-purple-600">
                    99.9%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Uptime
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Bio and Values */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm a passionate full-stack developer with 2+ years of
                  experience creating scalable web applications and solving
                  complex technical challenges. My journey began with a B.Sc in
                  Computer Science & Engineering, and I've since specialized in
                  modern web technologies including React, Vue.js, Node.js, and
                  Laravel.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  What sets me apart is my ability to tackle critical issues
                  head-on. I've successfully optimized applications to serve
                  100k+ users, reduced load times by up to 70%, and maintained
                  99.9% uptime on production systems. I believe in writing
                  clean, maintainable code and collaborating effectively with
                  teams to deliver exceptional results.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, I enjoy staying up-to-date with the
                  latest technologies, contributing to open-source projects, and
                  sharing knowledge with the developer community. I'm always
                  eager to take on new challenges and create innovative
                  solutions that make a real impact.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  My Core Values
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="text-blue-600 dark:text-blue-400 mt-1">
                          {value.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                            {value.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

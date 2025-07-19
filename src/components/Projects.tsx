import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Filter } from "lucide-react";

const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Frontend Template",
      description:
        "Modern and responsive e-commerce frontend built with Next.js, Ant Design, Tailwind CSS, and Redux. Includes product listings, cart system, and optimized UI for performance and scalability.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "Ant Design", "Tailwind CSS", "Redux"],
      category: "Frontend",
      challenges:
        "Designed scalable UI architecture and implemented efficient state management for real-time cart updates.",
      demo: "https://multivendore-commerce.vercel.app/",
    },

    {
      id: 2,
      title: "Single Vendor E-commerce Website",
      description:
        "Fully dynamic Laravel-based single vendor e-commerce platform featuring 12+ payment methods, multiple homepage layouts, customizable theme settings, and a powerful admin dashboard for product, order, and customer management.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Laravel", "Blade", "MySQL", "Tailwind css", "jQuery"],
      category: "Full-Stack",
      challenges:
        "Implemented a flexible layout system and integrated 12+ payment gateways while ensuring scalability and dynamic CMS support.",
      demo: "http://a-mart.al-adiyatitsolutions.com/",
    },

    {
      id: 4,
      title: "Weather Forecast App",
      description:
        "Simple and clean React-based weather app that shows real-time temperature and weather conditions based on your current location. Powered by the OpenWeather API.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Html", "Tailwind CSS", "OpenWeather API"],
      category: "Frontend",
      challenges: "Integrated geolocation and weather API with error handling.",
      demo: "https://alam2025.github.io/weather-check/",
      github: "https://github.com/alam2025/weather-check",
    },
    {
      id: 5,
      title: "Masjid Management System",
      description:
        "A comprehensive web-based platform for managing multiple masjids with individual profiles, admin dashboards, real-time notifications, and payment integration. Built for scalability, it allows each masjid to register, manage events, announcements, and receive donations online.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiIKFva6SOXURpnMjT3M0SFVhqo-lsJ0Iobw&s",
      technologies: [
        "React",
        "Tailwind CSS",
        "Redux Toolkit",
        "Laravel",
        "MySQL",
      ],
      category: "Full-Stack",
      challenges:
        "Designed a multi-tenant architecture with role-based access, masjid-specific notifications, and integrated secure payment gateways for donation processing.",
      demo: "https://ya-sin.app/",
    },
    {
      id: 6,
      title: "Al-Adiyat IT Solutions Company Website",
      description:
        "A modern and responsive website for an IT service company, featuring dedicated sections for services, about us, portfolio, and contact. Built with a performance-first approach using React, Tailwind CSS, Redux for state management, and Node.js as the backend.",
      image:
        "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Tailwind CSS", "Redux", "Node.js"],
      category: "Full-Stack",
      challenges:
        "Implemented fully dynamic routing with modular service management, integrated contact forms, and designed a reusable layout system to scale across future services and portfolio updates.",
      demo: "https://al-adiyatitsolutions.com/",
    },
    {
      id: 7,
      title: "Security Company Management Platform",
      description:
        "Laravel-based web application that lists security companies and provides a complete management system including guard attendance tracking, worker management, client recruitment, and job applications. Features separate roles for admins, clients, and guards, along with a dynamic Careers section.",
      image:
        "https://images.pexels.com/photos/5380644/pexels-photo-5380644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Laravel", "Tailwind CSS", "MySQL"],
      category: "Full-Stack",
      challenges:
        "Implemented complex role-based access control (RBAC), dynamic attendance management, and client-guard communication modules while maintaining scalability and performance.",
      demo: "https://4bssltd.com/",
    },
    {
      id: 8,
      title: "Campus Management Website - NIST Online",
      description:
        "A full-featured campus management system designed for educational institutions. It includes modules for student enrollment, course management, academic scheduling, and staff communication. Each user type (students, teachers, admins) has a personalized dashboard, improving usability and engagement.",
      image:
        "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Nuxt.js", "Pinia", "Tailwind CSS", "Laravel", "MySQL"],
      category: "Full-Stack",
      challenges:
        "Integrated a role-based access system with real-time data sync between frontend (Nuxt + Pinia) and backend (Laravel API), while ensuring responsiveness and accessibility across devices.",
      demo: "https://www.nistonline.ca/",
    },
    {
      id: 9,
      title: "Job Seeker Platform – Frontend(Practice)",
      description:
        "A modern job seeker platform frontend built with React and Tailwind CSS. The UI includes job listings, search and filter functionality, application forms, and candidate dashboards. Designed for smooth UX and scalability.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Tailwind CSS"],
      category: "Frontend",
      challenges:
        "Built a responsive interface with dynamic filtering and reusable components, ensuring performance and user-friendly job browsing experience.",
      demo: "https://dapper-nasturtium-5835e4.netlify.app/",
    },
    {
      id: 10,
      title: "Book Show Website (Practice)",
      description:
        "A static book showcase website built using pure HTML and CSS during practice sessions. It features a simple layout with book cards, titles, images, and a clean, responsive design for learning layout and styling basics.",
      image:
        "https://images.pexels.com/photos/3563627/pexels-photo-3563627.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS"],
      category: "Frontend",
      challenges:
        "Focused on mastering responsive layouts and card-based UI design using only HTML and CSS, without any frameworks or JavaScript.",
      demo: "https://nimble-douhua-3eb7ad.netlify.app/",
    },
    {
      id: 11,
      title: "vCard – Digital Business Card",
      description:
        "A stylish and responsive digital business card (vCard) built with HTML and Tailwind CSS. Users can create and customize a personal or professional card layout, suitable for modern online presence and quick sharing.",
      image:
        "https://images.pexels.com/photos/4427618/pexels-photo-4427618.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "Tailwind CSS"],
      category: "Frontend",
      challenges:
        "Focused on clean visual hierarchy and mobile-first design. Built reusable card layout components using only HTML and Tailwind CSS.",
      demo: "https://v-card-rho.vercel.app/",
    },
  ];

  const filters = ["All", "Full-Stack", "Frontend"];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Showcasing real-world solutions and critical problem-solving across
            diverse technologies
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedFilter === filter
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                <Filter className="h-4 w-4" />
                <span>{filter}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm font-medium text-orange-600 dark:text-orange-400 mb-2">
                    Key Challenge Solved:
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {project.challenges}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                  {project?.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

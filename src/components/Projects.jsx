import { useState } from 'react';
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [hoveredIndex, setHoveredIndex] = useState(null); // Track which card is hovered
    const categories = ['All', 'Angular', 'NodeJS'];

    const filteredProjects = PROJECTS.filter(project => {
        return activeCategory === 'All' || project.technologies.includes(activeCategory);
    });

    const handleCardClick = (githubLink) => {
        if (githubLink) {
            window.open(githubLink, "https://github.com/fahadaslam1234"); // Open GitHub link in a new tab
        }
    };

    return (
        <div className="pb-8"> {/* Light off-white background */}
            {/* Section Title */}
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-12 text-center text-4xl">
                Projects
            </motion.h2>

            {/* Category Tabs */}
            <div className="flex justify-center mb-6">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveCategory(category)}
                        className={`py-2 px-4 mx-2 text-sm font-medium transition ${
                            activeCategory === category
                                ? 'text-white bg-gradient-to-r from-gray-500 to-blue-700'
                                : 'text-white hover:bg-gradient-to-r from-blue-700 to-gray-500'
                        } rounded-lg shadow-md`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 lg:px-16">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5 }}
                        className="rounded-2xl shadow-2xl border-spacing-1 overflow-hidden hover:shadow-xl transition cursor-pointer"
                        onMouseEnter={() => setHoveredIndex(index)} // Set hovered index
                        onMouseLeave={() => setHoveredIndex(null)} // Reset on mouse leave
                        onClick={() => handleCardClick(project.githubLink)}
                    >
                        {/* Change image on hover */}
                        <img
                            src={
                                hoveredIndex === index
                                    ? project.images[1] // Show second image on hover
                                    : project.images[0] // Default image
                            }
                            alt={project.title}
                            className="w-full h-48 object-inherit transition duration-300"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-50 mb-2">
                                {project.title}
                            </h3>
                            <div className="text-gray-350 text-sm mb-4 h-20 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                                {project.description}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs bg-stone-900 px-2 py-1 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* No Projects Message */}
            {filteredProjects.length === 0 && (
                <p className="text-center text-gray-500 mt-6">
                    No projects found under this category.
                </p>
            )}
        </div>
    );
};

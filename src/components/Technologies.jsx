import { PiAngularLogo } from "react-icons/pi";
import {
    RiBootstrapLine,
    RiCss3Line,
    RiHtml5Line,
    RiJavascriptLine,
    RiNodejsLine,
    RiTailwindCssFill,
} from "react-icons/ri";
import { SiMongodb, SiTypescript } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { BsUbuntu } from "react-icons/bs";
import { FaAws } from "react-icons/fa6";
import { motion } from "framer-motion";

const iconVariants = {
    initial: { x: -100, opacity: 0 },
    animate: (i) => ({
        x: [0, 50, 0], // Smooth left-to-right movement
        opacity: 1,
        transition: {
            duration: 5, // Slow movement duration
            ease: "easeInOut",
            delay: i * 0.5, // Delay for sequential animation
            repeat: Infinity,
            repeatType: "reverse",
        },
    }),
};

const Technologies = () => {
    const icons = [
        { Icon: PiAngularLogo, color: "text-red-600", name: "Angular" },
        { Icon: RiCss3Line, color: "text-blue-500", name: "CSS3" },
        { Icon: RiHtml5Line, color: "text-orange-500", name: "HTML5" },
        { Icon: RiJavascriptLine, color: "text-yellow-400", name: "JavaScript" },
        { Icon: SiTypescript, color: "text-blue-600", name: "TypeScript" },
        { Icon: RiTailwindCssFill, color: "text-sky-400", name: "Tailwind CSS" },
        { Icon: RiBootstrapLine, color: "text-indigo-500", name: "Bootstrap" },
        { Icon: SiMongodb, color: "text-green-600", name: "MongoDB" },
        { Icon: RiNodejsLine, color: "text-green-500", name: "NodeJs" },
        { Icon: TbSql, color: "text-blue-700", name: "SQL" },
        { Icon: BsUbuntu, color: "text-orange-500", name: "Ubuntu" },
        { Icon: FaAws, color: "text-orange-400", name: "AWS" },
    ];

    return (
        <div className="pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0.4, y: -100 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl"
            >
                Technologies
            </motion.h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
                {icons.map(({ Icon, color, name }, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        initial="initial"
                        animate="animate"
                        variants={iconVariants}
                        className="relative group"
                    >
                        {/* Icon */}
                        <Icon className={`cursor-pointer text-5xl ${color}`} />
                        {/* Tooltip */}
                        <div className="absolute bottom-12 left-1/2 transform cursor-pointer -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded-lg px-3 py-1 transition-opacity duration-300">
                            {name}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;

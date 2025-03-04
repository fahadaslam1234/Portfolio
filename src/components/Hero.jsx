import profilePic from "../assets/profile.jpg"
import { HERO_CONTENT } from "../constants"
import { motion } from "framer-motion"

const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
}
const childVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}


const Hero = () => {
    return (
        <div className="flex items-center justify-between pb-4 lg:mb-24">
            <div className="w-full flex items-center justify-between flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-4">
                        <motion.img src={profilePic}
                            alt="Fahad Aslam"
                            className="border border-stone-900 rounded-3xl"
                            width={400}
                            height={400}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }} />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="flex flex-col items-center mt-10">
                        <motion.h3
                            variants={childVariants}
                            className="pb-2 text-4xl tracking-tighter lg:text-6xl"> Rao Fahad Aslam</motion.h3>
                        <motion.span
                            variants={childVariants}
                            className="bg-gradient-to-r from-gray-500 to-stone-600 bg-clip-text text-3xl
                 tracking-tighter text-transparent">Full Stack Developer</motion.span>
                        <motion.p
                            variants={childVariants}
                            className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"> {HERO_CONTENT}</motion.p>
                        <motion.a
                            variants={childVariants}
                            href="../assets/Fahad_Aslam_Software_Engineer.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download="Fahad_Aslam_Software_Engineer.pdf"
                            className="bg-gradient-to-r from-gray-500 to-blue-700 text-white font-semibold rounded-full px-8 py-3 flex items-center justify-center gap-2 shadow-lg hover:from-blue-500 hover:to-gray-400 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-3-3m3 3l3-3m-6 9h12" />
                            </svg>
                            Download CV
                        </motion.a>



                    </motion.div>

                </div>

            </div>
        </div>
    )
}

export default Hero
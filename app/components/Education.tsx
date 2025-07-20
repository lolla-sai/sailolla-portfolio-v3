import ProjectCarousel from "./ProjectCarousel";
import { motion } from "framer-motion";
import experience from "~/data/experience";

function Education() {
    return (
        <section id="experience">
            <h1 className="text-center font-noto-serif font-extrabold text-6xl mb-8">
                Education & Experience
            </h1>

            {/* <div id="skills" className="pt-12 px-8 max-w-5xl mx-auto mb-6">
                <div className="relative border-l-4 border-gray-200 ml-6">
                    {experience.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="mb-10 ml-4"
                        >
                            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-2"></div>
                            <div className="bg-gray-50 p-5 rounded-xl shadow-sm border border-gray-200">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {item.location} • {item.period}
                                </p>
                                <p className="mt-2 text-gray-700 text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div> */}

            <div className="timeline max-w-6xl py-8 relative mx-auto after:content-[''] after:absolute after:w-2 after:bg-black after:top-0 after:bottom-0 after:left-1/2 after:ml-[-3px]">
                {experience.map((exp, idx) => (
                    <>
                        <div
                            className={`timeline_container ${
                                exp.position == "left"
                                    ? "left-0 left-container"
                                    : "left-1/2 right-container"
                            } `}
                            key={exp.title}
                        >
                            <div className="timeline_content">
                                <span className="text-lg font-semibold">
                                    {exp.period}
                                </span>
                                <h2 className="text-xl font-black">
                                    {exp.title}
                                </h2>
                                <span className="text-lg">{exp.location}</span>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    </>
                ))}
            </div>

            <div
                id="certifications"
                className="py-12 px-8 max-w-7xl mx-auto mb-6"
            >
                <h1 className="text-left font-noto-serif font-extrabold text-6xl mb-8">
                    Certifications
                </h1>

                <div className="flex space-x-6 px-4 scroll-smooth scrollbar-thin">
                    <div className="transform transition-transform hover:scale-103 duration-300 border-2 border-gray-600 rounded-xl overflow-clip">
                        <img
                            src="https://sailolla.netlify.app/static/media/joc.b49a284549dff772c3d5.jpg"
                            alt="Cert 1"
                            className="w-full h-48 object-cover"
                        />
                    </div>

                    <div className="transform transition-transform hover:scale-103 duration-300 border-2 border-gray-600 rounded-xl overflow-clip">
                        <img
                            src="https://sailolla.netlify.app/static/media/0001.d6e6d1a6b4a4fe39edab.jpg"
                            alt="Cert 2"
                            className="w-full h-48 object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;

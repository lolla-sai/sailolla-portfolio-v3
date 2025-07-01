import { motion } from "framer-motion";

const experience = [
    {
        title: "Higher Secondary Schooling",
        location: "Goa, India",
        period: "2016 – 2018",
        description:
            "Introduced to programming through HTML & C++. Sparked my interest in software.",
    },
    {
        title: "Bachelor of Engineering (CSE)",
        location: "XYZ Engineering College, Goa",
        period: "2018 – 2022",
        description:
            "Built foundational knowledge in CS, worked on academic projects and labs.",
    },
    {
        title: "Software Intern",
        location: "Startup / Freelance",
        period: "2021 – 2022",
        description:
            "Built web tools, practiced React + Python. Worked with real clients on deliverables.",
    },
    {
        title: "Software Engineer",
        location: "OneShield Software",
        period: "2022 – Present",
        description:
            "Working on enterprise-grade solutions, building intelligent systems using modern stacks.",
    },
];

export default function ProjectCarousel() {
    return (
        <section id="experience">
            <h1 className="text-center font-noto-serif font-extrabold text-6xl mb-8">
                Education & Experience
            </h1>
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
        </section>
    );
}

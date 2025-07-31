import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function AboutMe() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            id="about-me"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-3xl py-12 px-8 md:border-2 border-gray-600 max-w-5xl mx-auto md:mx-16 lg:mx-auto relative overflow-hidden mb-10 md:mb-16 "
        >
            <h1 className="text-center font-noto-serif font-extrabold text-4xl md:text-6xl mb-8">
                About Me
            </h1>
            <div className="text-justify mr-auto font-rubik flex flex-col gap-4 md:text-lg">
                <p>
                    Hi, my name is Sai. I'm a software engineering professional
                    and a forever student, with a knack for building practical
                    solutions that solve real problems.
                </p>
                <p>
                    I am skilled in various frameworks and languages for
                    building intelligent software. Few of these include, NextJS,
                    Langchain, ReactJS, TailwindCSS, Firebase, Django, Python,
                    C/C++ and a lot more. I'm also interested in artificial
                    intelligence, and its real world applications. I have built
                    websites for travel agencies, a GenAI solution for a HRTech
                    company, and also offer consultation on implementations. If
                    I am not coding, you'll find me reading books or playing
                    cricket.
                </p>
            </div>
        </motion.div>
    );
}

export default AboutMe;

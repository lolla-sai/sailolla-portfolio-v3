import { FaLinkedin } from "react-icons/fa";
import Typewriter from "./Typewriter";
import { Button } from "./ui/button";
import saiHero from "~/assets/sai-hero.jpeg";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

function Hero() {
    const ref = useRef(null);

    // Track scroll progress (from 0 to 1 within the ref's bounds)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Map scroll progress to scale (e.g., from 1 to 1.1)
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

    return (
        <div
            ref={ref}
            className="flex flex-col-reverse md:flex-row md:items-center justify-center mb-12 hero ml-7 gap-4 h-dvh pr-4 xs:pr-0"
        >
            <div className="md:basis-3/5 md:ml-20 lg:ml-32">
                <h1 className="lg:text-9xl md:text-6xl text-5xl text-black mb-3 md:mb-6 font-noto-serif font-extrabold">
                    Sai Lolla
                </h1>
                <h2 className="lg:text-4xl md:text-2xl text-xl mb-4 font-noto-serif font-bold">
                    <Typewriter
                        text="I turn GenAI buzz into working products."
                        speed={50}
                    />
                </h2>
                <h3 className="md:text-lg lg:text-xl font-rubik mb-4 text-gray-700">
                    I'm a serial innovator from Goa, <br />
                    who brings your <span className="underline">AI</span>, and{" "}
                    <span className="underline">software ideas</span> to
                    execution.
                </h3>

                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2">
                    <Link
                        to="https://drive.google.com/file/d/1RAyFtzKld-Jbt_pg7E-EKW-fagsGeB7F/view?usp=sharing"
                        className="cursor-pointer"
                        target="_blank"
                    >
                        <div className="hidden md:block">
                            <Button variant="default" size="lg">
                                View Resume
                            </Button>
                        </div>
                        <div className="block md:hidden">
                            <Button variant="default" size="sm">
                                View Resume
                            </Button>
                        </div>
                    </Link>
                    <Link
                        to="https://www.linkedin.com/in/saisameerlolla/"
                        className="cursor-pointer"
                        target="_blank"
                    >
                        <div className="hidden md:block">
                            <Button size="lg" variant="outline">
                                <FaLinkedin /> Connect on LinkedIn
                            </Button>
                        </div>
                        <div className="block md:hidden">
                            <Button size="sm" variant="outline">
                                <FaLinkedin /> Connect on LinkedIn
                            </Button>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="heroImage w-44 h-44 md:w-full md:h-dvh md:basis-2/5">
                <motion.img
                    src={saiHero}
                    alt=""
                    style={{ scale }}
                    className="w-full h-full object-cover rounded-full md:rounded-none"
                />
            </div>
        </div>
    );
}

export default Hero;

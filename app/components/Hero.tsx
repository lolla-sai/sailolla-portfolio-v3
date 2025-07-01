import { FaLinkedin } from "react-icons/fa";
import Typewriter from "./Typewriter";
import { Button } from "./ui/button";
import saiHero from "~/assets/sai-hero.jpeg";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

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
        <div ref={ref} className="flex items-center justify-center mb-12 hero">
            <div className="basis-3/5 ml-32">
                {/* <p className="text-xl font-rubik mb-2 text-gray-700">
                    <Typewriter text="Hi, my name is" speed={50} />
                    Hi, my name is
                </p> */}
                <h1 className="text-9xl text-black mb-6 font-noto-serif font-extrabold">
                    Sai Lolla
                </h1>
                {/* <h2 className="text-4xl mb-4 font-noto-serif font-bold">
                        I turn GenAI buzz into working products.
                    </h2> */}
                <h2 className="text-4xl mb-4 font-noto-serif font-bold">
                    <Typewriter
                        text="I turn GenAI buzz into working products."
                        speed={50}
                    />
                </h2>
                <h3 className="text-xl font-rubik mb-4 text-gray-700">
                    I'm a serial innovator from Goa, <br />
                    who brings your <span className="underline">AI</span>, and{" "}
                    <span className="underline">software ideas</span> to
                    execution.
                </h3>

                <div className="flex items-center gap-2">
                    <Button variant="default" size="lg">
                        Say Hi
                    </Button>
                    <Button size="lg" variant="outline">
                        <FaLinkedin /> Connect on LinkedIn
                    </Button>
                </div>
            </div>
            <div className="heroImage h-dvh basis-2/5">
                <motion.img
                    src={saiHero}
                    alt=""
                    style={{ scale }}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}

export default Hero;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function NavBar() {
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowNavbar(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={showNavbar ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex shadow-md bg-white justify-between items-center px-6 py-4  top-0 z-50 fixed left-0 right-0"
        >
            <div className="text-2xl font-bold tracking-tight text-gray-900">
                Sai Lolla.
            </div>

            <ul className="hidden md:flex gap-6 text-black font-medium text-lg font-rubik">
                <li>
                    <a href="#about" className="hover:text-black transition">
                        About
                    </a>
                </li>
                <li>
                    <a href="#projects" className="hover:text-black transition">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#skills" className="hover:text-black transition">
                        Skills
                    </a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-black transition">
                        Contact Me
                    </a>
                </li>
            </ul>
        </motion.nav>
    );
}

export default NavBar;

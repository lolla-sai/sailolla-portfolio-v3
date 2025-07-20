import type { Route } from "./+types/home";
import SideLinks from "~/components/SideLinks";
import Hero from "~/components/Hero";
import NavBar from "~/components/NavBar";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Sai Lolla - Portfolio" },
        { name: "description", content: "Hi, I am Sai Lolla" },
    ];
}

export default function Home() {
    return (
        <main>
            <NavBar />

            <Hero />

            {/* <AboutMe /> */}

            {/* <Projects /> */}

            {/* <Education /> */}

            {/* <ContactMe /> */}

            <div className="hidden md:block">
                <SideLinks />
            </div>
        </main>
    );
}

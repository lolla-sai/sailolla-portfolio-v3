import React from "react";
import ProjectCarousel from "./ProjectCarousel";

function Education() {
    return (
        <>
            <div id="skills" className="pt-12 px-8 max-w-5xl mx-auto mb-6">
                <ProjectCarousel />
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
        </>
    );
}

export default Education;

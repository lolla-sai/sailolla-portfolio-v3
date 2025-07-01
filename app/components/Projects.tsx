import projects from "~/data/projects";

function Projects() {
    return (
        <div id="projects" className="py-12 px-8 max-w-7xl mx-auto relative">
            <h1 className="text-left font-noto-serif font-extrabold text-6xl mb-8">
                Few of My Works!
            </h1>

            {/* <ProjectCarousel /> */}
            <div className="flex space-x-6 px-4 scroll-smooth scrollbar-thin">
                {[...projects].map((project, i) => (
                    <div className="transform transition-transform hover:scale-103 duration-300 border-2 border-gray-600 rounded-xl overflow-clip">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-semibold text-xl mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;

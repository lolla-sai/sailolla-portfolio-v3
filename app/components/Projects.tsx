import projects from "~/data/projects";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";

function Projects() {
    return (
        <div id="projects" className="py-12 px-8 max-w-7xl mx-auto relative">
            <h1 className="text-left font-noto-serif font-extrabold text-6xl mb-4">
                Few of My Works!
            </h1>

            <p className="mb-8">
                Some of the major projects that I have worked on over the years
            </p>

            <div className="flex space-x-6 px-4 scroll-smooth scrollbar-thin">
                <Carousel>
                    <CarouselContent>
                        {[...projects].map((project, i) => (
                            <CarouselItem
                                className="basis-1/3"
                                key={"project_" + project.id}
                            >
                                <div
                                    // className="transform transition-transform hover:scale-103 duration-300 border-2 border-gray-600 rounded-xl overflow-clip"
                                    onClick={() =>
                                        (window.location.href =
                                            "/project/" +
                                            project.id +
                                            "/" +
                                            project.title)
                                    }
                                >
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
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
}

export default Projects;

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
        <section
            id="projects"
            className="px-6 md:px-12 lg:max-w-5xl xl:max-w-7xl mx-auto mb-8 relative "
        >
            <h1 className="text-left font-noto-serif font-extrabold text-3xl md:text-6xl mb-4">
                Few of My Works!
            </h1>

            <p className="mb-8 text-sm md:text-lg">
                Some of the major projects that I have worked on over the years
            </p>

            <Carousel className="mx-12 md:mx-0">
                <CarouselContent>
                    {[...projects].map((project, i) => (
                        <CarouselItem
                            className="sm:basis-1/2 lg:basis-1/3"
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
                                    <h3 className="font-semibold text-lg md:text-xl mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 text-xs md:text-sm">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* <CarouselPrevious />
                <CarouselNext /> */}
                <div className="absolute top-1/2 -left-10 flex items-center justify-center">
                    <CarouselPrevious className="relative left-0 translate-x-0 hover:translate-x-0" />
                </div>
                <div className="absolute top-1/2 -right-10 flex items-center justify-center">
                    <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0" />
                </div>
            </Carousel>
        </section>
    );
}

export default Projects;

import experience from "~/data/experience";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";
import certifications from "~/data/certifications";

function Education() {
    return (
        <section
            id="experience"
            className="px-6 md:px-12 lg:max-w-5xl xl:max-w-7xl mx-auto mb-8"
        >
            <h1 className="text-center font-noto-serif font-extrabold text-4xl md:text-6xl mb-8">
                Education & Experience
            </h1>

            <div className="timeline max-w-6xl  relative mx-auto after:content-[''] after:absolute after:w-2 after:bg-black after:top-0 after:bottom-0 after:left-10 after:md:left-1/2 after:ml-[-3px]">
                {experience.map((exp, idx) => (
                    <>
                        <div
                            className={`timeline_container ${
                                exp.position == "left"
                                    ? "left-1/2 md:left-0 left-container"
                                    : "left-1/2 right-container"
                            } `}
                            key={exp.title}
                        >
                            <div className="timeline_content">
                                <span className="text-lg font-semibold">
                                    {exp.period}
                                </span>
                                <h2 className="text-xl font-black">
                                    {exp.title}
                                </h2>
                                <span className="font-semibold">
                                    {exp.location}
                                </span>
                                <p className="text-sm">{exp.description}</p>
                            </div>
                        </div>
                    </>
                ))}
            </div>

            <div id="certifications" className="mx-12 mt-12 md:mx-0">
                <h1 className="text-left font-noto-serif font-extrabold text-4xl md:text-6xl mb-8">
                    Certifications
                </h1>

                <Carousel className="items-center justify-center">
                    <CarouselContent>
                        {[...certifications].map((certificate, i) => (
                            <CarouselItem
                                className="sm:basis-1/2 lg:basis-1/3"
                                key={certificate.title}
                            >
                                <img
                                    src={certificate.imageLink}
                                    alt={certificate.title}
                                    className="w-full h-auto object-contain"
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="absolute top-1/2 -left-10 flex items-center justify-center">
                        <CarouselPrevious className="relative left-0 translate-x-0 hover:translate-x-0" />
                    </div>
                    <div className="absolute top-1/2 -right-10 flex items-center justify-center">
                        <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}

export default Education;

import experience from "~/data/experience";

function test() {
    return (
        <div className="timeline max-w-4xl py-8 relative mx-auto after:content-[''] after:absolute after:w-2 after:bg-black after:top-0 after:bottom-0 after:left-1/2 after:ml-[-3px]">
            {experience.map((exp, idx) => (
                <>
                    <div
                        className={`timeline_container ${
                            exp.position == "left"
                                ? "left-0 left-container"
                                : "left-1/2 right-container"
                        } `}
                        key={exp.title}
                    >
                        <div className="timeline_content">
                            <h2 className="text-xl font-bold">{exp.title}</h2>
                            <span className="text-lg">{exp.period}</span>
                            <p>{exp.description}</p>
                        </div>
                    </div>
                </>
            ))}

            {/* <div className="timeline_container left-1/2 right-container">
                <div className="timeline_content">
                    <h2>2016</h2>
                    <p>Lorem ipsum..</p>
                </div>
            </div> */}
        </div>
    );
}

export default test;

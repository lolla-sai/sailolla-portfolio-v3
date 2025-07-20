import React, { useState, useEffect } from "react";

interface TypewriterProps {
    text: string;
    speed?: number; // Speed of typing in milliseconds
    delay?: number; // Delay before starting the typewriter effect
}

const Typewriter = ({ text, speed = 100, delay = 500 }: TypewriterProps) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [doneTyping, setDoneTyping] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((i) => i + 1);
            } else {
                setDoneTyping(true);
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [index, text, speed]);

    return (
        <span className="typewriter-text">
            {displayedText}
            {!doneTyping && (
                <span className="blinking-dot inline-block w-3.5 h-3.5 md:w-5 md:h-5 ml-1 rounded-full bg-black"></span>
            )}
        </span>
    );

    //     display: inline-block;
    //   width: 15px;
    //   height: 15px;
    //   margin-left: 3px;
    //   border-radius: 50%;
    //   background-color: #000;
};

export default Typewriter;

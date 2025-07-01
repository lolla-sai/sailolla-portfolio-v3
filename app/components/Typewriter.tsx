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
            {!doneTyping && <span className="blinking-dot"></span>}
        </span>
    );
};

export default Typewriter;

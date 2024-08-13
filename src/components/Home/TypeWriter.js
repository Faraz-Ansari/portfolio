import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Software Developer",
                    "MERN Stack Developer",
                    "Competitive Programmer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default TypeWriter;

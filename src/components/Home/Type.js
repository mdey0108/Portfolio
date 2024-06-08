import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Production Support Engineer",
          "Freelancer",
          "Full Stack Dev_loafer",
          "Corporate Mazdoor",
          "Friday Lover",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

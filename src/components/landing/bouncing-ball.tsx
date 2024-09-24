import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BouncingText = () => {
  const textRef = useRef(null);
  const text = "Rimes";

  useEffect(() => {
    if (textRef.current) {
      const balls = (textRef.current as HTMLElement).querySelectorAll(".ball");

      gsap.set(balls, { y: -200 }); // Start position

      gsap.to(balls, {
        y: 0, // End position
        duration: 0.5,
        repeat: -1, // Infinite repeats
        yoyo: true, // Bounce back
        ease: "bounce.out",
        stagger: 0.1, // Stagger the animation for each ball
      });
    }
  }, []);

  return (
    <div
      style={{
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div ref={textRef} style={{ display: "flex", position: "relative" }}>
        {text.split("").map((letter, index) => (
          <div
            key={index}
            style={{
              fontSize: "50px",
              margin: "0 5px",
              position: "relative",
            }}
          >
            <div
              className="ball"
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "red",
                position: "absolute",
                top: "-30px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            ></div>
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BouncingText;

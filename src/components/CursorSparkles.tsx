import { useEffect } from "react";
import "../assets/styles/CursorSparkles.scss";

function CursorSparkles() {
  useEffect(() => {
    // Don't run the effect on touch devices
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (!canHover.matches) return;

    const colors = [
      "#5683ad", // blue
      "#8fb4d2", // light blue
      "#c8796f", // coral
      "#b9657a", // rose
      "#c9a15c"  // gold
    ];

    let lastSparkle = 0;

    const createSparkle = (event: MouseEvent) => {
      const now = Date.now();

      // Controls how frequently sparkles appear.
      // Higher number = fewer sparkles.
      if (now - lastSparkle < 140) return;

      lastSparkle = now;

      const sparkle = document.createElement("span");

      sparkle.className = "cursor-sparkle";

      const size = Math.random() * 5 + 4;

      const offsetX = (Math.random() - 0.5) * 32;
      const offsetY = (Math.random() - 0.5) * 32;

      sparkle.style.left = `${event.clientX + offsetX}px`;
      sparkle.style.top = `${event.clientY + offsetY}px`;

      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;

      sparkle.style.color =
        colors[Math.floor(Math.random() * colors.length)];

      sparkle.style.setProperty(
        "--sparkle-x",
        `${(Math.random() - 0.5) * 18}px`
      );

      sparkle.style.setProperty(
        "--sparkle-y",
        `${Math.random() * -18 - 5}px`
      );

      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 700);
    };

    window.addEventListener("mousemove", createSparkle);

    return () => {
      window.removeEventListener("mousemove", createSparkle);
    };
  }, []);

  return null;
}

export default CursorSparkles;
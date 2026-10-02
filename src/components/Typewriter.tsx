import { useEffect, useState } from "react";

const words = [
  "data analyst",
  "problem solver",
  "caffeine addict",
  "spreadsheet guru",
  "avid crafter",
  "self-proclaimed foodie",
];

function Typewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];

    let delay = 120;

    if (waiting) {
      delay = 600;
    } else if (!deleting && text === word) {
      delay = 2500;
    } else if (deleting) {
      delay = 75;
    }

    const timeout = window.setTimeout(() => {
      if (waiting) {
        setWaiting(false);
        return;
      }

      if (!deleting) {
        if (text === word) {
          setDeleting(true);
          return;
        }

        setText(word.slice(0, text.length + 1));
      } else {
        if (text === "") {
          setDeleting(false);
          setWaiting(true);
          setWordIndex((current) => (current + 1) % words.length);
          return;
        }

        setText(word.slice(0, text.length - 1));
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [text, deleting, waiting, wordIndex]);

  const word = words[wordIndex];
  const article = /^[aeiou]/i.test(word) ? "an" : "a";

  return (
    <p className="typewriter">
      <span className="typewriter-prefix">I'm {article} </span>
      <span className="typewriter-word">{text}</span>
      <span className="typewriter-cursor" aria-hidden="true" />
    </p>
  );
}

export default Typewriter;
import { useState, useEffect } from "react";

export function useTypewriter(words: string[], speed = 150, pause = 1500) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (index >= words.length) {
      setIndex(0); // Reinicia o loop
      return;
    }

    if (subIndex === words[index].length + 1 && !reverse) {
      // Palavra completa, espera um pouco antes de apagar
      const timeout = setTimeout(() => setReverse(true), pause);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      // Palavra apagada totalmente, passa para a próxima
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setText(words[index].substring(0, subIndex));
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? speed / 2 : speed); // Apaga mais rápido do que digita

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, speed, pause]);

  return text;
}
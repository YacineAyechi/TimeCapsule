// components/FloatingEmojis.js
import { useEffect, useState } from "react";

const FloatingEmojis = ({ trigger }) => {
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    if (trigger) {
      const newEmojis = Array.from({ length: 10 }).map((_, index) => ({
        id: index,
        left: Math.random() * 100,
        animationDelay: Math.random() * 2,
      }));
      setEmojis(newEmojis);
      setTimeout(() => setEmojis([]), 3000); // Clear emojis after 3 seconds
    }
  }, [trigger]);

  return (
    <div className="relative w-full h-screen pointer-events-none overflow-hidden">
      {emojis.map((emoji) => (
        <div
          key={emoji.id}
          className="absolute bottom-0 text-2xl animate-float"
          style={{
            left: `${emoji.left}%`,
            animationDelay: `${emoji.animationDelay}s`,
          }}
        >
          🎉
        </div>
      ))}
    </div>
  );
};

export default FloatingEmojis;

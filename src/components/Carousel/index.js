import { useState, useEffect } from "react";

export default function Carousel({ articles, interval = 4000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevArticle = () => {
    setCurrentIndex((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
  };

  const nextArticle = () => {
    setCurrentIndex((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
  };

  // Auto-play with pause on hover
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextArticle();
    }, interval);
    return () => clearInterval(timer);
  }, [currentIndex, isHovered]);

  return (
    <div
      className="w-full max-w-2xl mx-auto p-8 bg-white shadow-xl rounded-2xl flex flex-col items-center space-y-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-40 overflow-hidden flex items-center justify-center">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${articles.length * 100}%`,
          }}
        >
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="w-full flex-shrink-0 flex items-center justify-center text-2xl font-semibold tracking-tight text-balance text-stone-600 px-6 text-center"
            >
              {article}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-6">
        <button
          onClick={prevArticle}
          className="px-5 py-2 rounded-lg bg-gradient-to-b font-semibold tracking-tight text-balance from-yellow-200 to-yellow-300 text-stone-600 hover:from-yellow-300 hover:to-yellow-400 shadow-md transition"
        >
          Prev
        </button>
        <button
          onClick={nextArticle}
          className="px-5 py-2 rounded-lg bg-gradient-to-b font-semibold tracking-tight text-balance from-cyan-200 to-cyan-300 text-stone-600 hover:from-cyan-300 hover:to-cyan-400 shadow-md transition"
        >
          Next
        </button>
      </div>

      <div className="flex gap-2 mt-4">
        {articles.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full transition ${
              idx === currentIndex ? "bg-cyan-400 scale-110" : "bg-stone-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

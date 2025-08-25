import React, { useEffect, useState } from "react";
import { Modal } from "components/Modal";

export default function NasaApod() {
  const [apod, setApod] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setApod(data))
      .catch((err) => console.error(err));
  }, []);

  if (!apod) return <p className="text-center p-4">Loading...</p>;

  return (
    <section className="w-full bg-stone-900 text-white py-12 px-6">
      <p className="text-4xl font-semibold tracking-tight text-balance mb-8 text-center">
        In case you don't look up enough...
      </p>
      <div className="flex flex-row items-center">
        <div className="basis-3/5">
          <div className="flex justify-center">
            {apod.media_type === "image" ? (
              <img
                src={apod.url}
                alt={apod.title}
                className="rounded-2xl shadow-2xl max-h-[500px] object-cover"
              />
            ) : (
              <iframe
                title="space-video"
                src={apod.url}
                allow="encrypted-media"
                allowFullScreen
                className="w-full h-[400px] rounded-2xl shadow-2xl"
              />
            )}
          </div>
        </div>
        <div className="basis-2/5">
          <p className="text-3xl font-semibold tracking-tight text-balance mb-8 text-center">
            {apod.title}
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-stone-900 shadow-xs hover:bg-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            See Details
          </button>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        content={
          <>
            <p className="text-xl font-semibold tracking-tight text-balance text-stone-600 m-4">
              {apod.title}
            </p>
            <p className="text-md font-semibold tracking-tight text-balance text-stone-600">
              {apod.date}
            </p>
            <p className="text-sm font-semibold tracking-tight text-balance text-stone-600 m-4">
              {apod.explanation}
            </p>
          </>
        }
      />
    </section>
  );
}

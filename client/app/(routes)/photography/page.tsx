"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";

import photos from "@/images/photography";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  900: 2,
  500: 1,
};

const Photography = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((i) =>
        i === null ? i : (i + delta + photos.length) % photos.length
      ),
    []
  );

  useEffect(() => {
    if (openIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, step]);

  return (
    <div className="p-4">
      <div>the art of photography</div>

      {photos.length === 0 && (
        <div className="mt-6 text-light-description">
          photos coming soon.
        </div>
      )}

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photos.map((photo, index) => (
          <button
            key={index}
            onClick={() => setOpenIndex(index)}
            className="m-2 relative block w-full cursor-zoom-in"
          >
            <Image
              src={photo}
              alt={`Photo ${index + 1}`}
              placeholder="blur"
              sizes="(max-width: 500px) 100vw, (max-width: 900px) 50vw, 33vw"
              className="rounded-lg w-full h-auto transition-opacity hover:opacity-90"
            />
          </button>
        ))}
      </Masonry>

      {openIndex !== null && (
        <div
          onClick={close}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-white/95 p-[25px] md:p-[60px] cursor-zoom-out"
        >
          <Image
            src={photos[openIndex]}
            alt={`Photo ${openIndex + 1}`}
            placeholder="blur"
            sizes="100vw"
            className="max-h-full w-auto h-auto max-w-full object-contain"
          />

          {photos.length > 1 && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-[20px] left-0 right-0 flex justify-center gap-6 text-[12px] text-light-description cursor-default"
            >
              <button onClick={() => step(-1)} className="hover:text-light-mainText">
                &larr; prev
              </button>
              <span>
                {openIndex + 1} / {photos.length}
              </span>
              <button onClick={() => step(1)} className="hover:text-light-mainText">
                next &rarr;
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Photography;

"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";

import type { Photo } from "@/utils/photos";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
};

const PhotoGallery = ({ photos }: { photos: Photo[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((i) =>
        i === null ? i : (i + delta + photos.length) % photos.length
      ),
    [photos.length]
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

  const openPhoto = openIndex !== null ? photos[openIndex] : null;

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
          <figure key={photo.file}>
            <button
              onClick={() => setOpenIndex(index)}
              className="relative block w-full cursor-zoom-in"
            >
              <Image
                src={photo.src}
                alt={photo.place ?? `Photo ${index + 1}`}
                placeholder="blur"
                sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw"
                className="rounded-lg w-full h-auto transition-opacity hover:opacity-90"
              />
            </button>
            {(photo.caption || photo.place) && (
              <figcaption className="mt-[6px] flex justify-between gap-4 text-[11px] text-light-description">
                <span>{photo.caption}</span>
                <span className="text-light-subText">{photo.place}</span>
              </figcaption>
            )}
          </figure>
        ))}
      </Masonry>

      {openPhoto && openIndex !== null && (
        <div
          onClick={close}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-white/95 p-[25px] md:p-[60px] cursor-zoom-out"
        >
          <div className="relative flex min-h-0 w-full flex-1 items-center justify-center">
            <Image
              src={openPhoto.src}
              alt={openPhoto.place ?? `Photo ${openIndex + 1}`}
              placeholder="blur"
              sizes="100vw"
              className="max-h-full w-auto h-auto max-w-full object-contain"
            />
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className="mt-[16px] text-center text-[12px] cursor-default"
          >
            {openPhoto.place && (
              <div className="text-light-mainText font-bold">
                {openPhoto.place}
              </div>
            )}
            {openPhoto.caption && (
              <div className="text-light-description">
                {openPhoto.caption}
              </div>
            )}
            {photos.length > 1 && (
              <div className="mt-[6px] flex justify-center gap-6 text-light-description">
                <button
                  onClick={() => step(-1)}
                  className="hover:text-light-mainText"
                >
                  &larr; prev
                </button>
                <span>
                  {openIndex + 1} / {photos.length}
                </span>
                <button
                  onClick={() => step(1)}
                  className="hover:text-light-mainText"
                >
                  next &rarr;
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;

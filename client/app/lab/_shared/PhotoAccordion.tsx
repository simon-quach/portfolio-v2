"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import type { PlaceholderPhoto } from "./placeholders";

export default function PhotoAccordion({
  photos,
  height = 360,
}: {
  photos: PlaceholderPhoto[];
  height?: number;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex gap-[6px]" style={{ height }}>
      {photos.map((photo, index) => {
        const isActive = index === active;
        return (
          <button
            key={photo.src}
            onMouseEnter={() => setActive(index)}
            onClick={() => setActive(index)}
            aria-label={photo.place}
            className="relative min-w-0 overflow-hidden transition-[flex-grow] duration-500 ease-out"
            style={{ flexGrow: isActive ? 6 : 1, flexBasis: 0 }}
          >
            <img
              src={photo.src}
              alt={photo.place}
              className={`h-full w-full object-cover transition-[filter] duration-500 ${
                isActive ? "" : "grayscale"
              }`}
            />
            <div
              className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-[10px] text-left text-[11px] text-white transition-opacity duration-300 ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              {photo.place}
              <div className="text-white/70">{photo.exif}</div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

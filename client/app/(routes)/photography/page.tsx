"use client"

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
  return (
    <div className="p-4">
      <div>the art of photography</div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photos.map((photo, index) => (
          <div key={index} className="m-2 relative">
            <Image
              src={photo}
              alt={`Photo ${index + 1}`}
              placeholder="blur"
              className="rounded-lg w-full h-auto"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Photography;

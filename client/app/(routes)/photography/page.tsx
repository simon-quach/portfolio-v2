"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import Masonry from "react-masonry-css";

import { storage } from "@/utils/firebaseConfig";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  900: 2,
  500: 1,
};

const Photography = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const storageRef = ref(storage);
      const res = await listAll(storageRef);

      const urls = await Promise.all(
        res.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return url;
        })
      );

      setImageUrls(urls);
    };

    fetchImages();
  }, []);

  return (
    <div className="p-4">
      <div>the art of photography</div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {imageUrls.map((url, index) => (
          <div key={index} className="m-2 relative">
            <Image
              src={url}
              alt={`Image ${index}`}
              width={500}
              height={500}
              layout="responsive"
              className="rounded-lg w-full"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Photography;

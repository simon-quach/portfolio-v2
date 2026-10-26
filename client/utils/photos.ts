import type { StaticImageData } from "next/image";

import photoFiles, { details } from "@/images/photography";
import { getPhotoMeta } from "@/utils/exif";

export interface Photo {
  file: string;
  src: StaticImageData;
  place?: string;
  caption: string | null;
}

// All gallery photos with their captions, newest first. Server-only: reads
// metadata from disk at build time.
export async function getPhotos(): Promise<Photo[]> {
  const photos = await Promise.all(
    photoFiles.map(async ({ file, src }) => {
      const meta = await getPhotoMeta(file);
      const override = details[file]?.exif;

      return {
        file,
        src,
        place: details[file]?.place,
        caption: override !== undefined ? override || null : meta.caption,
        takenAt: meta.takenAt,
      };
    })
  );

  return photos
    .sort((a, b) => b.takenAt - a.takenAt || a.file.localeCompare(b.file))
    .map(({ takenAt: _takenAt, ...photo }) => photo);
}

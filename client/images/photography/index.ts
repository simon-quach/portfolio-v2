// Every image in this folder shows up in the gallery automatically, newest
// first (by the date the photo was taken). To add a photo, just drop it in.
//
// Camera details (camera · focal length · aperture · shutter · iso) are read
// from each photo's own metadata. Use `details` below, keyed by file name, to
// add a place or override the camera line ("" hides it):
//
//   "dscf0672.jpg": { place: "kyoto" },
//   "dscf0678.jpg": { place: "seattle", exif: "" },
//
// Tip: shrink big originals first (they're served resized anyway), e.g.
//   sips -Z 2560 -s formatOptions 82 IN.JPG --out images/photography/in.jpg

import type { StaticImageData } from "next/image";

export interface PhotoDetails {
  place?: string;
  // Overrides the camera details read from the file ("" hides them)
  exif?: string;
}

export const details: Record<string, PhotoDetails> = {};

export interface PhotoFile {
  file: string;
  src: StaticImageData;
}

// Bundler-provided list of every image in this folder
const context = require.context("./", false, /\.(jpe?g|png|webp)$/i);

const photoFiles: PhotoFile[] = context.keys().map((key) => ({
  file: key.replace("./", ""),
  src: context(key).default,
}));

export default photoFiles;

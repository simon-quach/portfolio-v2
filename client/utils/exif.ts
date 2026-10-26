import fs from "fs/promises";
import path from "path";
import exifr from "exifr";

const PHOTO_DIR = path.join(process.cwd(), "images", "photography");

// Cameras whose metadata name isn't the one people know them by
const cameraNames: Record<string, string> = {
  "ilce-7m4": "a7 iv",
};

function formatCamera(model: unknown): string {
  const name = String(model).trim().toLowerCase();
  return cameraNames[name] ?? name;
}

function formatShutter(seconds: number): string {
  if (seconds >= 1) return `${Math.round(seconds * 10) / 10}s`;
  return `1/${Math.round(1 / seconds)}`;
}

export interface PhotoMeta {
  // e.g. "x-t3 · 35mm · f/5.6 · 1/640 · iso 640", or null if unavailable
  caption: string | null;
  // When the photo was taken, as a timestamp (0 if unknown)
  takenAt: number;
}

// Reads camera details from a photo in images/photography
export async function getPhotoMeta(file: string): Promise<PhotoMeta> {
  try {
    const buffer = await fs.readFile(path.join(PHOTO_DIR, file));
    const data = await exifr.parse(buffer, [
      "Model",
      "FocalLength",
      "FNumber",
      "ExposureTime",
      "ISO",
      "DateTimeOriginal",
    ]);
    if (!data) return { caption: null, takenAt: 0 };

    const parts = [
      data.Model && formatCamera(data.Model),
      data.FocalLength && `${Math.round(data.FocalLength)}mm`,
      data.FNumber && `f/${Math.round(data.FNumber * 10) / 10}`,
      data.ExposureTime && formatShutter(data.ExposureTime),
      data.ISO && `iso ${data.ISO}`,
    ].filter(Boolean);

    return {
      caption: parts.length > 0 ? parts.join(" · ") : null,
      takenAt:
        data.DateTimeOriginal instanceof Date
          ? data.DateTimeOriginal.getTime()
          : 0,
    };
  } catch {
    return { caption: null, takenAt: 0 };
  }
}

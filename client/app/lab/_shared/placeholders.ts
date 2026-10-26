// Stand-in photos for lab prototypes (from picsum.photos) until real photos
// are added to images/photography. Camera details are made up.

export interface PlaceholderPhoto {
  src: string;
  width: number;
  height: number;
  exif: string;
  place: string;
}

const make = (
  id: number,
  width: number,
  height: number,
  exif: string,
  place: string
): PlaceholderPhoto => ({
  src: `https://picsum.photos/id/${id}/${width}/${height}`,
  width,
  height,
  exif,
  place,
});

export const photos: PlaceholderPhoto[] = [
  make(1015, 1200, 800, "x100v · 23mm · f/2.8 · 1/500", "lake district"),
  make(1016, 800, 1000, "x100v · 23mm · f/4 · 1/250", "big sur"),
  make(1018, 1200, 800, "fx3 · 35mm · f/5.6 · 1/320", "patagonia"),
  make(1036, 800, 1000, "x100v · 23mm · f/2 · 1/1000", "hokkaido"),
  make(1039, 1200, 800, "fx3 · 24mm · f/8 · 1/200", "iceland"),
  make(1043, 800, 1000, "x100v · 23mm · f/2.8 · 1/125", "seattle"),
  make(10, 1200, 800, "fx3 · 50mm · f/1.8 · 1/640", "olympic np"),
  make(28, 800, 1000, "x100v · 23mm · f/5.6 · 1/250", "kyoto"),
  make(29, 1200, 800, "fx3 · 24mm · f/11 · 1/160", "yosemite"),
  make(37, 800, 1000, "x100v · 23mm · f/2 · 1/60", "new york"),
  make(42, 800, 1000, "x100v · 23mm · f/2 · 1/125", "san diego"),
  make(57, 1200, 800, "fx3 · 35mm · f/4 · 1/500", "la jolla"),
];

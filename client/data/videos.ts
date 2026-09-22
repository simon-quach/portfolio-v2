// Add your YouTube videos here.
// To add a new video:
//   1. Find the video ID from the YouTube URL (the part after "watch?v=")
//   2. Add a new entry to the `videos` array below

export interface Video {
  id: string;
  title: string;
}

const videos: Video[] = [
  {
    id: "g3twPHsYFh8",
    title: "moving into my new seattle apartment",
  },
  {
    id: "fxGEqIF8FSt",
    title: "apartment hunting in seattle | post-grad life",
  },
  {
    id: "wf_qNCyAIqF",
    title: "day in the life of an amazon software engineer intern (seattle)",
  },
];

export default videos;

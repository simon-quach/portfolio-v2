// Fallback list of YouTube videos, newest first.
// The site pulls videos from the channel's RSS feed automatically; this list
// is only shown when that feed is unavailable.
// To add a new video:
//   1. Find the video ID from the YouTube URL (the part after "watch?v=")
//   2. Add a new entry to the top of the `videos` array below

export interface Video {
  id: string;
  title: string;
}

const videos: Video[] = [
  { id: "28XmE5qBBGM", title: "moving into my new seattle apartment" },
  { id: "FxtUYpU6Mn0", title: "apartment hunting in seattle | post-grad life" },
  {
    id: "g3twPHsYFh8",
    title: "day in the life of an amazon software engineer intern (seattle)",
  },
  { id: "kW_tc6kl5zM", title: "moving to seattle for my amazon internship" },
  { id: "BlHjkU85pLU", title: "our last week together at ucsd" },
  { id: "e1FE_NRdPgE", title: "traveling to nyc for a week" },
  { id: "f9CWzZ1Q34g", title: "moving back to san diego for college" },
  { id: "lBjIHdJMRr4", title: "new years resolutions at ucsd" },
  { id: "3XFZeDSgwRU", title: "the importance of hobbies" },
  { id: "MHMlD215DQQ", title: "final moments before moving into uc san diego" },
];

export default videos;

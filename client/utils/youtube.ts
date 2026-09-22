export interface Video {
  id: string;
  title: string;
  published?: string;
}

const CHANNEL_ID = "UCYYy3BGeYRLIOcedBo4rapw";
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

function decodeXmlEntities(text: string): string {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

export async function getLatestVideos(): Promise<Video[]> {
  try {
    const res = await fetch(FEED_URL, {
      // Revalidate feed every hour
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch YouTube feed: ${res.statusText}`);
    }

    const xml = await res.text();
    const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) || [];

    const videos: Video[] = [];

    for (const entry of entries) {
      const idMatch = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
      const titleMatch = entry.match(/<title>(.*?)<\/title>/);
      const publishedMatch = entry.match(/<published>(.*?)<\/published>/);

      if (idMatch && titleMatch) {
        videos.push({
          id: idMatch[1].trim(),
          title: decodeXmlEntities(titleMatch[1].trim()),
          published: publishedMatch ? publishedMatch[1].trim() : undefined,
        });
      }
    }

    return videos;
  } catch (error) {
    console.error("Error fetching YouTube RSS feed:", error);
    return [];
  }
}

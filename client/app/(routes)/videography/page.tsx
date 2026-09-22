import { getLatestVideos } from "@/utils/youtube";

const Videography = async () => {
  const videos = await getLatestVideos();

  return (
    <div>
      <div className="flex items-baseline justify-between">
        <div>the art of videography</div>
        <a
          href="https://www.youtube.com/@simon-quach"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] text-light-subText hover:text-light-mainText underline"
        >
          visit channel &rarr;
        </a>
      </div>

      {videos.length === 0 ? (
        <div className="mt-6 text-light-subText">No videos found.</div>
      ) : (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <div key={video.id}>
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-2 text-light-mainText font-bold">
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {video.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Videography;

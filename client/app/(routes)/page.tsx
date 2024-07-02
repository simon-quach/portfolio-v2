import Image from "next/image";

import HomeImage from "@/images/home-image.jpg";

export default function Home() {
  return (
    <main className="">
      <div className="relative">
        <Image src={HomeImage} alt="home-image" width={400} />
      </div>

      <div className="mt-[20px] font-bold">WELCOME!!</div>
      <div className="">
        My name is <span className="font-bold">Simon</span> - I&apos;m a blah
        blah blah blah blah blah blah blah, but on the side, I pursue
        photography, videography, and music projects.
      </div>

      <div className="mt-[20px]">
        you can find me on these professional networks:
      </div>
      <div className="text-light-mainText flex space-x-2 mt-[10px]">
        <a
          href="https://www.linkedin.com/in/simon-quach/"
          target="_blank"
          className="font-bold"
        >
          linkedin
        </a>
        <span className="cursor-default">|</span>
        <a
          href="https://github.com/simon-quach"
          target="_blank"
          className="font-bold"
        >
          github
        </a>
        <span className="cursor-default">|</span>
        <a
          href="https://devpost.com/simon-quach"
          target="_blank"
          className="font-bold"
        >
          devpost
        </a>
      </div>

      <div className="mt-[20px]">as well as these creative platforms:</div>
      <div className="text-light-mainText flex space-x-2 mt-[10px]">
        <a
          href="https://www.youtube.com/@simon-quach"
          target="_blank"
          className="font-bold"
        >
          youtube
        </a>
        <span className="cursor-default">|</span>
        <a
          href="https://www.instagram.com/simon.quach/"
          target="_blank"
          className="font-bold"
        >
          instagram
        </a>
        <span className="cursor-default">|</span>
        <a
          href="https://www.tiktok.com/@simon.quach"
          target="_blank"
          className="font-bold"
        >
          tiktok
        </a>
        <span className="cursor-default">|</span>
        <a
          href="https://open.spotify.com/artist/3SMVcm2yTCliC2bm6hSdFr?si=s6UdlVgzQqGA51L70qckyQ"
          target="_blank"
          className="font-bold"
        >
          spotify
        </a>
      </div>
    </main>
  );
}

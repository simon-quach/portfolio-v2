import Image from "next/image";

import HomeImage from "@/images/home-image.jpg";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Image src={HomeImage} alt="home-image" width={400} />
      </div>

      <div className="mt-[20px] text-2xl font-bold">WELCOME!!</div>
      <div className="">
        my name is <span className="font-bold">Simon</span> and i love to build
        things!
      </div>

      {/* EDUCATION */}
      <div className="mt-[4rem]">
        <div className="text-2xl font-bold">EDUCATION</div>

        <br />

        <div className="border-l-4 border-gray-500 pl-4">
          <div className="font-bold text-2xl">uc san diego</div>
          <div>b.s. in mathematics - computer science</div>

          <div>graduating 2026</div>
        </div>

        <div className="border-l-4 border-gray-500 pl-4 mt-[1rem]">
          <div className="font-bold text-2xl">orange coast college</div>
          <div>a.s. in mathematics</div>

          <div>august 2022 - may 2023</div>
        </div>
      </div>

      {/* EXPERIENCES */}
      <div className="mt-[4rem]">
        <div className="text-2xl font-bold">EXPERIENCES</div>

        <br />

        <div className="border-l-4 border-gray-500 pl-4">
          <div className="font-bold text-2xl">google</div>
          <div>software engineer intern</div>
          <div>seattle, wa</div>
          <br />
          <div>incoming summer 2026</div>
        </div>

        <div className="border-l-4 border-gray-500 pl-4 mt-[1rem]">
          <div className="font-bold text-2xl">amazon web services</div>
          <div>software development engineer intern</div>
          <div>seattle, wa</div>
          <br />
          <div>june 2025 - september 2025</div>
        </div>

        <div className="border-l-4 border-gray-500 pl-4 mt-[1rem]">
          <div className="font-bold text-2xl">
            center for applied internet data analysis
          </div>
          <div>frontend developer intern </div>
          <div>la jolla, ca</div>
          <br />
          <div>june 2024 - march 2025</div>
        </div>
      </div>

      {/* SOCIALS */}
      <div className="mt-[4rem]">
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
      </div>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";

import HomeImage from "@/images/home-image.jpg";
import { getPhotos } from "@/utils/photos";
import { getLatestVideos } from "@/utils/youtube";

const education = [
  {
    school: "uc san diego",
    degree: "b.s. in mathematics - computer science",
    dates: "september 2023 - june 2026",
  },
  {
    school: "orange coast college",
    degree: "a.s. in mathematics",
    dates: "august 2022 - may 2023",
  },
];

const experiences = [
  {
    company: "amazon",
    role: "software development engineer",
    location: "seattle, wa",
    dates: "september 2026 - present",
  },
  {
    company: "google",
    role: "software engineer intern",
    location: "seattle, wa",
    dates: "june 2026 - september 2026",
  },
  {
    company: "amazon web services",
    role: "software development engineer intern",
    location: "seattle, wa",
    dates: "june 2025 - september 2025",
  },
  {
    company: "center for applied internet data analysis",
    role: "frontend developer intern",
    location: "la jolla, ca",
    dates: "june 2024 - march 2025",
  },
];

const professionalLinks = [
  { name: "linkedin", href: "https://www.linkedin.com/in/simon-quach/" },
  { name: "github", href: "https://github.com/simon-quach" },
  { name: "devpost", href: "https://devpost.com/simon-quach" },
];

const creativeLinks = [
  { name: "youtube", href: "https://www.youtube.com/@simon-quach" },
  { name: "instagram", href: "https://www.instagram.com/simon.quach/" },
  { name: "tiktok", href: "https://www.tiktok.com/@simon.quach" },
  {
    name: "spotify",
    href: "https://open.spotify.com/artist/3SMVcm2yTCliC2bm6hSdFr?si=s6UdlVgzQqGA51L70qckyQ",
  },
];

// Offset anchored sections so the fixed mobile header doesn't cover them
const sectionClass = "mt-[4rem] scroll-mt-[110px] md:scroll-mt-[50px]";

const LinkRow = ({ links }: { links: { name: string; href: string }[] }) => (
  <div className="text-light-mainText flex flex-wrap gap-x-2 mt-[10px]">
    {links.map((link, index) => (
      <span key={link.name} className="flex space-x-2">
        {index > 0 && <span className="cursor-default">|</span>}
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:underline"
        >
          {link.name}
        </a>
      </span>
    ))}
  </div>
);

export default async function Home() {
  const [[latestVideo], photos] = await Promise.all([
    getLatestVideos(),
    getPhotos(),
  ]);
  const current = experiences[0];

  return (
    <main className="max-w-[640px]">
      <div className="relative">
        <Image
          src={HomeImage}
          alt="simon sitting in a garden"
          width={400}
          placeholder="blur"
          priority
        />
      </div>

      <div className="mt-[20px] text-2xl font-bold">WELCOME!!</div>
      <div className="">
        my name is <span className="font-bold">Simon</span> and i love to build
        things!
      </div>
      <div className="mt-[10px] text-light-description">
        currently: {current.role} @ {current.company}, {current.location}
      </div>

      {/* EDUCATION */}
      <section id="education" className={sectionClass}>
        <div className="text-2xl font-bold">EDUCATION</div>

        <br />

        {education.map((item, index) => (
          <div
            key={item.school}
            className={`border-l-4 border-gray-500 pl-4 ${
              index > 0 ? "mt-[1rem]" : ""
            }`}
          >
            <div className="font-bold text-2xl">{item.school}</div>
            <div>{item.degree}</div>
            <div>{item.dates}</div>
          </div>
        ))}
      </section>

      {/* EXPERIENCES */}
      <section id="experience" className={sectionClass}>
        <div className="text-2xl font-bold">EXPERIENCES</div>

        <br />

        {experiences.map((item, index) => (
          <div
            key={item.company + item.dates}
            className={`border-l-4 border-gray-500 pl-4 ${
              index > 0 ? "mt-[1rem]" : ""
            }`}
          >
            <div className="font-bold text-2xl">{item.company}</div>
            <div>{item.role}</div>
            <div>{item.location}</div>
            <br />
            <div>{item.dates}</div>
          </div>
        ))}
      </section>

      {/* CREATIVE */}
      {(photos.length > 0 || latestVideo) && (
        <section id="creative" className={sectionClass}>
          <div className="text-2xl font-bold">BEHIND THE LENS</div>

          {photos.length > 0 && (
            <>
              <div className="mt-[20px] grid grid-cols-3 gap-2">
                {photos.slice(0, 3).map((photo, index) => (
                  <Link
                    key={photo.file}
                    href="/photography"
                    className="relative aspect-[4/5] overflow-hidden"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.place ?? `photo ${index + 1}`}
                      fill
                      sizes="200px"
                      placeholder="blur"
                      className="object-cover transition-opacity hover:opacity-80"
                    />
                  </Link>
                ))}
              </div>
              <Link
                href="/photography"
                className="inline-block mt-[10px] text-[12px] text-light-description hover:text-light-mainText"
              >
                see all photos &rarr;
              </Link>
            </>
          )}

          {latestVideo && (
            <div className="mt-[20px]">
              <div className="text-light-description text-[12px]">
                latest video
              </div>
              <a
                href={`https://www.youtube.com/watch?v=${latestVideo.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block mt-[6px] max-w-[400px]"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={`https://i.ytimg.com/vi/${latestVideo.id}/hqdefault.jpg`}
                    alt={latestVideo.title}
                    fill
                    sizes="400px"
                    className="object-cover transition-opacity group-hover:opacity-80"
                  />
                </div>
                <div className="mt-[6px] text-light-mainText font-bold group-hover:underline">
                  {latestVideo.title}
                </div>
              </a>
              <Link
                href="/videography"
                className="inline-block mt-[10px] text-[12px] text-light-description hover:text-light-mainText"
              >
                see all videos &rarr;
              </Link>
            </div>
          )}
        </section>
      )}

      {/* SOCIALS */}
      <section id="contact" className={sectionClass}>
        <div className="text-2xl font-bold">SAY HI</div>
        <div className="mt-[20px]">
          you can find me on these professional networks:
        </div>
        <LinkRow links={professionalLinks} />

        <div className="mt-[20px]">as well as these creative platforms:</div>
        <LinkRow links={creativeLinks} />
      </section>

      <footer className="mt-[4rem] text-[12px] text-light-description">
        © {new Date().getFullYear()} simon quach
      </footer>
    </main>
  );
}

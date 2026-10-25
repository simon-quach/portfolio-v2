"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Typewriter from "typewriter-effect/dist/core";

const SPOTIFY_URL =
  "https://open.spotify.com/artist/3SMVcm2yTCliC2bm6hSdFr?si=s6UdlVgzQqGA51L70qckyQ";

const sections = ["education", "experience", "contact"];

const typewriterOptions = {
  strings: ["software engineer", "photographer", "videographer"],
  autoStart: true,
  loop: true,
  delay: 40,
  pauseFor: 3000,
};

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path ? "text-light-mainText" : "hover:text-light-mainText";

  const sectionClass = (id: string) =>
    pathname === "/" && activeSection === id
      ? "text-light-mainText translate-x-1"
      : "hover:text-light-mainText";

  // Close the menu when the pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Track which home section is currently in view
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // The last section may never reach the middle of the viewport
    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) setActiveSection(sections[sections.length - 1]);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    const typewriter1 = new Typewriter("#typewriter1", typewriterOptions);
    const typewriter2 = new Typewriter("#typewriter2", typewriterOptions);

    // Stop and clear on unmount so dev strict mode doesn't stack two cursors
    return () => {
      typewriter1.stop();
      typewriter2.stop();
      ["typewriter1", "typewriter2"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = "";
      });
    };
  }, []);

  return (
    <div className="fixed md:h-screen md:w-[300px] p-[50px] text-[13px] transition-all z-50">
      <div className="hidden md:block">
        <Link href="/" className={`text-light-logo inline-block text-[20px]`}>
          simon quach
        </Link>
        <div id="typewriter1" className="text-light-description"></div>

        <div className="mt-[2rem] text-light-description">
          {sections.map((id) => (
            <Link
              key={id}
              href={`/#${id}`}
              className={`block transition-all ${sectionClass(id)}`}
            >
              {id}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button
              onClick={() => setIsHovered(!isHovered)}
              className={`${
                isHovered ? "text-light-mainText" : "hover:text-light-mainText"
              } cursor-pointer`}
            >
              creative
            </button>
            {isHovered && (
              <div className="absolute left-2">
                <Link
                  href="/photography"
                  className={`block ${linkClass("/photography")}`}
                >
                  photography
                </Link>
                <Link
                  href="/videography"
                  className={`block ${linkClass("/videography")}`}
                >
                  videography
                </Link>
                <a
                  href={SPOTIFY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-light-mainText"
                >
                  music &#8599;
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="md:hidden fixed top-0 left-0 w-full bg-white p-[25px]">
        <Link href="/" className={`text-light-logo inline-block text-[20px]`}>
          simon quach
        </Link>
        <div id="typewriter2" className="text-light-description"></div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 bg-gray-200 hover:bg-gray-300 focus:outline-none absolute top-[25px] right-[25px]"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white p-[25px] ">
          <div className="flex justify-between items-center">
            <div className="text-[20px] font-bold">Menu</div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 bg-gray-200 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="mt-8">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block ${linkClass("/")}`}
            >
              home
            </Link>
            {sections.map((id) => (
              <Link
                key={id}
                href={`/#${id}`}
                onClick={() => setIsMenuOpen(false)}
                className="block mt-4"
              >
                {id}
              </Link>
            ))}
            <div className="relative mt-4">
              <div>creative</div>
              <div className="mt-2 ml-4">
                <Link
                  href="/photography"
                  className={`block ${linkClass("/photography")}`}
                >
                  photography
                </Link>
                <Link
                  href="/videography"
                  className={`block mt-2 ${linkClass("/videography")}`}
                >
                  videography
                </Link>
                <a
                  href={SPOTIFY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2"
                >
                  music &#8599;
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Typewriter from "typewriter-effect/dist/core";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path ? "text-light-description" : "hover:text-light-mainText";

  // Close the menu when the pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const typewriter1 = new Typewriter("#typewriter1", {
      strings: [
        "software engineer",
        "student",
        "music producer",
        "photographer",
        "videographer",
      ],
      autoStart: true,
      loop: true,
      delay: 40,
      pauseFor: 3000,
    });
    const typewriter2 = new Typewriter("#typewriter2", {
      strings: [
        "software engineer",
        "student",
        "music producer",
        "photographer",
        "videographer",
      ],
      autoStart: true,
      loop: true,
      delay: 40,
      pauseFor: 3000,
    });
  }, []);

  return (
    <div className="fixed h-screen w-[300px] p-[50px] text-[13px] transition-all z-50">
      <div className="hidden md:block">
        <Link href="/" className={`text-light-logo block text-[20px]`}>
          simon quach
        </Link>
        <div id="typewriter1" className="text-light-description"></div>

        <div className="mt-[2rem] hover:text-light-description">
          <Link
            href="/education"
            className={`block ${linkClass("/education")}`}
          >
            education
          </Link>
          <Link
            href="/experience"
            className={`block ${linkClass("/experience")}`}
          >
            experience
          </Link>
          <Link href="/projects" className={`block ${linkClass("/projects")}`}>
            projects
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={`${isHovered && "text-light-mainText"} cursor-pointer`}
            >
              creative
            </div>
            {isHovered && (
              <div className="absolute left-2">
                <Link href="/music" className={`block ${linkClass("/music")}`}>
                  music
                </Link>
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
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="md:hidden fixed top-0 left-0 w-full bg-white p-[25px]">
        <Link href="/" className={`text-light-logo block text-[20px]`}>
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
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white p-[25px] pt-[100px]">
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
            <Link href="/" className={`block ${linkClass("/")}`}>
              home
            </Link>
            <Link
              href="/education"
              className={`block mt-4 ${linkClass("/education")}`}
            >
              education
            </Link>
            <Link
              href="/experience"
              className={`block mt-4 ${linkClass("/experience")}`}
            >
              experience
            </Link>
            <Link
              href="/projects"
              className={`block mt-4 ${linkClass("/projects")}`}
            >
              projects
            </Link>
            <div className="relative mt-4">
              <div className="cursor-pointer">creative</div>
              <div className="mt-2 ml-4">
                <Link href="/music" className={`block ${linkClass("/music")}`}>
                  music
                </Link>
                <Link
                  href="/photography"
                  className={`block mt-2 ${linkClass("/photography")}`}
                >
                  photography
                </Link>
                <Link
                  href="/videography"
                  className={`block mt-2 ${linkClass("/videography")}`}
                >
                  videography
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

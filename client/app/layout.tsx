import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simon Quach",
  description: "multi-disciplinary developer and digital artist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inconsolata.className} flex`}>
        <Navbar />

        <div className="md:ml-[300px] md:my-[50px] my-[100px] text-light-subText text-[14px] px-[10px] md:px-0">
          {children}
        </div>
      </body>
    </html>
  );
}

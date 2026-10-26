import fs from "fs";
import path from "path";
import Link from "next/link";

// Lists every folder in app/lab that has a page.dev.tsx
function getPrototypes() {
  const labDir = path.join(process.cwd(), "app", "lab");

  return fs
    .readdirSync(labDir, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        fs.existsSync(path.join(labDir, entry.name, "page.dev.tsx"))
    )
    .map((entry) => entry.name)
    .sort();
}

// Optional one-liners shown under each prototype's name
const descriptions: Record<string, string> = {
  "photo-accordion": "hover-to-expand photo strip",
};

export const dynamic = "force-dynamic";

export default function Lab() {
  const prototypes = getPrototypes();

  return (
    <main className="max-w-[640px]">
      <div className="text-2xl font-bold">LAB</div>
      <div className="mt-[10px]">
        prototypes that only run on localhost.
      </div>

      <div className="mt-[2rem]">
        {prototypes.length === 0 ? (
          <div className="text-light-description">
            no prototypes yet. create{" "}
            <span className="text-light-mainText">
              app/lab/&lt;name&gt;/page.dev.tsx
            </span>{" "}
            and it will show up here.
          </div>
        ) : (
          prototypes.map((name) => (
            <Link
              key={name}
              href={`/lab/${name}`}
              className="group block border-l-4 border-gray-500 pl-4 mt-[1rem]"
            >
              <div className="font-bold text-light-mainText group-hover:underline">
                {name}
              </div>
              {descriptions[name] && <div>{descriptions[name]}</div>}
            </Link>
          ))
        )}
      </div>
    </main>
  );
}

import Link from "next/link";

// Dev-only: wraps every prototype under /lab with a small banner so it's
// obvious you're not looking at the real site.
export default function LabLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-[2rem] flex items-baseline gap-2 text-[12px] text-light-description">
        <Link href="/lab" className="hover:text-light-mainText">
          lab
        </Link>
        <span>· local only, not deployed</span>
      </div>
      {children}
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div>
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted, or you may have mistyped the address.
      </div>
      <Link className="font-bold  inline-block mt-[20px]" href="/">
        Return Home
      </Link>
    </div>
  );
}

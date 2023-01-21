import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="bg-indigo-600">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            <div className="ml-10 block space-x-8">
              <a
                href={"/"}
                className="text-base font-medium text-white hover:text-indigo-50"
              >
                Angular Route
              </a>
              <Link
                to="/remix"
                className="text-base font-medium text-white hover:text-indigo-50"
              >
                Remix Route
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

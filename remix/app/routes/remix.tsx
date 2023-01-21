import { Link, Outlet, useParams } from "@remix-run/react";

export default function Index() {
  const params = useParams();
  const slug = params.slug;
  return (
    <div className="">
      <div className="hidden sm:block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {[1, 2, 3, 4, 5].map((tab) => (
            <Link
              key={tab}
              to={`/remix/${tab}`}
              className={
                (`${tab}` === slug
                  ? "bg-gray-100 text-gray-700 "
                  : "text-gray-500 hover:text-gray-700 ") +
                "px-3 py-2 font-medium text-sm rounded-md"
              }
            >
              Tab {tab}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}

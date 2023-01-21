import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = ({ params }: LoaderArgs) => {
  const slug = params.slug;
  return json({
    message: "Remix Dynamic Page: " + slug,
  });
};

export default function SubRoutes() {
  const res = useLoaderData<typeof loader>();
  return <div>{res.message}</div>;
}

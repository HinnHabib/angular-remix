import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Footer from "components/Footer";
import Header from "components/Header";

import styles from "./styles/generate.app.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <main className="container mx-auto px-2 mt-4">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function CatchBoundary({ error }: { error: Error }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <div className="container mx-auto px-2 mt-4 flex items-center flex-col">
          <h1 className="text-4xl font-bold">Oh no..</h1>
          <p className="text-gray-500 font-semibold mt-3 text-lg">
            404 - We couldn't find what you were looking for.
          </p>
        </div>

        <Footer />
      </body>
    </html>
  );
}

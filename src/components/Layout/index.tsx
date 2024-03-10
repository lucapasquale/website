import React from "react";

import { Link } from "../Link";

import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <main className="container max-w-4xl mx-auto px-4 my-16">{children}</main>

      <Footer
        title="Built with Vite and Tailwind"
        links={
          <>
            <Link
              className="flex items-center gap-1 text-gray-900 dark:text-gray-300 transition-colors"
              to="https://www.github.com/lucapasquale"
            >
              Github
            </Link>

            <Link
              className="flex items-center gap-1 text-gray-900 dark:text-gray-300 transition-colors"
              to="https://www.linkedin.com/in/luca-pasquale"
            >
              Linkedin
            </Link>

            <Link
              className="flex items-center gap-1 text-gray-900 dark:text-gray-300 transition-colors"
              to="https://www.instagram.com/luca_dipasquale"
            >
              Instagram
            </Link>
          </>
        }
      />

      <Link to="/secrets" className="fixed right-0 bottom-0">
        Secrets
      </Link>
    </>
  );
}

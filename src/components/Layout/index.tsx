import React from "react";

import { Link } from "../Link";

import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="container max-w-4xl mx-auto px-4 my-16">{children}</main>
      <Footer />

      <Link to="/secrets" className="fixed right-0 bottom-0">
        Secrets
      </Link>
    </>
  );
}

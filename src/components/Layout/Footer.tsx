import React from "react";

type Props = {
  title: string;
  links: React.ReactNode;
};

export function Footer({ title, links }: Props) {
  return (
    <footer className="pb-24">
      <div className="container max-w-4xl mx-auto px-4">
        <hr className="border-gray-900 dark:border-gray-300" />

        <div className="my-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <h2>{title}</h2>

          <nav className="flex gap-x-6">{links}</nav>
        </div>
      </div>
    </footer>
  );
}

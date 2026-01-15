import { Link } from "../../Link";

import { ThemeSelector } from "./ThemeSelector";

export function Header() {
  return (
    // Since we have the background at 80% opacity, we need to have the transition duration of 80% of the default 150ms
    <header className="sticky top-0 z-10 w-full border-0 border-b border-solid border-gray-500 bg-background/80 py-6 backdrop-blur duration-120">
      <div className="container mx-auto max-w-4xl px-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-foreground">
            <h1 className="tracking-wider">LUCA PASQUALE</h1>
          </Link>

          <div className="flex items-center gap-4">
            <ThemeSelector />

            <Link to="/projects" className="text-foreground">
              <h2>PROJECTS</h2>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

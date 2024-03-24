import { Link } from "../../Link";

import { ThemeSelector } from "./ThemeSelector";

export function Header() {
  return (
    // Since we have the background at 80% opacity, we need to have the transition duration of 80% of the default 150ms
    <header className="sticky top-0 z-10 py-6 w-full bg-background/80 duration-120 backdrop-blur border-0 border-b border-solid border-gray-500">
      <div className="container max-w-4xl mx-auto px-4">
        <nav className="flex justify-between items-center">
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

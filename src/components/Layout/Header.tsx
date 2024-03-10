import { Link } from "../Link";

export function Header() {
  return (
    <header className="sticky top-0 z-10 py-6 w-full bg-gray-900/90 backdrop-blur border-0 border-b border-solid border-gray-500">
      <div className="container max-w-4xl mx-auto px-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-gray-900 dark:text-gray-300">
            <h1 className="tracking-wider">LUCA PASQUALE</h1>
          </Link>

          <div className="flex items-center space-x-4">
            <Link to="/projects" className="text-gray-900 dark:text-gray-300">
              <h2>PROJECTS</h2>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

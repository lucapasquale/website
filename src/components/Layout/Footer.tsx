import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Link } from "~components/Link";
import { Separator } from "~components/Separator";

export function Footer() {
  return (
    <footer className="pb-24">
      <div className="container max-w-4xl mx-auto px-4">
        <Separator />

        <div className="my-8 flex flex-col sm:flex-row justify-between items-center gap-y-4 sm:gap-y-0">
          <h2>Built with Vite and Tailwind</h2>

          <nav className="flex items-center gap-x-3 min-h-full">
            <Link
              to="https://www.github.com/lucapasquale"
              className="flex items-center gap-x-2 text-foreground"
            >
              <GitHubLogoIcon aria-hidden /> GitHub
            </Link>

            <Separator orientation="vertical" className="h-4" />

            <Link
              to="https://www.linkedin.com/in/luca-pasquale"
              className="flex items-center gap-x-2 text-foreground"
            >
              <LinkedInLogoIcon aria-hidden /> LinkedIn
            </Link>

            <Separator orientation="vertical" className="h-4" />

            <Link
              to="https://www.instagram.com/luca_dipasquale"
              className="flex items-center gap-x-2 text-foreground"
            >
              <InstagramLogoIcon aria-hidden /> Instagram
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

import ReactPlayer from "react-player";

import { Hero } from "~components/Hero";
import { Link } from "~components/Link";

const PLAYLIST_LINK = "https://www.youtube.com/playlist?list=PL2gDVp_0vZOQjqMex201dYpUiu1mcGX96";

export function Page() {
  return (
    <>
      <Hero title="Secrets" subTitle="How did you get here?" />

      <article className="flex flex-col items-center px-8">
        <Link to={PLAYLIST_LINK}>My dumb playlist</Link>

        <div className="hidden mt-8 sm:flex sm:justify-center sm:w-screen">
          <ReactPlayer controls url={PLAYLIST_LINK} />
        </div>
      </article>
    </>
  );
}

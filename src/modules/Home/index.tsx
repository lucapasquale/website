import { Link } from "~components/Link";
import { TechnologyTag } from "~components/TechnologyTag";

export function Page() {
  return (
    <article className="flex flex-col sm:flex-row items-center justify-between space-x-5">
      <section className="container">
        <header>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Hey, I&apos;m Luca!
          </h1>
        </header>

        <div className="mt-4 text-base sm:text-lg ">
          <p className="leading-7 [&:not(:first-child)]:mt-6 ">
            I&apos;m a software engineer from Brazil, who loves gaming and creating things. I work
            as a full stack engineer at{" "}
            <Link to="https://www.sinai.com" className="font-bold underline">
              Sinai
            </Link>{" "}
            &mdash; where I help decarbonize the planet with{" "}
            <TechnologyTag technology="typescript" /> and <TechnologyTag technology="graphql" />.
          </p>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Besides that, I&apos;ve also really enjoy writting <TechnologyTag technology="elixir" />{" "}
            code, and developing some mobile games! You can check my latest one:{" "}
            <Link
              to="https://play.google.com/store/apps/details?id=com.Bendev.UpWeGo"
              className="font-bold underline"
            >
              Up We Go
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="flex-shrink-0 mt-4 sm:mt-0 sm:ml-4 h-[240px] w-[240px] aspect-square">
        <img
          rel="preload"
          alt="avatar"
          className="rounded-full h-[240px] w-[240px]"
          src="/images/avatar.webp"
        />
      </section>
    </article>
  );
}

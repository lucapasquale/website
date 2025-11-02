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
            <Link to="https://doublehq.com/" className="font-bold underline">
              Double
            </Link>{" "}
            &mdash; where I help bookepers with <TechnologyTag technology="typescript" />.
          </p>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Besides that, I&apos;ve also really enjoy writting <TechnologyTag technology="elixir" />{" "}
            code, and developing games! You can check my last project:{" "}
            <Link to="https://github.com/lucapasquale/botchini" className="font-bold underline">
              Botchini
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="flex-shrink-0 mt-4 sm:mt-0 sm:ml-4 aspect-square">
        <img
          rel="preload"
          alt="avatar"
          className="rounded-full "
          src="/images/avatar.webp"
          width={200}
          height={200}
        />
      </section>
    </article>
  );
}

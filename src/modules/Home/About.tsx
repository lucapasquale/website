import React, { FC } from 'react'
import Image from 'next/image'

export const About: FC = () => (
  <article className="flex flex-col sm:flex-row items-center justify-between space-x-5">
    <section className="container">
      <header>
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-200 ">Hey, I&apos;m Luca!</h1>
      </header>

      <div className="mt-4 text-base sm:text-lg">
        <p className="my-3">
          I&apos;m a software engineer from Brazil, who loves gaming and creating things. I work as
          a FullStack Engineer at{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.sinaitechnologies.com/"
            className="font-bold underline"
          >
            Sinai Technologies
          </a>{' '}
          &mdash; where I help decarbonize the planet with GraphQL and Typescript.
        </p>

        <p className="my-3">
          Besides that, I&apos;ve also been learning Elixir, and developing some mobile games! You
          can check my latest one:{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://play.google.com/store/apps/details?id=com.Bendev.UpWeGo"
            className="font-bold underline"
          >
            Up We Go
          </a>
          .
        </p>
      </div>
    </section>

    <section className="flex-shrink-0 mt-4 sm:mt-0 sm:ml-4">
      <Image
        priority
        width={200}
        height={200}
        alt="avatar"
        className="rounded-full"
        src={require('../../../public/images/avatar.webp')}
      />
    </section>
  </article>
)

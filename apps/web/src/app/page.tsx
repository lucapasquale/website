import React from 'react'
import Image from 'next/image'
import { TechnologyTag } from '@website/ui'

import { Link } from '~common/components/Link'

export default function Page() {
  return (
    <article className="flex flex-col sm:flex-row items-center justify-between space-x-5">
      <section className="container">
        <header>
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200">
            Hey, I&apos;m Luca!
          </h1>
        </header>

        <div className="mt-4 text-base sm:text-lg">
          <p className="my-3">
            I&apos;m a software engineer from Brazil, who loves gaming and creating things. I work
            as a full stack engineer at{' '}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.sinaitechnologies.com/"
              className="font-bold underline"
            >
              Sinai Technologies
            </Link>{' '}
            &mdash; where I help decarbonize the planet with <TechnologyTag technology="graphql" />{' '}
            and <TechnologyTag technology="typescript" />.
          </p>

          <p className="my-3">
            Besides that, I&apos;ve also really enjoy writting <TechnologyTag technology="elixir" />{' '}
            code, and developing some mobile games! You can check my latest one:{' '}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://play.google.com/store/apps/details?id=com.Bendev.UpWeGo"
              className="font-bold underline"
            >
              Up We Go
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="flex-shrink-0 mt-4 sm:mt-0 sm:ml-4 w-[200px] h-[200px]">
        <Image
          priority
          width={511}
          height={512}
          alt="avatar"
          className="rounded-full"
          src="/images/avatar.png"
        />
      </section>
    </article>
  )
}

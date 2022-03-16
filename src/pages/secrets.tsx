import React, { FC } from 'react'
import ReactPlayer from 'react-player'

import { Hero } from '~common/components/Hero'

const PLAYLIST_LINK = 'https://www.youtube.com/playlist?list=PL2gDVp_0vZOQjqMex201dYpUiu1mcGX96'

const Page: FC = () => (
  <>
    <Hero title="Secrets" subTitle="How did you get here?" />

    <article className="flex flex-col items-center px-8">
      <a target="_blank" rel="noopener noreferrer" href={PLAYLIST_LINK}>
        My dumb playlist
      </a>

      <div className="hidden mt-8 sm:flex sm:justify-center sm:w-screen">
        <ReactPlayer controls url={PLAYLIST_LINK} />
      </div>
    </article>
  </>
)

export default Page

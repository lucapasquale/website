import React from 'react'

import { Hero } from '~common/components/Hero'
import { Player } from '~modules/Secrets/Player'

const PLAYLIST_LINK = 'https://www.youtube.com/playlist?list=PL2gDVp_0vZOQjqMex201dYpUiu1mcGX96'

export default function Page() {
  return (
    <>
      <Hero title="Secrets" subTitle="How did you get here?" />

      <article className="flex flex-col items-center px-8">
        <a target="_blank" rel="noopener noreferrer" href={PLAYLIST_LINK}>
          My dumb playlist
        </a>

        <Player playlistURL={PLAYLIST_LINK} />
      </article>
    </>
  )
}
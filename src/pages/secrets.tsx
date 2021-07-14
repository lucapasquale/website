import React, { FC } from 'react'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player'))

import { Hero } from '@common/components/Hero'

const PLAYLIST_LINK = 'https://www.youtube.com/playlist?list=PL2gDVp_0vZOQjqMex201dYpUiu1mcGX96'

const Secrets: FC = () => (
  <>
    <Hero title="Secrets" subTitle="How did you get here?" />

    <article className="flex flex-col items-center p-8">
      <a target="_blank" rel="noopener noreferrer" href={PLAYLIST_LINK}>
        My dumb playlist
      </a>

      <div className="invisible mt-8 sm:visible">
        <ReactPlayer controls url={PLAYLIST_LINK} />
      </div>
    </article>
  </>
)

export default Secrets

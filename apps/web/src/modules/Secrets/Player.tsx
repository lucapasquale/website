'use client'
import ReactPlayer from 'react-player'

type Props = {
  playlistURL: string
}

export function Player({ playlistURL }: Props) {
  return (
    <div className="hidden mt-8 sm:flex sm:justify-center sm:w-screen">
      <ReactPlayer controls url={playlistURL} />
    </div>
  )
}

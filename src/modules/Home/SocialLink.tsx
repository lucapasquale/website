import React, { FC, ReactNode } from 'react'

type Props = {
  label: string
  url: string
  icon: ReactNode
}

export const SocialLink: FC<Props> = ({ label, url, icon }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      className="text-blue-400 bg-transparent border border-solid border-blue-400 hover:bg-blue-400 hover:text-white active:bg-blue-500 font-bold uppercase text-lg px-4 py-3 flex items-center gap-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    >
      {icon} {label}
    </a>
  )
}

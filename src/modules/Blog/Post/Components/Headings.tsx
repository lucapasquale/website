import React, { FC } from 'react'

const levels = {
  h1: {
    heading: 'mt-8 mb-5 text-4xl font-bold',
    anchor: 'pr-3',
    scrollMarginTop: '2em',
  },
  h2: {
    heading: 'mt-8 mb-5 text-2xl font-bold',
    anchor: 'pr-5',
    scrollMarginTop: '3em',
  },
  h3: {
    heading: 'mt-8 mb-5 text-xl font-bold',
    anchor: 'pr-5',
    scrollMarginTop: '3.5em',
  },
  h4: {
    heading: 'mt-6 mb-5 text-lg font-bold',
    anchor: 'pr-5',
    scrollMarginTop: '4em',
  },
}

type Props = {
  level: keyof typeof levels
  showAnchor?: boolean
}

export const Heading: FC<Props> = ({ level, showAnchor = false, children }) => {
  const levelClasses = levels[level]
  const HeadingComponent = level

  if (!showAnchor || typeof children !== 'string') {
    return <HeadingComponent className={levelClasses.heading}>{children}</HeadingComponent>
  }

  const anchor = children
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/[ ]/g, '-')

  return (
    <HeadingComponent
      id={anchor}
      className={levelClasses.heading + ' group'}
      style={{ scrollMarginTop: levelClasses.scrollMarginTop }}
    >
      <a
        href={'#' + anchor}
        className={levelClasses.anchor + ' absolute -ml-8 opacity-0 group-hover:opacity-100'}
      >
        §
      </a>

      <span>{children}</span>
    </HeadingComponent>
  )
}

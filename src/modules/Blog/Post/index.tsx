import React, { FC, useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import { components } from './Components'

export type PostType = {
  code: string
  frontmatter: {
    slug: string
    title: string
    description: string
    publishedAt: string
    tags: string[]
    image?: {
      src: string
      alt: string
      width: number
      height: number
    }
  }
}

type Props = {
  post: PostType
}

export const Post: FC<Props> = ({ post }) => {
  const MdxComponent = useMemo(() => getMDXComponent(post.code), [post])

  return (
    <article>
      <MdxComponent components={components} />
    </article>
  )
}

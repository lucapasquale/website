import React, { FC, useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import { components } from './Components'

export type PostType = {
  code: string
  frontmatter: {
    title: string
    description: string
    publishedAt: string
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

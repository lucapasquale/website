import React, { FC } from 'react'
import Link from 'next/link'

import { Post } from './types'
import styled from 'styled-components'

const Title = styled.h2({
  marginTop: '32px',
  color: 'var(--color-link)',
})

const Description = styled.p({
  marginBottom: '64px',
  fontSize: '14px',
})

type Props = {
  post: Post
}

export const PostLink: FC<Props> = ({ post }) => (
  <article>
    <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
      <a>
        <Title>{post.title}</Title>
      </a>
    </Link>

    <small>{post.createdAt.toString()}</small>
    <Description>{post.description}</Description>
  </article>
)

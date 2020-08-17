import React, { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { colors } from '@helpers/theme/colors'
import { Post } from './types'

const Title = styled.h2({
  marginTop: '32px',
  color: `var(${colors.link.cssVariable})`,
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

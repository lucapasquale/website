import React, { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { colors } from '@helpers/theme/colors'
import { PostData } from './parse-post-markdown'

const Title = styled.h2({
  marginTop: '32px',
  color: `var(${colors.link.cssVariable})`,
})

const Description = styled.p({
  marginBottom: '64px',
  fontSize: '14px',
})

type Props = {
  post: PostData
}

export const PostLink: FC<Props> = ({ post }) => (
  <article>
    <Link href="/blog/[slug]" as={`/blog/${post.metadata.slug}`}>
      <a>
        <Title>{post.metadata.title}</Title>
      </a>
    </Link>

    <small>{new Date(post.metadata.createdAt).toLocaleDateString('en-US')}</small>
    <Description>{post.metadata.description}</Description>
  </article>
)

import React, { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

import { Icon } from '@components/Icon'

import { renderers } from './renderers'
import { Post as PostType } from './types'

const Wrapper = styled.article({
  maxWidth: '700px',
  margin: 'auto',
  padding: '32px',

  '@media (max-width: 700px)': {
    padding: '16px',
  },
})

const InfoRow = styled.nav({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '32px',
})

const LinkWrapper = styled.a({
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
})

type Props = {
  post: PostType
}

export const Post: FC<Props> = ({ post }) => (
  <Wrapper>
    <InfoRow>
      <Link passHref href="/blog">
        <LinkWrapper>
          <Icon name="ChevronLeft" size={24} />
          <h3>Back to posts</h3>
        </LinkWrapper>
      </Link>

      <h4>{post.createdAt.toString()}</h4>
    </InfoRow>

    <ReactMarkdown source={post.content} renderers={renderers} />
  </Wrapper>
)

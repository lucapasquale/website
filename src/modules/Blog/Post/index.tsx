import React, { FC, useMemo } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { getMDXComponent } from 'mdx-bundler/client'

import { Icon } from '@components/Icon'
import { PostData } from '../parse-post-markdown'
import { Code } from './renderers/Code'

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
  post: PostData
}

export const Post: FC<Props> = ({ post }) => {
  const MarkdownComponent = useMemo(() => getMDXComponent(post.content), [post])

  return (
    <Wrapper>
      <InfoRow>
        <Link passHref href="/blog">
          <LinkWrapper>
            <Icon name="ChevronLeft" size={24} />
            <h3>Back to posts</h3>
          </LinkWrapper>
        </Link>

        <h4>{new Date(post.metadata.createdAt).toLocaleDateString()}</h4>
      </InfoRow>

      <MarkdownComponent components={{ Code }} />
    </Wrapper>
  )
}

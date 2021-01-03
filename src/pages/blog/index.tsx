import fs from 'fs'
import React, { FC } from 'react'
import { GetStaticProps } from 'next'
import styled from 'styled-components'

import { Layout } from '@components/Layout'
import { Hero } from '@components/Hero'

import { parsePostMarkdown } from '@modules/Blog/parse-post-markdown'
import { PostLink } from '@modules/Blog/PostLink'
import { Post } from '@modules/Blog/types'

const Wrapper = styled.div({
  maxWidth: '700px',
  margin: 'auto',
  padding: '32px',
  paddingTop: '64px',

  '@media (max-width: 700px)': {
    padding: '16px',
  },
})

type Props = {
  posts: Post[]
}

const Page: FC<Props> = ({ posts }) => (
  <Layout>
    <Hero title="Blog" subTitle="My latests posts" />

    <Wrapper>
      {posts.map((post) => (
        <PostLink key={post.slug} post={post} />
      ))}
    </Wrapper>
  </Layout>
)

export const getStaticProps: GetStaticProps<Props> = async () => {
  const files = fs.readdirSync('src/assets/posts')

  const posts = files
    .map((fileName) => {
      const markdown = fs.readFileSync(`src/assets/posts/${fileName}`).toString()

      return parsePostMarkdown(fileName, markdown)
    })
    .sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    })

  return { props: { posts } }
}

export default Page

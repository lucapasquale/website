import fs from 'fs'
import React, { FC } from 'react'
import { GetStaticProps } from 'next'
import styled from 'styled-components'

import { Layout } from '@components/Layout'
import { Hero } from '@components/Hero'

import { PostLink } from '@modules/Blog/PostLink'
import { parsePostMarkdown, PostData } from '@modules/Blog/parse-post-markdown'

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
  posts: PostData[]
}

const Page: FC<Props> = ({ posts }) => (
  <Layout>
    <Hero title="Blog" subTitle="My latests posts" />

    <Wrapper>
      {posts.map((post) => (
        <PostLink key={post.metadata.slug} post={post} />
      ))}
    </Wrapper>
  </Layout>
)

export default Page

export const getStaticProps: GetStaticProps<Props> = async () => {
  const fileNames = fs.readdirSync('src/assets/posts')

  const posts = await Promise.all(fileNames.map(fileName => {
    return parsePostMarkdown(fileName.replace('.mdx', ''))
  }))

  const newestPosts = posts.sort((a, b) => {
    return new Date(b.metadata.createdAt).getTime() - new Date(a.metadata.createdAt).getTime()
  })

  return { props: { posts: newestPosts } }
}

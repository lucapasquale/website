import fs from 'fs'
import React, { FC } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

import { Layout } from '@components/Layout'
import { Hero } from '@components/Hero'

import { parsePostMarkdown } from '@modules/Blog/parse-post-markdown'
import { renderers } from '@modules/Blog/renderers'
import { Post } from '.'

const Wrapper = styled.article({
  maxWidth: '700px',
  margin: 'auto',
  padding: '32px',

  '@media (max-width: 700px)': {
    padding: '16px',
  },
})

type Props = {
  post: Post | null
}

const Page: FC<Props> = ({ post }) => {
  if (!post) {
    return <div>Error</div>
  }

  return (
    <Layout>
      <Hero title={post.title} subTitle={post.createdAt.toString()} />

      <Wrapper>
        <ReactMarkdown source={post.content} renderers={renderers} />
      </Wrapper>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync('src/assets/posts')
  const paths = files.map((fileName) => '/blog/' + fileName.replace('.md', ''))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params || !params.slug || typeof params.slug !== 'string') {
    return { props: { post: null } }
  }

  const markdown = fs
    .readFileSync(`src/assets/posts/${params.slug}.md`)
    .toString()

  const post = parsePostMarkdown(params.slug, markdown)

  return { props: { post } }
}

export default Page

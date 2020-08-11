import fs from 'fs'
import React, { FC } from 'react'
import { GetStaticProps } from 'next'

import { Layout } from '@components/Layout'
import { parsePostMarkdown } from '@modules/Blog/parse-post-markdown'
import { Hero } from '../../components/Hero'
import Link from 'next/link'

export type Post = {
  title: string
  description: string
  createdAt: Date
  slug: string
  content: string
}

type Props = {
  posts: Post[]
}

const Page: FC<Props> = ({ posts }) => (
  <Layout>
    <Hero title="Posts" subTitle="" />

    {posts.map((post) => (
      <Link key={post.slug} href="/blog/[slug]" as={`/blog/${post.slug}`}>
        <a>{post.title}</a>
      </Link>
    ))}
  </Layout>
)

export const getStaticProps: GetStaticProps<Props> = async () => {
  const files = fs.readdirSync('src/assets/posts')

  const posts = files.map((fileName) => {
    const markdown = fs.readFileSync(`src/assets/posts/${fileName}`).toString()

    return parsePostMarkdown(fileName, markdown)
  })

  return { props: { posts } }
}

export default Page

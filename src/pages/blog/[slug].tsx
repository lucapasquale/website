import fs from 'fs'
import React, { FC } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'

import { Layout } from '@components/Layout'
import { Hero } from '@components/Hero'

import { parsePostMarkdown } from '@modules/Blog/parse-post-markdown'
import { Post as PostType } from '@modules/Blog/types'
import { Post } from '@modules/Blog/Post'

type Props = {
  post: PostType | null
}

const Page: FC<Props> = ({ post }) => {
  if (!post) {
    return <div>Error</div>
  }

  return (
    <Layout>
      <Hero title={post.title} subTitle={post.description} />

      <Post post={post} />
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

import fs from 'fs'
import React, { FC } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'

import { Layout } from '@components/Layout'
import { Hero } from '@components/Hero'

import { Post } from '@modules/Blog/Post'
import { parsePostMarkdown, PostData } from '@modules/Blog/parse-post-markdown'

type Props = {
  post: PostData | null
}

const Page: FC<Props> = ({ post }) => {
  if (!post) {
    return <div>Error</div>
  }

  return (
    <Layout>
      <Hero title={post.metadata.title} subTitle={post.metadata.description} />

      <Post post={post} />
    </Layout>
  )
}

export default Page

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync('src/assets/posts')
  const paths = files.map((fileName) => '/blog/' + fileName.replace('.mdx', ''))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params || !params.slug || typeof params.slug !== 'string') {
    return { props: { post: null } }
  }

  const post = await parsePostMarkdown(params.slug)

  return { props: { post } }
}

import React, { FC, useMemo } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { bundleMDX } from 'mdx-bundler'
import { getMDXComponent } from 'mdx-bundler/client'

type Post = {
  code: string
  frontmatter: Record<string, any>
}

type Props = {
  post: Post
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { slug: 'teste' } }],
    // Return 404 page if path is not returned by getStaticPaths
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = context.params?.slug as string
  const mdxSource = `
---
title: Example Post
description: This is some description
---

# Wahoo

Here's a **neat** demo:

    ${slug}
  `.trim()

  const post = await bundleMDX(mdxSource)

  return { props: { post } }
}

const Page: FC<Props> = ({ post }) => {
  const Component = useMemo(() => getMDXComponent(post.code), [post])

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <h2>{post.frontmatter.description}</h2>

      <Component />
    </div>
  )
}

export default Page

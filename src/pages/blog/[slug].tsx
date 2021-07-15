import React, { FC, useMemo } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { bundleMDX } from 'mdx-bundler'
import { getMDXComponent } from 'mdx-bundler/client'

import { Post, getPostPaths, getPostSource } from '@modules/Blog/logic/posts'

type Props = {
  post: Post | null
}

const Page: FC<Props> = ({ post }) => {
  const MdxComponent = useMemo(() => {
    if (!post) {
      return () => null
    }

    return getMDXComponent(post.code)
  }, [post])

  if (!post) {
    return <div>Not found</div>
  }

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <h2>{post.frontmatter.description}</h2>

      <MdxComponent />
    </div>
  )
}

export default Page

export const getStaticPaths: GetStaticPaths = () => {
  return { paths: getPostPaths(), fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params || !params.slug || typeof params.slug !== 'string') {
    return { props: { post: null } }
  }

  const mdxSource = getPostSource(params.slug)
  const post = (await bundleMDX(mdxSource)) as Post

  return { props: { post } }
}

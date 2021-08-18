import React, { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'

import { Hero } from '@common/components/Hero'

import { Post, PostType } from '@modules/Blog/Post'
import { formatDate } from '@modules/Blog/logic/parse-date'
import { getPostsSlugs, loadPost } from '@modules/Blog/logic/posts'

type Props = {
  post: PostType | null
}

const Page: FC<Props> = ({ post }) => {
  if (!post) {
    return <div>Not found</div>
  }

  return (
    <>
      <Hero
        title={post.frontmatter.title}
        subTitle={`Luca Pasquale · ${formatDate(post.frontmatter.publishedAt)}`}
      />

      {post.frontmatter.image && (
        <div className="mt-10 mb-6 overflow-hidden rounded-2xl">
          <Image
            priority
            alt={post.frontmatter.image.alt}
            src={post.frontmatter.image.src}
            width={post.frontmatter.image.width}
            height={post.frontmatter.image.height}
          />
        </div>
      )}

      <Post post={post} />
    </>
  )
}

export default Page

export const getStaticPaths: GetStaticPaths = () => {
  const slugs = getPostsSlugs()
  const paths = slugs.map((slug) => '/blog/' + slug)

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params || !params.slug || typeof params.slug !== 'string') {
    return { props: { post: null } }
  }

  const post = await loadPost(params.slug)
  return { props: { post } }
}

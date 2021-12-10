import React, { FC } from 'react'
import { GetStaticProps } from 'next'

import { Hero } from '@common/components/Hero'

import { loadLatestPosts } from '@modules/Blog/logic/posts'
import { PostType } from '@modules/Blog/Post'
import { PostPreview } from '@modules/Blog/PostPreview'

type Props = {
  posts: PostType[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await loadLatestPosts()

  return { props: { posts } }
}

const Page: FC<Props> = ({ posts }) => {
  return (
    <>
      <Hero title="Blog" subTitle="My latest posts" />

      <div className="space-y-12">
        {posts.map((post, idx) => (
          <PostPreview key={idx} post={post} />
        ))}
      </div>
    </>
  )
}

export default Page

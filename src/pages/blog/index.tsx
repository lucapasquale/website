import { GetStaticProps } from 'next'
import React, { FC } from 'react'

import { Hero } from '@common/components/Hero'

import { PostType } from '@modules/Blog/Post'
import { PostPreview } from '@modules/Blog/PostPreview'
import { loadLatestPosts } from '@modules/Blog/logic/posts'

type Props = {
  posts: PostType[]
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await loadLatestPosts()

  return { props: { posts } }
}

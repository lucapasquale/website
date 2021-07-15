import { GetStaticProps } from 'next'
import React, { FC } from 'react'

import { Hero } from '@common/components/Hero'

import { PostType } from '@modules/Blog/Post'
import { loadLatestPosts } from '@modules/Blog/logic/posts'

type Props = {
  posts: PostType[]
}

const Page: FC<Props> = ({ posts }) => {
  return (
    <>
      <Hero title="Blog" subTitle="My latest posts" />

      <div className="mt-6 flex flex-col items-center justify-between">
        {posts.map((posts, idx) => (
          <div key={idx}>
            <pre>{JSON.stringify(posts.frontmatter, null, 2)}</pre>
          </div>
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

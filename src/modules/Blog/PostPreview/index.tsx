import React, { FC } from 'react'
import Link from 'next/link'

import { formatDate } from '../logic/parse-date'
import { PostType } from '../Post'

type Props = {
  post: PostType
}

export const PostPreview: FC<Props> = ({ post }) => {
  return (
    <article>
      <Link
        passHref
        href={'blog/' + post.frontmatter.slug}
        className="flex justify-between flex-col sm:flex-row"
      >
        <header>
          <h3 className="text-3xl">{post.frontmatter.title}</h3>

          <h4 className="text-gray-200">{post.frontmatter.description}</h4>
        </header>
        <div className="flex justify-between sm:flex-col items-end mt-4 sm:mt-0">
          <div className="flex space-x-2">
            {post.frontmatter.tags.map((tag, idx) => (
              <div
                key={idx}
                className="py-1 px-2 rounded-md text-gray-300 bg-blue-900 bg-opacity-50"
              >
                {tag}
              </div>
            ))}
          </div>

          <h5 className="mt-2 mb-1 text-sm text-right text-gray-400">
            {formatDate(post.frontmatter.publishedAt)}
          </h5>
        </div>
      </Link>
    </article>
  )
}

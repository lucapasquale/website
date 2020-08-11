import matter from 'gray-matter'

import { Post } from '../../pages/blog'

export function parsePostMarkdown(fileName: string, markdown: string): Post {
  const { data, content } = matter(markdown)

  const formattedDate = data.createdAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return {
    content,
    slug: fileName.replace('.md', ''),
    title: data.title,
    description: data.description,
    createdAt: formattedDate,
  }
}

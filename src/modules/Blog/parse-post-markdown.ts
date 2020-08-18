import matter from 'gray-matter'

import { Post } from './types'

export function parsePostMarkdown(fileName: string, markdown: string): Post {
  const { data, content } = matter(markdown)

  return {
    content,
    slug: fileName.replace('.md', ''),
    title: data.title,
    description: data.description,
    createdAt: data.createdAt,
  }
}

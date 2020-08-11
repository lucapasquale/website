import matter from 'gray-matter'

import { Post } from './types'

export function parsePostMarkdown(fileName: string, markdown: string): Post {
  const { data, content } = matter(markdown)

  const formattedDate = data.createdAt.toLocaleDateString('pt-BR', {
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

import fs from 'fs'
import path from 'path'

export type Post = {
  code: string
  frontmatter: {
    title: string
    description: string
  }
}

export function getPostPaths() {
  const files = fs.readdirSync('src/modules/Blog/posts')
  return files.map((fileName) => '/blog/' + fileName.replace('.mdx', ''))
}

export function getPostSource(slug: string) {
  return fs.readFileSync(path.join('src/modules/Blog/posts', slug + '.mdx'), 'utf-8')
}

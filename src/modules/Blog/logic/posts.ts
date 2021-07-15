import fs from 'fs'
import path from 'path'
import { bundleMDX } from 'mdx-bundler'

import { PostType } from '../Post'

const POSTS_PATH = path.join(process.cwd(), 'src/modules/Blog/posts')

export function getPostsSlugs() {
  const files = fs.readdirSync(POSTS_PATH)

  return files.map((fileName) => fileName.replace('.mdx', ''))
}

export async function loadPost(slug: string) {
  const mdxSource = fs.readFileSync(path.join(POSTS_PATH, slug + '.mdx'), 'utf-8')

  const post = await bundleMDX(mdxSource)
  return post as PostType
}

export async function loadLatestPosts() {
  const paths = getPostsSlugs()
  const posts = await Promise.all(paths.map(loadPost))

  return posts.sort(
    (a, b) =>
      Number(new Date(b.frontmatter.publishedAt)) - Number(new Date(a.frontmatter.publishedAt))
  )
}

import fs from 'fs'
import path from 'path'
import { bundleMDX } from 'mdx-bundler'

import { PostType } from '../Post'

export function getPostPaths() {
  const files = fs.readdirSync('src/modules/Blog/posts')
  return files.map((fileName) => '/blog/' + fileName.replace('.mdx', ''))
}

export async function loadPost(slug: string) {
  const mdxSource = fs.readFileSync(path.join('src/modules/Blog/posts', slug + '.mdx'), 'utf-8')

  const post = await bundleMDX(mdxSource)
  return post as PostType
}

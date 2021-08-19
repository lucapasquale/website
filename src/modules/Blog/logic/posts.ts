import fs from 'fs'
import path from 'path'
import { bundleMDX } from 'mdx-bundler'

import { PostType } from '../Post'

// https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
if (process.platform === 'win32') {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    'node_modules',
    'esbuild',
    'esbuild.exe'
  )
} else {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    'node_modules',
    'esbuild',
    'bin',
    'esbuild'
  )
}

const POSTS_PATH = path.join(process.cwd(), 'public/posts')

export function getPostsSlugs() {
  const files = fs.readdirSync(POSTS_PATH)

  return files.map((fileName) => fileName.replace('.mdx', ''))
}

export async function loadPost(slug: string) {
  const mdxSource = fs.readFileSync(path.join(POSTS_PATH, slug + '.mdx'), 'utf-8')
  const { code, frontmatter } = await bundleMDX(mdxSource)

  return {
    code,
    frontmatter: { ...frontmatter, slug },
  } as PostType
}

export async function loadLatestPosts() {
  const paths = getPostsSlugs()
  const posts = await Promise.all(paths.map(loadPost))

  return posts.sort(
    (a, b) =>
      Number(new Date(b.frontmatter.publishedAt)) - Number(new Date(a.frontmatter.publishedAt))
  )
}

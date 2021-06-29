import fs from 'fs'
import path from 'path'
import { bundleMDX } from 'mdx-bundler'

export type PostData = {
  content: string
  metadata: {
    slug: string
    title: string
    description: string
    createdAt: string
  }
}

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

export async function parsePostMarkdown(fileName: string): Promise<PostData> {
  const markdown = fs.readFileSync(`src/assets/posts/${fileName}.mdx`).toString()
  const { code, frontmatter } = await bundleMDX(markdown)

  return {
    content: code,
    metadata: {
      slug: fileName.replace('.mdx', ''),
      title: frontmatter.title,
      description: frontmatter.description,
      createdAt: frontmatter.createdAt,
    },
  }
}

const fs = require('fs')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
      <loc>https://lucapasquale.dev/</loc>
      <lastmod>2020-08-17</lastmod>
      <changefreq>monthly</changefreq>
  </url>

  <url>
      <loc>https://lucapasquale.dev/blog</loc>
      <lastmod>2020-08-17</lastmod>
      <changefreq>weekly</changefreq>
  </url>
  ${getPostsSitemap().join('')}

  <url>
      <loc>https://lucapasquale.dev/projects</loc>
      <lastmod>2020-08-17</lastmod>
      <changefreq>monthly</changefreq>
  </url>

  <url>
      <loc>https://lucapasquale.dev/secrets</loc>
      <lastmod>2020-08-17</lastmod>
      <changefreq>monthly</changefreq>
  </url>
</urlset>
`

fs.writeFileSync('public/sitemap.xml', sitemap)

function getPostsSitemap() {
  const files = fs.readdirSync('src/assets/posts')
  const paths = files.map((fileName) => 'blog/' + fileName.replace('.mdx', ''))

  return paths.map(
    (path) => `
    <url>
      <loc>https://lucapasquale.dev/${path}</loc>
      <lastmod>2020-08-17</lastmod>
      <changefreq>monthly</changefreq>
    </url>
  `
  )
}

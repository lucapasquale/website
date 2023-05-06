const STATIC_ROUTES = ['', '/projects', '/secrets']

export default async function sitemap() {
  return STATIC_ROUTES.map((route) => ({
    url: `https://lucapasquale.dev/${route}`,
    lastModified: new Date().toISOString(),
  }))
}

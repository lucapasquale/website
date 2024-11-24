/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const SecretsLazyImport = createFileRoute('/secrets')()
const ProjectsLazyImport = createFileRoute('/projects')()

// Create/Update Routes

const SecretsLazyRoute = SecretsLazyImport.update({
  id: '/secrets',
  path: '/secrets',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/secrets.lazy').then((d) => d.Route))

const ProjectsLazyRoute = ProjectsLazyImport.update({
  id: '/projects',
  path: '/projects',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/projects.lazy').then((d) => d.Route))

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/projects': {
      id: '/projects'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof ProjectsLazyImport
      parentRoute: typeof rootRoute
    }
    '/secrets': {
      id: '/secrets'
      path: '/secrets'
      fullPath: '/secrets'
      preLoaderRoute: typeof SecretsLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/projects': typeof ProjectsLazyRoute
  '/secrets': typeof SecretsLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/projects': typeof ProjectsLazyRoute
  '/secrets': typeof SecretsLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/projects': typeof ProjectsLazyRoute
  '/secrets': typeof SecretsLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/projects' | '/secrets'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/projects' | '/secrets'
  id: '__root__' | '/' | '/projects' | '/secrets'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ProjectsLazyRoute: typeof ProjectsLazyRoute
  SecretsLazyRoute: typeof SecretsLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ProjectsLazyRoute: ProjectsLazyRoute,
  SecretsLazyRoute: SecretsLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/projects",
        "/secrets"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/projects": {
      "filePath": "projects.lazy.tsx"
    },
    "/secrets": {
      "filePath": "secrets.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */

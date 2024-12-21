import { Meta, Scripts } from '@tanstack/start'
// app/routes/__root.tsx
import { Outlet, ScrollRestoration, createRootRoute } from '@tanstack/react-router'

import { AppProvider } from '@shopify/polaris'
import enTranslations from '@shopify/polaris/locales/en.json'
import type { ReactNode } from 'react'
import { QueryProvider } from '../providers/QueryProvider'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <QueryProvider>
      <RootDocument>
        <AppProvider i18n={enTranslations}>
          <Outlet />
        </AppProvider>
      </RootDocument>
    </QueryProvider>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <Meta />
        <link rel="stylesheet" href="https://cdn.shopify.com/static/fonts/inter/v4/styles.css" />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useState } from 'react'

// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import { reactQueryClient } from './react-query-client'

// eslint-disable-next-line react-refresh/only-export-components
export const reactQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 1, // 5 minutes (default)
      // 10 seconds
      // refetchOnWindowFocus: 'always',
      // refetchOnWindowFocus: false,
      // refetchOnMount: true,
      retry: false,
    },
  },
})

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => reactQueryClient)

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  )
}

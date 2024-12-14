// app/routes/index.tsx

import { createFileRoute, useRouter } from '@tanstack/react-router'

import { getTodos } from '../server/todos'
// import { updateCount } from '../server/counter'

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => {
    // const [count, todos] = await Promise.all([getCount(), getTodos()])
    const [todos] = await Promise.all([getTodos()])
    return {
      // count,
      todos,
    }
  },
})

function Home() {
  const router = useRouter()
  const state = Route.useLoaderData()

  return (
    <div>
      {/* <button
        type="button"
        onClick={() => {
          updateCount({ data: 1 }).then(() => {
            router.invalidate()
          })
        }}
      >
        Add 1 to {state.count}?
      </button> */}
      <div>{JSON.stringify(state.todos)}</div>
    </div>
  )
}

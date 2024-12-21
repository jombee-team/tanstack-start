// app/routes/index.tsx

import { Link, createFileRoute } from '@tanstack/react-router'
import { useCreateTodo, useTodo } from '../hooks/todo.hook'

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
  // const router = useRouter()
  const { todos } = Route.useLoaderData()
  const todo = useTodo('1')
  const { mutate: createTodo } = useCreateTodo()

  const handleCreateTodo = () => {
    createTodo({
      title: 'New Todo',
      completed: false,
      userId: 1,
      id: 1,
    })
  }

  return (
    <div>
      <button type="button" onClick={handleCreateTodo}>
        Create Todo
      </button>
      <Link to="/examples">Examples</Link>
      <div>
        <pre>{JSON.stringify(todo, null, 2)}</pre>
        <pre>{JSON.stringify(todos, null, 2)}</pre>
      </div>
    </div>
  )
}

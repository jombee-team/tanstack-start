import { createServerFn } from '@tanstack/start'

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const getTodos = createServerFn({
  method: 'GET',
}).handler(async (): Promise<Todo[]> => {
  console.log('getTodos')
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await response.json()
  return data as Todo[]
})

export const getTodo = createServerFn({
  method: 'GET',
})
  .validator((data: string) => data)
  .handler(async (ctx): Promise<Todo> => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${ctx.data}`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data as Todo
    } catch (error) {
      console.error('Failed to fetch todos:', error)
      throw error
    }
  })

export const createTodo = createServerFn({
  method: 'POST',
})
  .validator((data: Todo) => data)
  .handler(async (ctx): Promise<Todo> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(ctx.data),
    })
    const data = await response.json()
    return data as Todo
  })

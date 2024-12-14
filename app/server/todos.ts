import { createServerFn } from '@tanstack/start'

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const getTodos = createServerFn({
  method: 'GET',
}).handler(async (): Promise<Todo> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

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

import { useMutation, useQuery } from '@tanstack/react-query'
import { Todo, createTodo, getTodo, getTodos } from '../server/todos'

export const useTodos = () => {
  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const todos = await getTodos()
      return todos
    },
  })
  return data
}

export const useTodo = (id: string) => {
  const { data } = useQuery({
    queryKey: ['todos', id],
    queryFn: async () => {
      const todo = await getTodo({
        data: id,
      })
      return todo
    },
  })
  return data
}

export const useCreateTodo = () => {
  return useMutation({
    mutationFn: async (todo: Todo) => {
      const newTodo = await createTodo({
        data: todo,
      })
      return newTodo
    },
  })
}

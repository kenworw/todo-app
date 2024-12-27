import { TODOS_URL } from '../constants';
import apiSlice from '../api/apiSlice';

const todosApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: TODOS_URL,
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Todos'],
    }),
    getTodoDetails: builder.query({
      query: (todoId) => ({
        url: `${TODOS_URL}/${todoId}`,
      }),
      providesTags: (result, error, id) => [{ type: 'Todos', id }],
    }),
    createTodo: builder.mutation({
      query: (newTodo) => ({
        url: TODOS_URL,
        method: 'POST',
        body: newTodo,
      }),
      invalidatesTags: ['Todos'],
    }),
    updateTodo: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `${TODOS_URL}/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Todos', id }],
    }),
    deleteTodo: builder.mutation({
      query: (todoId) => ({
        url: `${TODOS_URL}/${todoId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetTodoDetailsQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todosApiSlice;

export default todosApiSlice;
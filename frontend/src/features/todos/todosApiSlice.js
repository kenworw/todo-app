import { TODOS_URL } from "../constants";
import apiSlice from "../api/apiSlice";

const todosApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: TODOS_URL,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Todos"],


    }),
    getTodoDetails: builder.query({
      query: (todoId) => ({
        url: `${TODOS_URL}/${todoId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createTodo: builder.mutation({
      query: () => ({
        url: TODOS_URL,
        method: "POST",
      }),
      invalidatesTags: ["Todo"],
    }),
    updateTodo: builder.mutation({
      query: (data) => ({
        url: `${TODOS_URL}/${data.todoId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `${TODOS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
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

import { TODOS_URL } from "../constants";
import  apiSlice  from "../api/apiSlice";

const todosApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: TODOS_URL,
      }),
      keepUnusedDataFor: 60,
    }),
    getTodoDetails: builder.query({
      query: (id) => ({
        url: `${TODOS_URL}/${id}`,
      }),
      keepUnusedDataFor: 60,
    }),
  }),
});


export const { useGetTodosQuery, useGetTodoDetailsQuery } = todosApiSlice;
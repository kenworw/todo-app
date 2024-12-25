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
      query: (todoid) => ({
        url: `${TODOS_URL}/${todoid}`,
      }),
      keepUnusedDataFor: 60,
    }),
  }),
});


export const { useGetTodosQuery, useGetTodoDetailsQuery } = todosApiSlice;
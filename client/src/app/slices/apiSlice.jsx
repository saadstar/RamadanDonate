import { createApi } from "@reduxjs/toolkit/query/react";
import customBaseQuery from "../utils/CustomBaseQuery";


export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery:customBaseQuery,
  tagTypes: ["needer"],
    endpoints: (builder) => ({
      getAllNeeder: builder.query({
            query: ({company,year}) => ({
                method: 'GET', 
                url: `/needer/getAll/${company}/${year}`,
            }),
             providesTags: ["needer"],
        }),
      createNeeder: builder.mutation({
            query: (body) => ({
                method: 'POST', 
          url: `/needer/create`,
                body,
            }),
             invalidatesTags: ["needer"],
        }),
      deleteNeeder: builder.mutation({
            query: (id) => ({
                method: 'Delete', 
                url: `/needer/delete/${id}`,
            }),
             invalidatesTags: ["needer"],
        }),
  }),
});


export const { useGetAllNeederQuery,useCreateNeederMutation,useDeleteNeederMutation } = apiSlice;
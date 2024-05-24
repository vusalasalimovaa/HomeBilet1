import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/products" }),
  endpoints: (builder) => ({
    getProductById: builder.query({
      query: (id) => `/${id}`,
    }),
    getAllProduct: builder.query({
      query: () => `/`,
    }),

    deleteProductById: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),

    postProduct: builder.mutation({
      query: ({ obj }) => ({
        url: `/`,
        method: "POST",
        body: obj,
      }),
    }),

    patchProductById: builder.mutation({
      query: (id, { obj }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: obj,
      }),
    }),

    putProductById: builder.mutation({
      query: (item) => ({
        url: `/${item.id}`,
        method: "PUT",
        body: item,
      }),
    }),
  }),
});

export const {
  useGetProductByIdQuery,
  useGetAllProductQuery,
  useDeleteProductByIdMutation,
  usePostProductMutation,
  usePatchProductByIdMutation,
  usePutProductByIdMutation,
} = productApi;

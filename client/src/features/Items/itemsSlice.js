import { apiSlice } from "../api/apiSlice";

const itmesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => "/items",
      providesTags: ["Item"],
    }),
    getSingleItem: builder.query({
      query: (itemID) => `/items/itemId/${itemID}`,
    }),
    getByName: builder.query({
      query: (itemName) => `/items/itemName/${itemName}`,
    }),
    getByFilters: builder.query({
      query: (params) =>
        `/items/filters/${params.checkCategories}&${params.min}&${params.max}`,
    }),
  }),
});

export const {
  useGetItemsQuery,
  useGetSingleItemQuery,
  useGetByNameQuery,
  useGetByFiltersQuery,
} = itmesApi;

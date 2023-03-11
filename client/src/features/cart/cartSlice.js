import { apiSlice } from "../api/apiSlice";

const cartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (itemID) => ({
        url: "users/cart",
        method: "POST",
        body: { itemID },
      }),
      invalidatesTags: ["Cart"],
    }),
    getCart: builder.query({
      query: () => "/users/cart",
      providesTags: ["Cart", "Auth"],
    }),
    addAmount: builder.mutation({
      query: ({ index: itemIndex, amount: itemAmount }) => ({
        url: "users/cart",
        method: "PATCH",
        body: { itemIndex, itemAmount },
      }),
      invalidatesTags: ["Cart"],
    }),
    deleteItem: builder.mutation({
      query: (itemID) => ({
        url: "users/cart",
        method: "DELETE",
        body: { itemID },
      }),
      invalidatesTags: ["Cart"],
    }),
    completeCheckout: builder.mutation({
      query: (items) => ({
        url: "/transactions",
        method: "POST",
        body: { items },
      }),
      invalidatesTags: ["Cart", "Item"],
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useAddAmountMutation,
  useDeleteItemMutation,
  useCompleteCheckoutMutation,
} = cartApi;

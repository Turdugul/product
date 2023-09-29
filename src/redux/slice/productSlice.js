import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { toast } from "react-toastify";

const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/products.json");
      console.log("data =>", response.data.products);
      return response.data.products;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isLoading: false,
    error: null,
    totalPrice: 0,
  },
  // reducers: {},
  //
  reducers: {
    incremet: (state, action) => {
        console.log('action: ', action.payload)
        state.products.map((item) => {
            if (item.id === action.payload) {
                return {
                    ...item,
                    orderQuantity: (item.orderQuantity =
                        item.orderQuantity + 1),
                    total: (item.total = item.total + item.price),
                }
            }
            return item
        })
    },
    decrement: (state, action) => {
        state.products.map((item) => {
            if (item.id === action.payload) {
              return {
                ...item,
                orderQuantity: (item.orderQuantity =
                  item.orderQuantity - 1),
              total: (item.total = item.total - item.price),

                
              }
               
            }
            return item
        })
    },

    IncrementById: (state, action) => {
        state.totalPrice += action.payload
    },
    DecrementById: (state, action) => {
        state.totalPrice -= action.payload
    },
  },
  //
  extraReducers: (builder) =>
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getProducts.fulfilled, (state, action) => {
        action.payload.map((item) => {
          item.orderQuantity = 0
          item.total = 0

          return item
      })
        state.isLoading = false;

        if (typeof action.payload !== "string") {
          state.products = action.payload;
        }
      })
     

      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
        state.error = 'error'
      }),
});

export const productActions = productSlice.actions
export { productSlice, getProducts };

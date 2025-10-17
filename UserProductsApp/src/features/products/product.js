import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { useFetch } from "../../data/fetchData";
import axios from "axios";

const initialState = {
  products: [],
  currentProduct: {
    id: "",
    name: "",
    description: "",
    price: "",
    quantity: "",
  },
  isLoading: false,
  errorMessage: "",
};

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  try {
    const responce = await axios.get("http://localhost:3000/products");
    console.log(responce);
    return responce.data;
  } catch (err) {
    console.log(err);
    return err;
  }
});

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (id, data) => {
    try {
      const responce = await axios.put(
        `http://localhost:3000/products/${id}`,
        data
      );
      console.log(responce.data);
      return responce.data;
    } catch (err) {}
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (data) => {
    try {
      await axios.post("http://localhost:3000/products", data);
      return data;
    } catch (err) {}
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    console.log(id);
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      return id;
    } catch (err) {}
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //Getting data on initial rendering
      .addCase(getProducts.pending, (state) => {})
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {})

      // Updating the data
      .addCase(updateProduct.pending, (state) => {})
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.products = state.products.map((product) => {
          if (product.id === action.payload.id) {
            console.log(true);
            return action.payload;
          } else {
            product;
          }
        });
      })
      .addCase(updateProduct.rejected, (state, action) => {})

      // Deleting the data
      .addCase(deleteProduct.pending, (state) => {})
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {})

      // Adding the data
      .addCase(addProduct.pending, (state) => {})
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {});
  },
});

// export const {
//   addProduct,
//   deleteProduct,
//   updateProduct,
//   selectProduct,
//   getProducts,
// } = productSlice.actions;

export const productReducer = productSlice.reducer;

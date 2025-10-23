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
  async (data) => {
    try {
      const responce = await axios.put(
        `http://localhost:3000/products/${data.id}`,
        data
      );
      console.log(responce.data);
      return responce.data;
    } catch (err) {}
  }
);

export const gettingCurrentProductData = createAsyncThunk(
  "product/gettingCurrentProductData",
  async (id) => {
    try {
      const responce = await axios.get(`http://localhost:3000/products/${id}`);
      console.log(responce);
      return responce.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (data) => {
    data.id = nanoid();
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
      .addCase(updateProduct.fulfilled, (state, action) => {})
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
      .addCase(addProduct.fulfilled, (state, action) => {})
      .addCase(addProduct.rejected, (state, action) => {})

      // Getting the current product data
      .addCase(gettingCurrentProductData.pending, (state) => {})
      .addCase(gettingCurrentProductData.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
      })
      .addCase(gettingCurrentProductData.rejected, (state, action) => {});
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

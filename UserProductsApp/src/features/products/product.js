import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 12345,
      name: "product 1",
      description: "Product 1 description",
      price: 45,
      quantity: 90,
    },
  ],
  currentProduct: {
    id: "",
    name: "",
    description: "",
    price: "",
    quantity: "",
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = { id: nanoid(), ...action.payload };
      state.products.push(product);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    selectProduct: (state, action) => {
      console.log(action.payload);
      state.currentProduct = state.products.find(
        (product) => product.id === action.payload
      );
      console.log(state.currentProduct);
    },
    updateProduct: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return action.payload;
        } else {
          product;
        }
      });
    },
  },
});

export const { addProduct, deleteProduct, updateProduct, selectProduct } =
  productSlice.actions;

export const productReducer = productSlice.reducer;

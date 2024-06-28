import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    value: [
      { id: 1, name: "Product 1", description: "Description of Prod 1" },
      { id: 2, name: "Product 2", description: "Description of Prod 2" },
      { id: 3, name: "Product 3", description: "Description of Prod 3" },
      { id: 4, name: "Product 4", description: "Description of Prod 4" },
      { id: 5, name: "Product 5", description: "Description of Prod 5" },
      { id: 6, name: "Product 6", description: "Description of Prod 6" },
    ],
  },
  reducers: {
    addProduct: (state, action) => {
      state.value.push(action.payload);
    },
    deleteProduct: (state, action) => {
      const index = state.value.findIndex(
        (product) => product.id === parseInt(action.payload)
      ); // findIndex is a method available in JavaScript for arrays. It helps you find the index of the first element in an array that satisfies a certain condition.
      console.log("index: ", index);
      console.log("action.payload: ", action.payload);
      if (index !== -1) {
        state.value.splice(index, 1);
      }
    },
    updateProduct: (state, action) => {
      const indexToUpdate = state.value.findIndex(
        (product) => product.id === parseInt(action.payload.id)
      ); // findIndex is a method available in JavaScript for arrays. It helps you find the index of the first element in an array that satisfies a certain condition.
      console.log("indexToUpdate: ", indexToUpdate);
      console.log("action.payload: ", action.payload);
      if (indexToUpdate !== -1) {
        const editProd = {
          ...state.value[indexToUpdate],
          description: action.payload.description,
        };
        console.log("editProd: ", editProd);
        state.value[indexToUpdate] = editProd;
      }
    },
  },
});

export const productReducer = productSlice.reducer;
export const { addProduct, deleteProduct, updateProduct } =
  productSlice.actions;

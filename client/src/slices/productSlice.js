import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  error: "",
  response: "",
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await axios.get("https://products-7xnv.onrender.com/products");
    return response.data;
  }
);

export const addProducts = createAsyncThunk(
  "product/addProduct",
  async (data) => {
    const response = await axios.post("https://products-7xnv.onrender.com/products", {
      name: data.name,
      position: data.position,
    });
    return response.data.response;
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async ({payload , status}) => {
 console.log(status)
    const response = await axios.put(
      `http://localhost:8000/products/${payload.id}`,
      {
        brand: payload.brand,
        id: payload.id,
        name: payload.name,
        price:  payload.price,
        qty:  payload.qty,
        status: status ? status : payload.status,
        total: payload.total,
      }
    );
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
        state.response = "add";
      })
      .addCase(addProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = "rejected";
      });

    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = "rejected";
      });

    builder.addCase(updateProduct.fulfilled, (state, action) => {
      const updateItem = action.payload;
      const index = state.data.findIndex(
        (item) => item.id === updateItem.id
      );
      if (index!==-1) {
        state.data[index] = updateItem;
      }
    });
  },
});

export default productSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch items
export const fetchItems = createAsyncThunk("items/get", async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");  
    if (!token) throw new Error("No token found"); 

    const res = await axios.get("http://localhost:5000/api/items", {
      headers: { Authorization: `Bearer ${token}` }
    });

    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || { message: err.message });
  }
});

// Add item
export const addItem = createAsyncThunk("items/add", async (item, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    const res = await axios.post("http://localhost:5000/api/items", item, {
      headers: { Authorization: `Bearer ${token}` }
    });

    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || { message: err.message });
  }
});

// Delete item
export const deleteItem = createAsyncThunk("items/delete", async (id, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    await axios.delete(`http://localhost:5000/api/items/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    return id;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || { message: err.message });
  }
});

// Slice
const itemsSlice = createSlice({
  name: "items",
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.items = state.items.filter(i => i._id !== action.payload);
      });
  }
});

export default itemsSlice.reducer;

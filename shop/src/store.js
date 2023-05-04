import { configureStore, createSlice } from "@reduxjs/toolkit";

import user from "./store/userSlice.js";

export let { changeName, increase } = user.actions;

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

let cark = createSlice({
  name: "cark",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 1, name: "Grey Yordan", count: 3 },
  ],
  reducers: {
    increase2(state, action) {
      state[action.payload].count++;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export let { increase2 } = cark.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cark: cark.reducer,
  },
});

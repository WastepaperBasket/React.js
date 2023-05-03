import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: "kim",
  reducers: {
    changeName(state) {
      return "john " + state;
    },
  },
});

export let { changeName } = user.actions;

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
    plusCount(state) {
      return state[0].count++;
    },
  },
});

export let { plusCount } = cark[0].actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cark: cark.reducer,
  },
});

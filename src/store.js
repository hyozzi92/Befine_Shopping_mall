import { configureStore, createSlice } from '@reduxjs/toolkit';

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'white and black', count: 2 },
    { id: 1, name: 'Grey Yordan', count: 1 },
    { id: 2, name: 'yeezy 350 v2', count: 2 },
  ],
  reducers: {
    addCount(state, action) {
      state[action.payload].count += +1;
    },
    minusCount(state, action) {
      state[action.payload].count += -1;
    },
  },
});
export let { addCount, minusCount } = cart.actions;
export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});

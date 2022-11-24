import { configureStore, createSlice } from '@reduxjs/toolkit';

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'white and black', count: 1, price: '320000' },
    { id: 1, name: 'Grey Yordan', count: 1, price: '344300' },
    { id: 2, name: 'yeezy 350 v2', count: 1, price: '439000' },
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

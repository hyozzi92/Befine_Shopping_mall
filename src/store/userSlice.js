import { createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: { id: 1, name: 'kim', qty: 20 },
  reducers: {
    plusQty(state) {
      state.qty = state.qty + 1;
    },
    minusQty(state) {
      state.qty = state.qty - 1;
    },
  },
});
export let { plusQty, minusQty } = user.actions;

export default user;

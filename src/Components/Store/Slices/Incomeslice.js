import { createSlice } from '@reduxjs/toolkit';

export const Incomeslice = createSlice({
  name: 'income',
  initialState: {
    items: [],
  },
  reducers: {
    addIncome: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addIncome } = Incomeslice.actions;

export default Incomeslice.reducer;

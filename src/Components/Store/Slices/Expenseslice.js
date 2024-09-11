import { createSlice } from '@reduxjs/toolkit';

export const Expenseslice = createSlice({
  name: 'expenses',
  initialState: {
    items: [],
  },
  reducers: {
    addExpense: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addExpense } = Expenseslice.actions;

export default Expenseslice.reducer;

import {createSlice} from '@reduxjs/toolkit'

export const Debtslice = createSlice({
  name: 'debts',
  initialState: {
    items: [],
  },
  reducers: {
    addDebt: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addDebt } = Debtslice.actions;

export default Debtslice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import ExpenseReducer from './Slices/Expenseslice';
import IncomeReducer from './Slices/Incomeslice';
import DebtReducer from './Slices/Debtslice';

const Store = configureStore({
  reducer: {
    expenses: ExpenseReducer,
    income: IncomeReducer,
    debts: DebtReducer,
  },
});

export default Store;

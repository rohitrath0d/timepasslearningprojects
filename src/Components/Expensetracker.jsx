import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense } from './Store/Slices/Expenseslice';

function Expensetracker() {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.items);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = () => {
    dispatch(addExpense({ description, amount }));
    setDescription('');
    setAmount('');
  };

  return (
    <section className="mb-8">
      <h2 className="text-3xl font-semibold mb-4">Expense Tracker</h2>
      <div className="bg-white p-4 rounded shadow">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border rounded mr-2"
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-2 border rounded"
          />
          <button onClick={handleAddExpense} className="bg-blue-600 text-white p-2 rounded ml-2">
            Add Expense
          </button>
        </div>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index} className="mb-2">
              {expense.description}: ${expense.amount}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Expensetracker;

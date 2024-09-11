import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addIncome } from './Store/Slices/Incomeslice';
function Incomemanagement() {
  const dispatch = useDispatch();
  const incomeItems = useSelector((state) => state.income.items);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddIncome = () => {
    dispatch(addIncome({ description, amount }));
    setDescription('');
    setAmount('');
  };

  return (
    <section className="mb-8">
      <h2 className="text-3xl font-semibold mb-4">Income Management</h2>
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
          <button onClick={handleAddIncome} className="bg-green-600 text-white p-2 rounded ml-2">
            Add Income
          </button>
        </div>
        <ul>
          {incomeItems.map((income, index) => (
            <li key={index} className="mb-2">
              {income.description}: ${income.amount}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Incomemanagement;

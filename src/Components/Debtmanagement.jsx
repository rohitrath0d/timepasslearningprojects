import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDebt } from './Store/Slices/Debtslice';

function Debtmanagement() {
  const dispatch = useDispatch();
  const debts = useSelector((state) => state.debts.items);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddDebt = () => {
    dispatch(addDebt({ description, amount }));
    setDescription('');
    setAmount('');
  };

  return (
    <section className="mb-8">
      <h2 className="text-3xl font-semibold mb-4">Debt Management</h2>
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
          <button onClick={handleAddDebt} className="bg-red-600 text-white p-2 rounded ml-2">
            Add Debt
          </button>
        </div>
        <ul>
          {debts.map((debt, index) => (
            <li key={index} className="mb-2">
              {debt.description}: ${debt.amount}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Debtmanagement;

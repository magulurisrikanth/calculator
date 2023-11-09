// CDForm.js
import React, { useState } from 'react';

function CDForm({ onCalculate }) {
  const [principal, setPrincipal] = useState(10000); // Initial deposit
  const [rate, setRate] = useState(5); // Annual interest rate
  const [years, setYears] = useState(2); // Number of years

  const handleCalculate = () => {
    onCalculate(principal, rate, years);
  };

  return (
    <div className="w-full mx-auto p-4">
      <div className="mb-4">
        <label>Principal Amount</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          className="w-full p-2 border border-gray-300"
        />
      </div>
      <div className="mb-4">
        <label>Annual Interest Rate (%)</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="w-full p-2 border border-gray-300"
        />
      </div>
      <div className="mb-4">
        <label>Number of Years</label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          className="w-full p-2 border border-gray-300"
        />
      </div>
      <button onClick={handleCalculate} className='!bg-green-theme !text-neon-green p-3 text-lg w-full'>
        Calculate
      </button>
    </div>
  );
}

export default CDForm;

// CDResult.js
import React from 'react';

function CDResult({ result }) {
  return (
    <div className="w-1/3 mx-auto mt-4 p-4 border border-gray-300">
      <h2 className="text-xl font-semibold mb-2">CD Calculator Result</h2>
      <div>
        <p>Final Amount: ${result.finalAmount.toFixed(2)}</p>
        <p>Interest Earned: ${result.interestEarned.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default CDResult;
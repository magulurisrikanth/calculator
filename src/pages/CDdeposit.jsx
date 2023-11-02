// App.js
import React, { useState } from "react";
import CDForm from "../components/micro/CDForm";
import CDResult from "../components/micro/CDResult";
import CDGraph from "../components/micro/CDGraph";

function CDdeposit() {
  const [result, setResult] = useState(null);
  const [principal, setPrincipal] = useState(10000); // Initial deposit
  const [rate, setRate] = useState(5); // Annual interest rate

  const calculateCD = (principal, rate, years) => {
    const interestRate = rate / 100;
    const finalAmount = principal * Math.pow(1 + interestRate, years);
    const interestEarned = finalAmount - principal;

    setResult({ finalAmount, interestEarned });
  };

  return (
    <div className="App min-h-screen bg-gray-100">
      <h1 className="text-2xl text-center py-4 bg-blue-500 text-white">Certificate of Deposit Calculator</h1>
      <CDForm onCalculate={calculateCD} />
      {result && <CDResult result={result} />}
      {result && (
        <div className="w-1/2 mx-auto mt-8">
          <CDGraph
            principal={principal}
            rate={rate}
            data={{
              years: Array.from({ length: 6 }, (_, i) => i + 1),
              principal: Array.from({ length: 6 }, (_, i) => principal * Math.pow(1 + rate / 100, i + 1) - principal),
            }}
          />
        </div>
      )}
    </div>
  );
}

export default CDdeposit;

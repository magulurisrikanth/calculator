import React, { useState } from "react";
import CDForm from "../components/micro/CDForm";
import CDResult from "../components/micro/CDResult";
import CDGraph from "../components/micro/CDGraph";
import { Heading } from "@chakra-ui/react";

function CDdeposit() {
  const [result, setResult] = useState(null);
  const [principal] = useState(10000); // Initial deposit
  const [rate] = useState(5); // Annual interest rate

  const calculateCD = (principal, rate, years) => {
    const interestRate = rate / 100;
    const finalAmount = principal * Math.pow(1 + interestRate, years);
    const interestEarned = finalAmount - principal;

    setResult({ finalAmount, interestEarned });
  };

  return (
    <div className="min-h-screen bg-bg-color p-4 border border-gray-300 rounded-lg shadow-md w-full">
        <div className="w-full text-center mb-4">
        <Heading as="h3" size="xl" className="!text-2xl relative inline-block">
          Certificate of Deposit
        <div className="absolute bottom-0 left-0 right-0 m-auto top-[2rem] w-40 border-b-2 border-solid border-gray-500"></div>
        </Heading>
      </div>
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

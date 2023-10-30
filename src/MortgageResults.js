import React from 'react';

const MortgageResults = ({ monthlyPayment }) => {
    return (
      <div className="mortgage-results">
        <h2>Results</h2>
        <p>Monthly Payment: ${monthlyPayment.toFixed(2)}</p>
      </div>
    );
  };

export default MortgageResults;

import React, { useState } from 'react';

const MortgageForm = (props) => {
  const [formData, setFormData] = useState({
    principal: '',
    interestRate: '',
    loanTerm: '',
    totalInterest: 0,
    yearlyPayments: [],
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const principal = parseFloat(formData.principal);
    const interestRate = parseFloat(formData.interestRate) / 100;
    const loanTerm = parseFloat(formData.loanTerm);

    // Calculate monthly payment
    const monthlyInterestRate = interestRate / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    // Calculate total interest paid
    const totalInterest = (monthlyPayment * numberOfPayments) - principal;

    
    const yearlyPayments = [];
    let remainingBalance = principal;
    for (let year = 1; year <= loanTerm; year++) {
      const yearlyInterest = remainingBalance * monthlyInterestRate * 12;
      const yearlyPrincipal = monthlyPayment * 12 - yearlyInterest;
      remainingBalance -= yearlyPrincipal;
      yearlyPayments.push({ year, yearlyPrincipal, yearlyInterest });
    }

    setFormData({ ...formData, totalInterest, yearlyPayments });

    props.calculateMonthlyPayment(formData.principal, formData.interestRate, formData.loanTerm);
  };

  const handleReset = () => {
    setFormData({
      principal: '',
      interestRate: '',
      loanTerm: '',
      totalInterest: 0,
      yearlyPayments: [],
    });
  };

  return (
    <div className="mortgage-form">
      <h2>Mortgage Details</h2>
      <div className="input-group">
        <label>Principal Amount ($):</label>
        <input
          type="number"
          name="principal"
          value={formData.principal}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Interest Rate (%):</label>
        <input
          type="number"
          name="interestRate"
          value={formData.interestRate}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Loan Term (years):</label>
        <input
          type="number"
          name="loanTerm"
          value={formData.loanTerm}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit}>Calculate Monthly Payment</button>
      <button onClick={handleReset}>Reset</button>
      <div className="result">
        <p>Total Interest Paid: ${formData.totalInterest.toFixed(2)}</p>
      </div>
      <div className="yearly-payments">
        <h3>Yearly Payments</h3>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Yearly Principal</th>
              <th>Yearly Interest</th>
            </tr>
          </thead>
          <tbody>
            {formData.yearlyPayments.map((payment, index) => (
              <tr key={index}>
                <td>{payment.year}</td>
                <td>${payment.yearlyPrincipal.toFixed(2)}</td>
                <td>${payment.yearlyInterest.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MortgageForm;

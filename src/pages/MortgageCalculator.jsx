import React, { useState } from 'react';
import { Grid, GridItem, Heading, Input, FormLabel, Select, Stack } from '@chakra-ui/react'

const MortgageForm = (props) => {
  const [formData, setFormData] = useState({
    principal: '',
    interestRate: '',
    loanTerm: '',
    totalInterest: 0,
    yearlyPayments: [],
    monthlyPayment: 0
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const calculateMonthlyPayment = (principalAmount, interestRate, loanTerm) => {
    const principal = parseFloat(principalAmount);
    const annualInterestRate = parseFloat(interestRate) / 100; // Convert annual interest rate to a decimal
    const monthlyInterestRate = annualInterestRate / 12; // Monthly interest rate
    
    const loanTermMonths = parseFloat(loanTerm) * 12; // Loan term in months
    console.log("check 3 values", principal,annualInterestRate, monthlyInterestRate)
    const monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTermMonths));
    
    console.log("calculate", monthlyPayment);
    setFormData(prev => ({...prev, monthlyPayment}));
  }

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
    calculateMonthlyPayment(formData.principal, formData.interestRate, formData.loanTerm);
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
    <div className="mortgage-form min-h-screen !bg-bg-color p-4 border border-gray-300 rounded-lg shadow-md mx-auto">
      <div className="w-full text-center mb-4">
        <Heading as="h3" size="xl" className="!text-2xl relative inline-block">
          Mortgage Details
        <div className="absolute bottom-0 left-0 right-0 m-auto top-[2rem] w-40 border-b-2 border-solid border-gray-500"></div>
        </Heading>
      </div>
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
      <button onClick={handleSubmit} className='!bg-green-theme !text-neon-green p-3 text-lg'>Calculate Monthly Payment</button>
      <button onClick={handleReset} className='!bg-green-theme !text-neon-green p-3 text-lg'>Reset</button>
      <div className="result">
        <p>Total Interest Paid: ${formData.totalInterest.toFixed(2)}</p>
      </div>
      {formData.yearlyPayments.length > 0 && (
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
      )}
    </div>
  );
};

export default MortgageForm;
import React, { Component } from 'react';
import MortgageForm from './MortgageForm';
import MortgageResults from './MortgageResults';

class App extends Component {
  constructor() {
    super();
    this.state = {
      principal: 0,
      interestRate: 0,
      loanTerm: 0,
      monthlyPayment: 0,
    };
  }
  calculateMonthlyPayment = (principalAmount, interestRate, loanTerm) => {
    const principal = parseFloat(principalAmount);
    const annualInterestRate = parseFloat(interestRate) / 100; // Convert annual interest rate to a decimal
    const monthlyInterestRate = annualInterestRate / 12; // Monthly interest rate
    
    const loanTermMonths = parseFloat(loanTerm) * 12; // Loan term in months
    console.log("check 3 values", principal,annualInterestRate, monthlyInterestRate)
    const monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTermMonths));
    
    console.log("calculate", monthlyPayment);
    this.setState(prev => ({...prev, monthlyPayment}));
  };

  render() {
    return (
      <div className="mortgage-calculator">
        <h1>Mortgage Payoff Calculator</h1>
        <MortgageForm
          principal={this.state.principal}
          interestRate={this.state.interestRate}
          loanTerm={this.state.loanTerm}
          calculateMonthlyPayment={this.calculateMonthlyPayment}
        />
        <MortgageResults monthlyPayment={this.state.monthlyPayment} />
      </div>
    );
  }
}

export default App;

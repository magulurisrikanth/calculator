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
  calculateMonthlyPayment = () => {
    const monthlyPayment = (this.state.principal * this.state.monthlyInterestRate) / (1 - (1 + this.state.monthlyInterestRate) ** -this.state.loanTermMonths);
    return monthlyPayment;
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

// import React, { Component } from 'react';

// class MortgageForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { ...props };
//   }

//   handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     console.log("here is the state data", this.state);
//     this.props.calculateMonthlyPayment(this.state.principal, this.state.interestRate, this.state.loanTerm);
//   }

  

//   render() {
//     console.log("updated state data", this.state);
//     return (
//       <div className="mortgage-form">
//         <h2>Mortgage Details</h2>
//         <div className="input-group">
//           <label>Principal Amount ($):</label>
//           <input
//             type="number"
//             name="principal"
//             value={this.state.principal}
//             onChange={this.handleChange}
//           />
//         </div>
//         <div className="input-group">
//           <label>Interest Rate (%):</label>
//           <input
//             type="number"
//             name="interestRate"
//             value={this.state.interestRate}
//             onChange={this.handleChange}
//           />
//         </div>
//         <div className="input-group">
//           <label>Loan Term (years):</label>
//           <input
//             type="number"
//             name="loanTerm"
//             value={this.state.loanTerm}
//             onChange={this.handleChange}
//           />
//         </div>
//         <button onClick={this.handleSubmit}>Calculate Monthly Payment</button>
//       </div>
//     );
//   }
// }

// export default MortgageForm;

import React, { Component } from 'react';

class MortgageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props, totalInterest: 0, yearlyPayments: [] };
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    const principal = parseFloat(this.state.principal);
    const interestRate = parseFloat(this.state.interestRate) / 100;
    const loanTerm = parseFloat(this.state.loanTerm);

    // Calculate monthly payment
    const monthlyInterestRate = interestRate / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    // Calculate total interest paid
    const totalInterest = (monthlyPayment * numberOfPayments) - principal;

    // Calculate yearly payments and total interest
    const yearlyPayments = [];
    let remainingBalance = principal;
    for (let year = 1; year <= loanTerm; year++) {
      const yearlyInterest = remainingBalance * monthlyInterestRate * 12;
      const yearlyPrincipal = monthlyPayment * 12 - yearlyInterest;
      remainingBalance -= yearlyPrincipal;
      yearlyPayments.push({ year, yearlyPrincipal, yearlyInterest });
    }

    this.setState({ totalInterest, yearlyPayments });

    this.props.calculateMonthlyPayment(this.state.principal, this.state.interestRate, this.state.loanTerm);
  };

  handleReset = () => {
    this.setState({ principal: '', interestRate: '', loanTerm: '', totalInterest: 0, yearlyPayments: [] });
  }

  render() {
    return (
      <div className="mortgage-form">
        <h2>Mortgage Details</h2>
        <div className="input-group">
          <label>Principal Amount ($):</label>
          <input
            type="number"
            name="principal"
            value={this.state.principal}
            onChange={this.handleChange}
          />
        </div>
        <div className="input-group">
          <label>Interest Rate (%):</label>
          <input
            type="number"
            name="interestRate"
            value={this.state.interestRate}
            onChange={this.handleChange}
          />
        </div>
        <div className="input-group">
          <label>Loan Term (years):</label>
          <input
            type="number"
            name="loanTerm"
            value={this.state.loanTerm}
            onChange={this.handleChange}
          />
        </div>
        <button onClick={this.handleSubmit}>Calculate Monthly Payment</button>
        <button onClick={this.handleReset}>Reset</button>
        <div className="result">
          <p>Total Interest Paid: ${this.state.totalInterest.toFixed(2)}</p>
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
              {this.state.yearlyPayments.map((payment, index) => (
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
  }
}

export default MortgageForm;

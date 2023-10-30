import React, { Component } from 'react';

class MortgageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

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
        <button onClick={this.props.calculateMonthlyPayment}>Calculate Monthly Payment</button>
      </div>
    );
  }
}

export default MortgageForm;

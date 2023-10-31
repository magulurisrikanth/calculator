import React, { useState } from "react";
import "./homevsrent.css"; // Make sure to create a CSS file for styling

const Homevsrent = () => {
  const [state, setState] = useState({
    homePrice: 0,
    downPayment: 0,
    interestRate: 0,
    loanTerm: 0,
    buyingClosingCosts: 0,
    propertyTax: 0,
    propertyTaxIncrease: 0,
    homeInsurance: 0,
    hoaFee: 0,
    maintenanceCost: 0,
    homeValueAppreciation: 0,
    costInsuranceIncrease: 0,
    sellingClosingCosts: 0,
    monthlyRentalFee: 0,
    rentalFeeIncrease: 0,
    rentersInsurance: 0,
    securityDeposit: 0,
    upfrontCost: 0,
    averageInvestmentReturn: 0,
    marginalFederalTaxRate: 0,
    marginalStateTaxRate: 0,
    taxFilingStatus: "single",
    buyTotalCost: 0,
    rentTotalCost: 0,
    recommendation: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: parseFloat(value) });
  };

  const calculateTotalCosts = () => {
    const {
      homePrice,
      downPayment,
      interestRate,
      loanTerm,
      buyingClosingCosts,
      propertyTax,
      propertyTaxIncrease,
      homeInsurance,
      hoaFee,
      maintenanceCost,
      homeValueAppreciation,
      costInsuranceIncrease,
      sellingClosingCosts,
      monthlyRentalFee,
      rentalFeeIncrease,
      rentersInsurance,
      securityDeposit,
      upfrontCost,
      averageInvestmentReturn,
      marginalFederalTaxRate,
      marginalStateTaxRate,
      taxFilingStatus,
    } = state;

    // Calculate the total cost of buying
    const principal = homePrice - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyMortgagePayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    const totalBuyingCost = monthlyMortgagePayment * numberOfPayments + buyingClosingCosts + propertyTax + homeInsurance + hoaFee + maintenanceCost + sellingClosingCosts;

    // Calculate the total cost of renting
    const totalRentingCost = monthlyRentalFee * numberOfPayments + rentersInsurance + rentalFeeIncrease * numberOfPayments;

    // Compare total costs and make a recommendation
    let recommendation;
    if (totalBuyingCost < totalRentingCost) {
      recommendation = "Buying is recommended.";
    } else {
      recommendation = "Renting is recommended.";
    }

    // Update the state with the results
    setState({
      ...state,
      buyTotalCost: totalBuyingCost,
      rentTotalCost: totalRentingCost,
      recommendation: recommendation,
    });
  };

  return (
    <div className="calculator">
      <h1>Rent vs. Buy Calculator</h1>
      <div className="input-group">
        <label htmlFor="homePrice">Home Price ($):</label>
        <input type="number" id="homePrice" name="homePrice" onChange={handleInputChange} value={state.homePrice} />
      </div>
      <div className="input-group">
        <label htmlFor="downPayment">Down Payment ($):</label>
        <input type="number" id="downPayment" name="downPayment" onChange={handleInputChange} value={state.downPayment} />
      </div>
      <div className="input-group">
        <label htmlFor="interestRate">Interest Rate (%):</label>
        <input type="number" id="interestRate" name="interestRate" onChange={handleInputChange} value={state.interestRate} />
      </div>
      <div className="input-group">
        <label htmlFor="loanTerm">Loan Term (years):</label>
        <input type="number" id="loanTerm" name="loanTerm" onChange={handleInputChange} value={state.loanTerm} />
      </div>
      <div className="input-group">
        <label htmlFor="buyingClosingCosts">Buying Closing Costs ($):</label>
        <input type="number" id="buyingClosingCosts" name="buyingClosingCosts" onChange={handleInputChange} value={state.buyingClosingCosts} />
      </div>
      <div className="input-group">
        <label htmlFor="propertyTax">Annual Property Tax ($):</label>
        <input type="number" id="propertyTax" name="propertyTax" onChange={handleInputChange} value={state.propertyTax} />
      </div>
      <div className="input-group">
        <label htmlFor="propertyTaxIncrease">Annual Property Tax Increase (%):</label>
        <input type="number" id="propertyTaxIncrease" name="propertyTaxIncrease" onChange={handleInputChange} value={state.propertyTaxIncrease} />
      </div>
      <div className="input-group">
        <label htmlFor="homeInsurance">Annual Home Insurance ($):</label>
        <input type="number" id="homeInsurance" name="homeInsurance" onChange={handleInputChange} value={state.homeInsurance} />
      </div>
      <div className="input-group">
        <label htmlFor="hoaFee">Monthly HOA Fee ($):</label>
        <input type="number" id="hoaFee" name="hoaFee" onChange={handleInputChange} value={state.hoaFee} />
      </div>
      <div className="input-group">
        <label htmlFor="maintenanceCost">Annual Maintenance Cost ($):</label>
        <input type="number" id="maintenanceCost" name="maintenanceCost" onChange={handleInputChange} value={state.maintenanceCost} />
      </div>
      <div className="input-group">
        <label htmlFor="homeValueAppreciation">Annual Home Value Appreciation (%):</label>
        <input type="number" id="homeValueAppreciation" name="homeValueAppreciation" onChange={handleInputChange} value={state.homeValueAppreciation} />
      </div>
      <div className="input-group">
        <label htmlFor="costInsuranceIncrease">Annual Home Insurance Increase (%):</label>
        <input type="number" id="costInsuranceIncrease" name="costInsuranceIncrease" onChange={handleInputChange} value={state.costInsuranceIncrease} />
      </div>
      <div className="input-group">
        <label htmlFor="sellingClosingCosts">Selling Closing Costs ($):</label>
        <input type="number" id="sellingClosingCosts" name="sellingClosingCosts" onChange={handleInputChange} value={state.sellingClosingCosts} />
      </div>
      <div className="input-group">
        <label htmlFor="monthlyRentalFee">Monthly Rental Fee ($):</label>
        <input type="number" id="monthlyRentalFee" name="monthlyRentalFee" onChange={handleInputChange} value={state.monthlyRentalFee} />
      </div>
      <div className="input-group">
        <label htmlFor="rentalFeeIncrease">Monthly Rental Fee Increase (%):</label>
        <input type="number" id="rentalFeeIncrease" name="rentalFeeIncrease" onChange={handleInputChange} value={state.rentalFeeIncrease} />
      </div>
      <div className="input-group">
        <label htmlFor="rentersInsurance">Annual Renters Insurance ($):</label>
        <input type="number" id="rentersInsurance" name="rentersInsurance" onChange={handleInputChange} value={state.rentersInsurance} />
      </div>
      <div className="input-group">
        <label htmlFor="securityDeposit">Security Deposit ($):</label>
        <input type="number" id="securityDeposit" name="securityDeposit" onChange={handleInputChange} value={state.securityDeposit} />
      </div>
      <div className="input-group">
        <label htmlFor="upfrontCost">Upfront Costs ($):</label>
        <input type="number" id="upfrontCost" name="upfrontCost" onChange={handleInputChange} value={state.upfrontCost} />
      </div>
      <div className="input-group">
        <label htmlFor="averageInvestmentReturn">Average Investment Return (%):</label>
        <input type="number" id="averageInvestmentReturn" name="averageInvestmentReturn" onChange={handleInputChange} value={state.averageInvestmentReturn} />
      </div>
      <div className="input-group">
        <label htmlFor="marginalFederalTaxRate">Marginal Federal Tax Rate (%):</label>
        <input type="number" id="marginalFederalTaxRate" name="marginalFederalTaxRate" onChange={handleInputChange} value={state.marginalFederalTaxRate} />
      </div>
      <div className="input-group">
        <label htmlFor="marginalStateTaxRate">Marginal State Tax Rate (%):</label>
        <input type="number" id="marginalStateTaxRate" name="marginalStateTaxRate" onChange={handleInputChange} value={state.marginalStateTaxRate} />
      </div>
      <div className="input-group">
        <label htmlFor="taxFilingStatus">Tax Filing Status:</label>
        <select id="taxFilingStatus" name="taxFilingStatus" onChange={handleInputChange} value={state.taxFilingStatus}>
          <option value="single">Single</option>
          <option value="married">Married Filing Jointly</option>
          <option value="separate">Married Filing Separately</option>
          <option value="head">Head of Household</option>
          <option value="widow">Qualified Widow</option>
        </select>
      </div>
      <button onClick={calculateTotalCosts}>Calculate</button>
      <div className="result">
        <p>
          Total Cost of Buying: <span>${state.buyTotalCost.toFixed(2)}</span>
        </p>
        <p>
          Total Cost of Renting: <span>${state.rentTotalCost.toFixed(2)}</span>
        </p>
        <p>
          Recommendation: <span>{state.recommendation}</span>
        </p>
      </div>
    </div>
  );
};

export default Homevsrent;

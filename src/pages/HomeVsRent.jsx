import React, { useState } from "react";
import "./homevsrent.css"; // Make sure to create a CSS file for styling
import { Grid, GridItem, Heading, Input, FormLabel, Select, Stack } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
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
    console.log("calculate cliked");
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
    <div className="calculator w-full">
      <div className="w-full text-center mb-4">
        <Heading as="h3" size="xl" className="text-2xl relative inline-block">
          Rent vs. Buy Calculator
        <div className="absolute bottom-0 left-0 right-0 m-auto top-[3rem] w-40 border-b-2 border-solid border-gray-500"></div>
        </Heading>
      </div>
      <Grid templateColumns='repeat(2, 1fr)' gap={6}>
  <GridItem className="p-8">
      <Heading as="h4" size="lg" className="relative">
        Purchase Home
        <div className="absolute bottom-0 left-0 top-[2.5rem] w-40 border-b-2 border-solid border-gray-500"></div>
        </Heading>
      <div className="input-group">
        <FormLabel>Home Price ($):</FormLabel>
        <Input type="number" id="homePrice" name="homePrice" placeholder="Input price" onChange={handleInputChange} value={state.homePrice} />
      </div>
      <div className="input-group">
        <FormLabel htmlFor="downPayment">Down Payment ($):</FormLabel>
        <Input type="number" id="downPayment" name="downPayment" onChange={handleInputChange} value={state.downPayment} />
      </div>
      <div className="input-group">
        <FormLabel htmlFor="interestRate">Interest Rate (%):</FormLabel>
        <Input type="number" id="interestRate" name="interestRate" onChange={handleInputChange} value={state.interestRate} />
      </div>
      <div className="input-group">
        <FormLabel htmlFor="loanTerm">Loan Term (years):</FormLabel>
        <Input type="number" id="loanTerm" name="loanTerm" onChange={handleInputChange} value={state.loanTerm} />
      </div>
      <div className="input-group">
        <FormLabel htmlFor="buyingClosingCosts">Buying Closing Costs ($):</FormLabel>
        <Input type="number" id="buyingClosingCosts" name="buyingClosingCosts" onChange={handleInputChange} value={state.buyingClosingCosts} />
      </div>
      <div className="input-group">
        <FormLabel htmlFor="propertyTax">Annual Property Tax ($):</FormLabel>
        <Input type="number" id="propertyTax" name="propertyTax" onChange={handleInputChange} value={state.propertyTax} />
      </div>
      <div className="input-group">
        <FormLabel htmlFor="propertyTaxIncrease">Annual Property Tax Increase (%):</FormLabel>
        <Input type="number" id="propertyTaxIncrease" name="propertyTaxIncrease" onChange={handleInputChange} value={state.propertyTaxIncrease} />
      </div>
      <div className="input-group">
        <FormLabel htmlFor="homeInsurance">Annual Home Insurance ($):</FormLabel>
        <Input type="number" id="homeInsurance" name="homeInsurance" onChange={handleInputChange} value={state.homeInsurance} />
      </div>
      <div className="input-group">
        <FormLabel htmlFor="hoaFee">Monthly HOA Fee ($):</FormLabel>
        <Input type="number" id="hoaFee" name="hoaFee" onChange={handleInputChange} value={state.hoaFee} />
      </div>
      <div className="input-group">
        <FormLabel htmlFor="maintenanceCost">Annual Maintenance Cost ($):</FormLabel>
        <Input type="number" id="maintenanceCost" name="maintenanceCost" onChange={handleInputChange} value={state.maintenanceCost} />
      </div>
      <div className="input-group">
        <FormLabel htmlFor="homeValueAppreciation">Annual Home Value Appreciation (%):</FormLabel>
        <Input type="number" id="homeValueAppreciation" name="homeValueAppreciation" onChange={handleInputChange} value={state.homeValueAppreciation} />
      </div>
      <div className="input-group">
        <FormLabel htmlFor="costInsuranceIncrease">Annual Home Insurance Increase (%):</FormLabel>
        <Input type="number" id="costInsuranceIncrease" name="costInsuranceIncrease" onChange={handleInputChange} value={state.costInsuranceIncrease} />
      </div>
      <div className="input-group">
        <FormLabel htmlFor="sellingClosingCosts">Selling Closing Costs ($):</FormLabel>
        <Input type="number" id="sellingClosingCosts" name="sellingClosingCosts" onChange={handleInputChange} value={state.sellingClosingCosts} />
      </div>
      </GridItem>
  <GridItem className="p-8">
  <div className="Home Rent">
  <Heading as="h4" size="lg" className="relative">Rent Home
  <div className="absolute bottom-0 left-0 top-[2.5rem] w-40 border-b-2 border-solid border-gray-500"></div></Heading>
      <div className="input-group">
        <FormLabel htmlFor="yearlyRentalFee">Yearly Rental Fee ($):</FormLabel>
        <Input type="number" id="monthlyRentalFee" name="monthlyRentalFee" onChange={handleInputChange} value={state.monthlyRentalFee} />
      </div>
      <div className="input-group">
        <FormLabel htmlFor="rentalFeeIncrease">Monthly Rental Fee Increase (%):</FormLabel>
        <Input type="number" id="rentalFeeIncrease" name="rentalFeeIncrease" onChange={handleInputChange} value={state.rentalFeeIncrease} />
      </div>
      <div className="input-group">
        <FormLabel htmlFor="rentersInsurance">Annual Renters Insurance ($):</FormLabel>
        <Input type="number" id="rentersInsurance" name="rentersInsurance" onChange={handleInputChange} value={state.rentersInsurance} />
      </div>
      <div className="input-group">
        <FormLabel htmlFor="securityDeposit">Security Deposit ($):</FormLabel>
        <Input type="number" id="securityDeposit" name="securityDeposit" onChange={handleInputChange} value={state.securityDeposit} />
      </div>
      <div className="input-group">
        <FormLabel htmlFor="upfrontCost">Upfront Costs ($):</FormLabel>
        <Input type="number" id="upfrontCost" name="upfrontCost" onChange={handleInputChange} value={state.upfrontCost} />
      </div>
      </div>
  <div className="Your information">
  <Heading as="h4" size="lg" className="relative">Your Information
  <div className="absolute bottom-0 left-0 top-[2.5rem] w-40 border-b-2 border-solid border-gray-500"></div>
  </Heading>
      <div className="input-group">
        <FormLabel htmlFor="averageInvestmentReturn">Average Investment Return (%):</FormLabel>
        <Input type="number" id="averageInvestmentReturn" name="averageInvestmentReturn" onChange={handleInputChange} value={state.averageInvestmentReturn} />
      </div>
      <div className="input-group">
        <FormLabel htmlFor="marginalFederalTaxRate">Marginal Federal Tax Rate (%):</FormLabel>
        <Input type="number" id="marginalFederalTaxRate" name="marginalFederalTaxRate" onChange={handleInputChange} value={state.marginalFederalTaxRate} />
      </div>
      <div className="input-group">
        <FormLabel htmlFor="marginalStateTaxRate">Marginal State Tax Rate (%):</FormLabel>
        <Input type="number" id="marginalStateTaxRate" name="marginalStateTaxRate" onChange={handleInputChange} value={state.marginalStateTaxRate} />
      </div>
      <div className="input-group">
        <FormLabel htmlFor="taxFilingStatus">Tax Filing Status:</FormLabel>
        <Select id="taxFilingStatus" name="taxFilingStatus" onChange={handleInputChange} value={state.taxFilingStatus}>
          <option value="single">Single</option>
          <option value="married">Married Filing Jointly</option>
          <option value="separate">Married Filing Separately</option>
          <option value="head">Head of Household</option>
          <option value="widow">Qualified Widow</option>
        </Select>
      </div>
      </div>
  </GridItem>
</Grid>
<Stack direction='row' spacing={4} align='center'>
  <Button colorScheme='teal' variant='solid' onClick={calculateTotalCosts}>
    Calculate
  </Button>
</Stack>
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

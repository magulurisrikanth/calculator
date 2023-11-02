import React, { useState } from 'react';
import MortgageCalculator from '../src/pages/MortgageCalculator'
import MortgageResults from './MortgageResults';
import Homevsrent from '../src/pages/HomeVsRent';
import './input.css'
import Tabs from './components/macro/Tabs';
import AppRouter from './routes/Routes';
import Footer from './components/footer/Footer';

function App(){
  

   const [calc, setCalc] = useState({
      principal: 0,
      interestRate: 0,
      loanTerm: 0,
      monthlyPayment: 0,
    });
  
  const calculateMonthlyPayment = (principalAmount, interestRate, loanTerm) => {
    const principal = parseFloat(principalAmount);
    const annualInterestRate = parseFloat(interestRate) / 100; // Convert annual interest rate to a decimal
    const monthlyInterestRate = annualInterestRate / 12; // Monthly interest rate
    
    const loanTermMonths = parseFloat(loanTerm) * 12; // Loan term in months
    console.log("check 3 values", principal,annualInterestRate, monthlyInterestRate)
    const monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTermMonths));
    
    console.log("calculate", monthlyPayment);
    setCalc(prev => ({...prev, monthlyPayment}));
  };

    return (
      <div className='w-4/5 mx-auto'>
      <Tabs />
      <div className='pageLayout p-4 bg-gray-300 min-h-screen overflow-auto'>
        <AppRouter />
      </div>
      <Footer />
      </div>
    )
}

export default App;

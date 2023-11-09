import React, { useState } from "react";
import MortgageCalculator from "../src/pages/MortgageCalculator";
import MortgageResults from "./MortgageResults";
import Homevsrent from "../src/pages/HomeVsRent";
import "./input.css";
import Tabs from "./components/macro/Tabs";
import AppRouter from "./routes/Routes";
import Footer from "./components/footer/Footer";

const App = () => (
  <div className="w-4/5 mx-auto">
    <Tabs />
    <div className="pageLayout p-4 bg-gray-300 min-h-screen overflow-auto">
      <AppRouter />
    </div>
    <Footer />
  </div>
);

export default App;

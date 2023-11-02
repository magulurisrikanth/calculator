// Router.js
import React, {Suspense} from 'react';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';


const MortgageCalculator = loadable(() => import(/* webpackChunkName: "home" */ '../pages/MortgageCalculator'));
const HomeVsRent = loadable(() => import(/* webpackChunkName: "solutions" */ '../pages/HomeVsRent'));
const CDdeposit = loadable(() => import(/* webpackChunkName: "whoweare" */ '../pages/CDdeposit'));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MortgageCalculator />} />
        <Route path="/homevsrent" element={<HomeVsRent />} />
        <Route path="/cddeposit" element={<CDdeposit />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;

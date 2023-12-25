// Routes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Home';
// import Login from './components/Login-page';
import SignUp from './components/register'
// import Private_route from './private_routes/Private_route';
import Checkout from './components/Checkout'
import PaymentForm from './components/paymentForm';
import SignIn from './components/login';
import Products from './components/Products';
import Layout from './layout/Layout';
import { Body } from './layout/Body';

const AppRoutes = () => {
  return (
      <Layout>
    <Routes>
      {/* <Route path="/login" element={<Login/>} /> */}
      <Route path="/" element={<Dashboard />} ></Route>
      <Route path="/register" element={<SignUp/>} />
      <Route path="/SignIn" element={<SignIn/>} />
      <Route path="/checkout" element={<Checkout/>} ></Route>
      <Route path="/checkout/payment" element={<PaymentForm/>} ></Route>
      <Route path="/products" element={<Products/>}></Route>
      
      {/* <Route element ={<Private_route/>}>
     
      </Route>  */}

    </Routes>
    </Layout>
  );
};

export default AppRoutes;

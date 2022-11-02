import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ScrollTop from './components/ScrollTop/ScrollTop';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      {/* <ScrollTop /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;

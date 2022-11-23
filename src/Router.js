import React, { useEffect, useState } from 'react';
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
import Jacket from './pages/Jacket/Jacket';
import Signup from './pages/Signup/Signup';
import ScrollTop from './components/ScrollTop/ScrollTop';
import { Provider } from 'react-redux';
import store from './store';

const Router = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`data/data.json`)
      // fetch(`${API.LIST}/${tabSwtich}/list`) //`name=${name}`
      // fetch(`http://172.20.10.3:3000/products/${tabSwtich}/list`) //`name=${name}`
      .then(res => res.json())
      .then(data => setData(data)); //통신 할땐 data.result
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        {/* <ScrollTop /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Register />} />
          <Route path="/list" element={<List />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/" element={<Main data={data} />} />
          <Route path="/Jacket" element={<Jacket />} />
          <Route path="/Detail" element={<Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default Router;

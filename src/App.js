import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/404";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Layout>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/product/:id" element={<ProductPage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    </Layout>
  )
}

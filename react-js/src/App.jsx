import UseEffectAPI from "./components/UsersDataApi";
import Welcome from "./components/Welcome";
import { Routes, Route } from "react-router-dom";
import Form from "./components/FormData";
import Home from "./components/home";
import About from "./components/About";
import Navbar from "./components/navbar";
import NoRoute from "./components/NoRoute";
import Products from "./components/products";
import ChildProducts from "./components/ChildProducts";
import PopularProducts from "./components/PopularProducts";
import Users from "./components/Users";
export default function App() {
 return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="*" element={<NoRoute />}></Route>
      <Route path="products" element={<Products />}>
         <Route path="popular-product" element={<PopularProducts />}></Route>
         <Route path="child-product" element={<ChildProducts />}></Route>
      </Route>
      <Route path="user/:userId" element={<Users />}></Route>
    </Routes>
    </>
 );
}
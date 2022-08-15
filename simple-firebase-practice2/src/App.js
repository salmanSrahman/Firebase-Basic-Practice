import "bootstrap/dist/css/bootstrap.min.css";
import { Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Order from "./Components/Order/Order";
import Products from "./Components/Products/Products";
import Register from "./Components/Register/Register";

function App() {
  return (
    <div>
      <Header />
      <Routes path="/" element={<Home />}></Routes>
      <Routes path="home" element={<Home />}></Routes>
      <Routes path="products" element={<Products />}></Routes>
      <Routes path="order" element={<Order />}></Routes>
      <Routes path="register" element={<Register />}></Routes>
      <Routes path="login" element={<Login />}></Routes>
    </div>
  );
}

export default App;

import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./component/navbar";
import Banner from "./component/banner";
import Products from "./component/Products";
import "@fontsource/manrope";
import "./index.css";

const getApi = async () => {
  const res = await fetch("/Api.json");
  return res.json();
};

const apiData = getApi();

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="font-sans">
      <Navbar cart={cart} setShowCart={setShowCart} />
      <Banner />
      <Products apiData={apiData} cart={cart} setCart={setCart} showCart={showCart} setShowCart={setShowCart} />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;

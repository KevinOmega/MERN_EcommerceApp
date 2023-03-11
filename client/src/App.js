import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Cart from "./features/cart/Cart";
// import ItemsList from "./features/Items/ItemsList";
import Error from "./Pages/Error";
import LogIn from "./features/auth/LogIn";
import SignIn from "./features/auth/SignIn";
import SingleItemPage from "./features/Items/SingleItemPage";
import Checkout from "./features/cart/Checkout";
import About from "./Pages/About/About";
import Home from "./Components/Home";
import SearchedItemList from "./features/Items/SearchedItemList";

//icons
import { CgSmileSad } from "react-icons/cg";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:itemName" element={<SearchedItemList />} />
        <Route path="/items/:itemID" element={<SingleItemPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<SignIn />} />
        <Route path="/cart/checkout" element={<Checkout />}></Route>
        <Route path="about" element={<About />} />
        <Route
          path="*"
          element={
            <Error message={"This page doesn't exist"} icon={<CgSmileSad />} />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import NavbarWed from "./components/NavbarWed/NavbarWed";

const App = () => {
  return (
    <>
      {/* {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>} */}
      {/* <NavbarWed /> */}
      <div className="app">
        {/* <MyNavbar setShowLogin={setShowLogin} /> */}
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="/cart" element={<Cart />} /> */}
          {/* <Route path="/placeorder" element={<PlaceOrder />} /> */}
        </Routes>
      </div>
      {/* <NavbarWed /> */}

      {/* <Footer /> */}
    </>
  );
};

export default App;

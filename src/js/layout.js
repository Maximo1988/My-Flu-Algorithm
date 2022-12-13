import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home";
import Myflu from "./vistas/flu";

const Layout = () => {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>

              <Route exact path="/" element={<Home></Home>}></Route>

              <Route exact path="/vistas/flu" element={<Myflu></Myflu>}></Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Layout;
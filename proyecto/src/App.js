import Navbar from "./Components/Navbar";
import React from "react";
import ItemListContainer from "./Components/Item/ItemListContainer";
import Error404 from "./Components/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../src/Components/ItemDetail/ItemDetailContainer";
import CartContextProvider from "./Components/Context/CartContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

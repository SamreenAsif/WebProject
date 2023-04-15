import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderContainer from "./container/HeaderContainer";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import CartPage from "./components/YourCart/CartPage";
import Checkout from "./components/Checkout/Checkout";
import SearchCourse from "./components/SearchCourse/SearchCourse";

export const CartItemContext = createContext();

function App() {
  const [coursesInCart, setCourseInCart] = useState([]);
  const handleAddToCart = (course) => {
    const isAlreadyInCart = coursesInCart.find((c) => c.id === course.id);

    if (!isAlreadyInCart) {
      setCourseInCart([...coursesInCart, course]);
      // alert("Item added: " + course.title);
    }

    // alert(course.id);
  };
  return (
    <>
      <CartItemContext.Provider value={{ coursesInCart, setCourseInCart }}>
        <Navigation />

        <Routes>
          {/* <Route index element={<SearchCourse />}/> */}
          <Route index element={<HeaderContainer />} />
          <Route
            path="/yourcart"
            element={<CartPage cartContent={coursesInCart} />}
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/SearchResult"
            element={<SearchCourse handleAddToCart={handleAddToCart} />}
          />
        </Routes>

        <Footer />
      </CartItemContext.Provider>
    </>
  );
}

export default App;

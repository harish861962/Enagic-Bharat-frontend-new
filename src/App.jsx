import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Products from "./Components/Products";
import Office from "./Components/Office";
import Footer from "./Components/Footer";
import ProductDetails from "./Components/ProductDetails";
import Contact from "./Components/Contact";
import Aboutus from "./Components/Aboutus";

function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <Products />
      <Contact/>
      <Office />
      <Footer />
      <Aboutus/>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route
        path="/contact"
        element={
          <>
            <Navbar />
            <Contact />
            <Footer />
          </>
        }
      />
      <Route
        path="/productcard/"
        element={
          <>
            <Navbar />
            <Products />
            <Footer />
          </>
        }
      />
      <Route
        path="/office"
        element={
          <>
            <Navbar />
            <Office />
            <Footer />
          </>
        }
      />

      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />
    </Routes>
  );
}

export default App;

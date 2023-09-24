import Hero from "./Hero"
import Mens from "./Mens"
import Navbar from "./Navbar";
import Womens from "./Womens";
import Juniors from "./Juniors.jsx";
import { Routes, Route } from "react-router-dom";
import Summercoll from "./Summercoll";
import Collection from "./Collection";
import Newarrival from "./Newarrival"
import Footer from "./Footer";
import Cart from "./Cart";
// Apny store(db) ko import kryngy gy
import store from "./Store";
// Provider import kryngy taky sb comp ko store provide kr sky
import { Provider } from "react-redux";
function App() {
  return (
    <>
    {/* Pury APP ko DB(Store) provide kr dia */}
      <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="Home" element={<Hero/>} />
        <Route path="Mens" element={<Mens />} />
        <Route path="Womens" element={<Womens />} />
        <Route path="Cart" element={<Cart />} />

        <Route path="Juniors" element={<Juniors />} />
        <Route path="SummerSale" element={<Summercoll />} />
        <Route path="SummerCollection" element={<Collection />} />
        <Route path="NewArrival" element={<Newarrival />} />
        <Route path="Cart" element={<Cart />} />
      </Routes>
      
      <Footer />
      </Provider>
    </>
  );
}

export default App;

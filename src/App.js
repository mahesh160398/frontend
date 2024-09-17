import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Order from "./components/Order";
import Build from "./components/Build";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ShoppingCart from "./components/ShoppingCart";
import Footer from "./components/Footer";
import PaymentSuccess from "./components/PaymentSuccess";
import appStore from "./store/appStore";
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={appStore}>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />}></Route>
        <Route path="/build" element={<Build />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/shopping" element={<ShoppingCart/>}></Route>
        <Route path="/success" element={<PaymentSuccess/>}></Route>
      </Routes>
      {/* <RouterProvider/> */}
      <Footer/>
    </div>
    </Provider>
  );
}


export default App;

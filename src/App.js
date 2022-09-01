import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import CustomerService from "./page/CustomerService";
import MyPage from "./page/MyPage";
import SignIn from "./page/SignIn";
import Register from "./components/Register";
import PrivateRoutes from "./components/PrivateRoutes";
import Header from "./page/Header";
import Footer from "./page/Footer";
import CartContainer from "./components/CartContainer";
import ProductScreen from "./screen/ProductScreen";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/notice" element={<CustomerService />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/mypage" element={<PrivateRoutes />}>
            <Route path="/mypage" element={<MyPage />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

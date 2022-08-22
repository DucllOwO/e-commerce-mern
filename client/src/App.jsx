import Announcement from "./components/Announcement/Announcement";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Register from "./pages/Register/Register";
import Cart from "./pages/Cart/Cart";
import { ContainerSVG } from "./Utils/styles/styles";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  PRODUCTS_CATEGORY_DYNAMIC_ROUTE,
  PRODUCT_DYNAMIC_ROUTE,
  CART_ROUTE,
  ALL_PRODUCTS_ROUTE
} from "./Utils/constant";
import { useSelector } from "react-redux";

const App = () => {
  const { user } = useSelector(state => state.user)
  
  return (
    <BrowserRouter>
      <ContainerSVG>
        <Announcement />
        <Navbar user={user}/>
        <Routes>
          <Route exact path={HOME_ROUTE} element={<Home />} />
          <Route path={PRODUCT_DYNAMIC_ROUTE} element={<Product />} />
          <Route
            path={PRODUCTS_CATEGORY_DYNAMIC_ROUTE}
            element={<Products />}
          />
          <Route path={ALL_PRODUCTS_ROUTE} element={<Products all={true} />} />
          <Route
            path={LOGIN_ROUTE}
            element={user ? <Navigate to={HOME_ROUTE} /> : <Login />}
          />
          <Route
            path={REGISTER_ROUTE}
            element={user ? <Navigate to={HOME_ROUTE} /> : <Register />}
          />
          <Route path={CART_ROUTE} element={<Cart />} />
        </Routes>
        <Footer />
      </ContainerSVG>
    </BrowserRouter>
  );
};

export default App;

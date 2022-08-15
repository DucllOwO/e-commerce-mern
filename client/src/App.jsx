import Announcement from "./components/Announcement/Announcement";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Register from './pages/Register/Register'
import Cart from './pages/Cart/Cart'
import { ContainerSVG } from "./Utils/styles/styles";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <BrowserRouter>
      <ContainerSVG>
        <Announcement />
        <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/product/:id' element={<Product />} />
            <Route exact path='/products/:category' element={<Products />} />
            <Route exact path='/login' element={user ? <Navigate to='/'/> : <Login />} />
            <Route exact path='/register' element={user ? <Navigate to='/' /> : <Register />}/>
            <Route exact path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </ContainerSVG>
    </BrowserRouter>
  );
  
};

export default App;
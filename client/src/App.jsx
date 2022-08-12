import Announcement from "./components/Announcement/Announcement";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import { ContainerSVG } from "./Utils/styles/styles";


const App = () => {
  return <ContainerSVG>
    <Announcement />
    <Navbar />
    <Login />
    <Footer />
  </ContainerSVG>;
};

export default App;
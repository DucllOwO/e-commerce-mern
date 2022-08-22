import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Container, Circle, Info, Icon, Image } from "./styles";
import { LinkRouter } from "../../../Utils/styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { viewProduct } from "../../../redux/userReducer";

const Product = ({ item }) => {
  const dispatch = useDispatch();
  const viewedProduct = useSelector(state => state.user.viewedProduct)
  

  const checkDuplicateProduct = () => {
    const product = viewedProduct.find(element => element._id === item._id);
    return product ? false : true;
  }

  const handleClick = (e) => {
    if (checkDuplicateProduct())
      dispatch(viewProduct(item))
  }
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <LinkRouter to={`/products/${item._id}`} onClick={handleClick}>
            <SearchOutlined />
          </LinkRouter>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;

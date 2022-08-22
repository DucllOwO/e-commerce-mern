import { ArrowBack } from "@mui/icons-material";
import {
  Container,
  Wrapper,
  Title,
  Top,
  Bottom,
  Info,
  Hr,
  Summary,
  SummaryItem,
  SummaryItemPrice,
  SummaryItemText,
  SummaryTitle,
} from "./styles";
import { TextButton, Button, LinkRouter } from "../../Utils/styles/styles";
import { useSelector } from "react-redux";
import CartProduct from "../../components/CartProduct/CartProduct";
import React from "react";
import { ALL_PRODUCTS_ROUTE } from '../../Utils/constant'

// COMPLETE OTHER FEATURE IN CART(BUTTON CLICK, TEXT BINDING, ETC...)

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  //const [products, setProducts] = useState({});
  let count = {}
  if (cart.products)
    cart.products.forEach((element) => {
      const key = JSON.stringify(element)
      count[key] = (count[key] || 0) + 1;
    });
  const productRender = Object.entries(count);

  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <LinkRouter to={ALL_PRODUCTS_ROUTE}>
            <TextButton variant="outlined" color="info" startIcon={<ArrowBack />}>
              CONTINUE SHOPPING
            </TextButton>
          </LinkRouter>
        </Top>
        <Bottom>
          <Info>
            {productRender.map(([key, value]) => {
              const product = JSON.parse(key);
              return (
                <React.Fragment key={product._id}>
                  <CartProduct
                    {...product}
                    amountDefault={value}
                  />
                  <Hr />
                </React.Fragment>
              );
            })}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <Button variant="contained" color="success">
              CHECKOUT NOW
            </Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;

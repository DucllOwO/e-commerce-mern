import { Add, Remove } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductSize,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
} from "./styles";

const CartProduct = ({ img, title, size, price, amountDefault }) => {
  const [totalPrice, setTotalPrice] = useState(price);
  const [amount, setAmount] = useState(amountDefault);

  useEffect(() => {
    setTotalPrice(price * amount)
  }, [amount, price])

  const handleIncreButton = (e) => setAmount(curAmount => curAmount + 1);
  const handleDecreButton = (e) => setAmount(curAmount => (curAmount - 1) < 0 ? 0 : curAmount-1);
  
  return (
    <Product>
      <ProductDetail>
        <Image src={img} />
        <Details>
          <ProductName>
            <b>Product:</b> {title}
          </ProductName>
          <ProductSize>
            <b>Size:</b> {size}
          </ProductSize>
        </Details>
      </ProductDetail>
      <PriceDetail>
        <ProductAmountContainer>
          <IconButton onClick={handleIncreButton}>
            <Add />
          </IconButton>
          <ProductAmount>{amount}</ProductAmount>
          <IconButton onClick={handleDecreButton}>
            <Remove />
          </IconButton>
        </ProductAmountContainer>
        <ProductPrice>$ {totalPrice}</ProductPrice>
      </PriceDetail>
    </Product>
  );
};

export default CartProduct;

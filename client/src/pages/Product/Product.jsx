import { Add, Remove } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../../api/api";
import {
  Container,
  Wrapper,
  ImgContainer,
  InfoContainer,
  Title,
  Desc,
  Price,
  Filter,
  FilterColor,
  FilterContainer,
  FilterTitle,
  FilterSize,
  Image,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Amount,
  Button,
} from "./styles";

const size = ["XS", "S", "M", "L", "XL"];

const Product = () => {
  const [product, setProduct] = useState({});
  const location = useLocation();
  //example: http://localhost:3000/product/62f9b9ce67bca50dee2d786d
  const productID = location.pathname.split("/")[2];
  console.log(productID)
  useEffect(() => {
    try {
      const getProduct = async () => {
        const product = await api.get(`/products/find/${productID}`);
        setProduct(product.data);
      };
      getProduct();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>{`$ ${product.price}`}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                {/* {product.size.map((siz) =>
                  size.includes(siz) ? (
                    <FilterSizeOption>{siz}</FilterSizeOption>
                  ) : (
                    <FilterSizeOption disabled>{siz}</FilterSizeOption>
                  )
                )} */}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../api/api";
import {
  Container,
  Wrapper,
  ImgContainer,
  InfoContainer,
  Title,
  Desc,
  Price,
  Filter,
  FilterContainer,
  FilterTitle,
  FilterSize,
  Image,
  FilterSizeOption,
  AddContainer,
  Button,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/cartRedux";
import { default as ProductCarousel } from "../../components/ProductList/Product/Product";
import AliceCarousel from "react-alice-carousel";
import { Typography } from "@mui/material";
import "react-alice-carousel/lib/alice-carousel.css";


const Product = () => {
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();
  const viewedProduct = useSelector((state) => state.user.viewedProduct);

  //example: http://localhost:3000/product/62f9b9ce67bca50dee2d786d
  const productID = location.pathname.split("/")[2];
  useEffect(() => {
    try {
      const getProduct = async () => {
        const res = await publicRequest.get(`/products/find/${productID}`);
        setProduct(res.data);
        setSize(res.data.size[0]);
      };
      getProduct();
    } catch (error) {
      console.log(error.message);
    }
  }, [productID]);

  const handleClick = (e) => {
    dispatch(
      addProduct({
        product: { ...product, size: size },
        price: product.price,
      })
    );
  };

  function handleSetSize(e) {
    setSize(e.target.value);
  }

  const responsive = {
    0: { items: 1 },
    70: { items: 2 },
    140: { items: 3 },
    210: { items: 4 },
  };

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
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={handleSetSize}>
                {product.size ? (
                  product.size.map((siz) => (
                    <FilterSizeOption key={siz}>{siz}</FilterSizeOption>
                  ))
                ) : (
                  <></>
                )}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Wrapper column>
        <Typography variant="h4" gutterBottom>
          Products you viewed
        </Typography>
        <AliceCarousel
          responsive={responsive}
          keyboardNavigation
          mouseTracking
          disableDotsControls
          disableButtonsControls
          controlsStrategy="alternate"
          items={viewedProduct.map((product) => {
            return (
              <ProductCarousel
                item={product}
                key={product._id}
                style={{ margin: "10px" }}
              />
            );
          })}
        />
      </Wrapper>
    </Container>
  );
};

// viewedProduct.map((product) => {
//   return (
//     <>
//       <div>
//         <ProductCarousel item={product} key={product._id} />
//       </div>
//     </>
//   );
// });

export default Product;

import { Stack } from "@mui/material";
import styled from "styled-components";
import { popularProducts } from "../../Utils/data";
import Product from "./Product/Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;



const ProductList = () => {
  return (
    <Stack>
      
      <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
      </Container>
    </Stack>
  );
};

export default ProductList;

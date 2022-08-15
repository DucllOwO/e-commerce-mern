import { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import styled from "styled-components";
import { popularProducts } from "../../Utils/data";
import Product from "./Product/Product";
import api from '../../api/api';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;



const ProductList = ({ category, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await api.get('/products/');
        setProducts(res.data);
      } catch (e) {
        console.log(e.message)
      }
      
    }
    getProducts();
  }, [category])

  return (
    <Stack>
      <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
      </Container>
    </Stack>
  );
};

export default ProductList;

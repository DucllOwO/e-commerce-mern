import { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import styled from "styled-components";
import Product from "./Product/Product";
import api from "../../api/api";

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
        const res = await api.get(
          category ? `/products?category=${category}` : "/products/"
        );
        setProducts(res.data);
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setProductsFilter(
        products.filter((product) => {
          return Object.entries(filter).every(([key, value]) => {
            return product[key].includes(value);
          });
        })
      );
  }, [category, filter, products]);

  useEffect(() => {
    switch (sort) {
      case "newest":
        setProductsFilter((curValue) => {
          return [...curValue].sort((a, b) => a.createdAt - b.createdAt);
        });
        break;
      case "price_asc":
        setProductsFilter((curValue) => {
          return [...curValue].sort((a, b) => a.price - b.price);
        });
        break;
      case "price_desc":
        setProductsFilter((curValue) => {
          return [...curValue].sort((a, b) => b.price - a.price);
        });
        break;
      default:
        break;
    }
  }, [sort]);

  return (
    <Stack>
      <Container>
        {category
          ? productsFilter.map((item) => <Product item={item} key={item._id} />)
          : products
              .map((item) => <Product item={item} key={item._id} />)
              .slice(0, 8)}
      </Container>
    </Stack>
  );
};

export default ProductList;

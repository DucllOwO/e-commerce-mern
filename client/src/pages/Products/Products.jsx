import { useState } from "react";
import { useLocation } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";
import {
  Container,
  Title,
  Filter,
  FilterContainer,
  FilterText,
  Select,
  Option,
} from "./styles";

const Products = ({ all }) => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("");
  const handleSetFilter = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  const handleSetSort = (e) => {
    setSort(e.target.value);
  };
  return (
    <Container>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleSetFilter} defaultValue='all'>
            <Option >
              all
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleSetFilter}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={handleSetSort}>
            <Option value="newest">Newest</Option>
            <Option value="price_asc">Price (asc)</Option>
            <Option value="price_desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ProductList category={category} filter={filter} sort={sort} />
    </Container>
  );
};

export default Products;

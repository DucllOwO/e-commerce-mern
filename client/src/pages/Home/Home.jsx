import React from 'react'
import styled from 'styled-components'
import Categories from '../../components/Categories/Categories'
import Newsletter from '../../components/Newsletter/Newsletter'
import ProductList from '../../components/ProductList/ProductList'
import Slider from '../../components/Slider/Slider'
import { ContainerSVG } from '../../Utils/styles/styles'

const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 60px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
`;

const Home = () => {

  return (
    <ContainerSVG>
      <Slider />
      <Categories />
      <Title>Bestseller</Title>
      <ProductList />
      <Newsletter />
    </ContainerSVG>
  )
}

export default Home
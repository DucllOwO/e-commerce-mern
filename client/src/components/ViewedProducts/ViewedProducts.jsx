import React from 'react'
import { Container, Stack, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import Product from '../ProductList/Product/Product'

const ViewedProducts = () => {
  const viewedProduct = useSelector(state => state.user.viewedProduct);
  return (
    <Container maxWidth>
      <Typography variant='h4' gutterBottom>Products you viewed</Typography>
      <Stack direction='row'>
        {viewedProduct.map((product) => {
          return <Product item={product} key={product._id} />
        })}
      </Stack>
    </Container>
  )
}

export default ViewedProducts
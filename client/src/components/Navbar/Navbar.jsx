import React from 'react'
import { ButtonCustom, CenterContainer, Container, Input, Language, LeftContainer, Logo, RightContainer, Search, Wrapper } from './styles.jsx'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import { IconButton } from '@mui/material';

const Navbar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <LeftContainer>
            <Language>EN</Language>
            <Search>
              <Input placeholder='Search clothes' />
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Search>
          </LeftContainer>
          <CenterContainer>
            <Logo> DUCK </Logo>
          </CenterContainer>
          <RightContainer>
            <Badge badgeContent={4} color='primary'>
              <ShoppingCartOutlined />
            </Badge>
            <ButtonCustom variant='contained'>Register</ButtonCustom>
            <ButtonCustom variant='outlined'>Sign in</ButtonCustom>
          </RightContainer>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Navbar
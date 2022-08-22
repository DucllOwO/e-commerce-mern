import React from 'react'
import { ButtonCustom, CenterContainer, Container, Input, Language, LeftContainer, Logo, RightContainer, Search, Wrapper } from './styles.jsx'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import { IconButton } from '@mui/material';
import { LinkRouter } from '../../Utils/styles/styles.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { HOME_ROUTE, CART_ROUTE, REGISTER_ROUTE, LOGIN_ROUTE } from '../../Utils/constant'
import { persistor } from '../../redux/store.js';
import { logoutUser } from '../../redux/userReducer.js';

const Navbar = ({user }) => {
  const quantity = useSelector(state => state.cart.quantity);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logoutUser())
    persistor.purge();
  }
  return (
    <div>
      <Container>
        <Wrapper>
          <LeftContainer>
            <Language>EN</Language>
            <Search>
              <Input placeholder="Search clothes" />
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Search>
          </LeftContainer>
          <CenterContainer>
            <LinkRouter to={HOME_ROUTE}>
              <Logo> DUCK </Logo>
            </LinkRouter>
          </CenterContainer>
          <RightContainer>
            <LinkRouter to={CART_ROUTE}>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </LinkRouter>
            {user ? (
                <ButtonCustom variant="contained" onClick={handleLogout}>Logout</ButtonCustom>
            ) : (
              <>
                <LinkRouter to={REGISTER_ROUTE}>
                  <ButtonCustom variant="contained">Register</ButtonCustom>
                </LinkRouter>
                <LinkRouter to={LOGIN_ROUTE}>
                  <ButtonCustom variant="outlined">Sign in</ButtonCustom>
                </LinkRouter>
              </>
            )}
          </RightContainer>
        </Wrapper>
      </Container>
    </div>
  );
}

export default Navbar
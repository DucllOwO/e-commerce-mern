import { HOME_ROUTE, REGISTER_ROUTE } from '../../Utils/constant';
import { ContainerSVG, Input, LinkRouter } from '../../Utils/styles/styles';
import { Container, Wrapper, Title, Form, Button, Error } from './styles'
import { useState } from 'react';
import { InputAdornment, IconButton } from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../redux/userReducer';

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.user.loading)

  const [usernameHandle, setUsernameHandle] = useState({
    username: '',
    isValid: true
  });
  const [passwordHandle, setPasswordHandle] = useState({
    password: '',
    isValid: true,
    showPassword: false
  });

  const handleUsername = (e) => setUsernameHandle({...usernameHandle, username: e.target.value, isValid: true});
  const handlePassword = (e) =>
    setPasswordHandle({
      ...passwordHandle,
      password: e.target.value,
      isValid: true,
    });
  const handleShowPassword = (e) => setPasswordHandle({...passwordHandle, showPassword: !passwordHandle.showPassword})

  const handleLogin = (e) => {
    e.preventDefault();
    
    !usernameHandle.username && setUsernameHandle({ ...usernameHandle, isValid: false })
    !passwordHandle.password && setPasswordHandle({ ...passwordHandle, isValid: false })

    fetchUser(usernameHandle.username, passwordHandle.password)(dispatch);
  }

  return (
    <ContainerSVG>
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            {usernameHandle.isValid ? (
              <Input
                label="Username"
                variant="outlined"
                value={usernameHandle.username}
                onChange={handleUsername}
              />
            ) : (
              <Input
                error
                helperText="Please input username"
                label="Username"
                variant="outlined"
                value={usernameHandle.username}
                onChange={handleUsername}
              />
            )}
            {passwordHandle.isValid ? (
              <Input
                type={passwordHandle.showPassword ? "text" : "password"}
                label="Password"
                value={passwordHandle.password}
                onChange={handlePassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleShowPassword}
                        edge="end"
                      >
                        {passwordHandle.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            ) : (
              <Input
                error
                helperText="Please input password"
                type={passwordHandle.showPassword ? "text" : "password"}
                label="Password"
                value={passwordHandle.password}
                onChange={handlePassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleShowPassword}
                        edge="end"
                      >
                        {passwordHandle.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
            <Button onClick={handleLogin}>LOGIN</Button>
            {loading === "error" ? (
              <Error>Username or password is incorrect</Error>
            ) : null}
            <LinkRouter to={HOME_ROUTE} style={{ textDecoration: "underline" }}>
              DO NOT YOU REMEMBER THE PASSWORD?
            </LinkRouter>
            <LinkRouter
              to={REGISTER_ROUTE}
              style={{ textDecoration: "underline" }}
            >
              CREATE A NEW ACCOUNT
            </LinkRouter>
          </Form>
        </Wrapper>
      </Container>
    </ContainerSVG>
  );
};

export default Login;

import { useState } from 'react';
import { ContainerSVG, Input } from '../../Utils/styles/styles';
import { Container, Wrapper, Title, Form, Agreement, Button, Error } from './styles'
import { useSelector, useDispatch } from 'react-redux';
import { userRegisterCreate } from '../../redux/userReducer';

const Register = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);
  const [usernameHandle, setUsernameHandle] = useState({
    username: "",
    isValid: true,
  });
  const [passwordHandle, setPasswordHandle] = useState({
    password: "",
    isValid: true,
  });
  const [addressHandle, setAddressHandle] = useState({
    address: "",
    isValid: true,
  });
  const [emailHandle, setEmailHandle] = useState({
    email: "",
    isValid: true,
  });

  const handleUsername = (e) =>
    setUsernameHandle({
      ...usernameHandle,
      username: e.target.value,
      isValid: true,
    });
  const handlePassword = (e) =>
    setPasswordHandle({
      ...passwordHandle,
      password: e.target.value,
      isValid: true,
    });
  const handleAddress = (e) =>
    setAddressHandle({
      ...addressHandle,
      address: e.target.value,
      isValid: true,
    });
  const handleEmail = (e) =>
    setEmailHandle({
      ...emailHandle,
      email: e.target.value,
      isValid: true,
    });
  
  const checkValidInput = () => {
    // check if input field is blank
    !usernameHandle.username &&
      setUsernameHandle({ ...usernameHandle, isValid: false });
    !passwordHandle.password &&
      setPasswordHandle({ ...passwordHandle, isValid: false });
    !emailHandle.email && setEmailHandle({ ...emailHandle, isValid: false });
    !addressHandle.address &&
      setAddressHandle({ ...addressHandle, isValid: false });
    
    if (!usernameHandle.username || !passwordHandle.password || !emailHandle.email || !addressHandle.address)
      return false;
    
    return true;
  }
  
  const handleRegister = (e) => {
    e.preventDefault();

    if (checkValidInput())
      userRegisterCreate({
        username: usernameHandle.username,
        passwordHandle: passwordHandle.password,
        email: emailHandle.email,
        address: addressHandle.address
      })(dispatch)
  };

  return (
    <ContainerSVG>
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
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
            {emailHandle.isValid ? (
              <Input
                label="Email"
                variant="outlined"
                value={emailHandle.username}
                onChange={handleEmail}
              />
            ) : (
              <Input
                error
                helperText="Please input email"
                label="Email"
                variant="outlined"
                value={emailHandle.username}
                onChange={handleEmail}
              />
            )}
            {passwordHandle.isValid ? (
              <Input
                type={"password"}
                label="Password"
                value={passwordHandle.password}
                onChange={handlePassword}
              />
            ) : (
              <Input
                error
                helperText="Please input password"
                type={"password"}
                label="Password"
                value={passwordHandle.password}
                onChange={handlePassword}
              />
            )}
            {addressHandle.isValid ? (
              <Input
                label="Address"
                variant="outlined"
                value={addressHandle.username}
                onChange={handleAddress}
              />
            ) : (
              <Input
                error
                helperText="Please input address"
                label="Address"
                variant="outlined"
                value={addressHandle.username}
                onChange={handleAddress}
              />
            )}
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button onClick={(e) => handleRegister(e)}>CREATE</Button>
            {loading === "error" ? (
              <Error>Something wrong please check again</Error>
            ) : null}
          </Form>
        </Wrapper>
      </Container>
    </ContainerSVG>
  );
};

export default Register;

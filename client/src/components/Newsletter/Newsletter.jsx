import { Send } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Container, Title, Desc, InputContainer, Input} from './styles'

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <IconButton>
          <Send />
        </IconButton>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;

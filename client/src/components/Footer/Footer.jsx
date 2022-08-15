import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
} from "@mui/icons-material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from "@mui/material";
import {Container, Logo, Left, Right, Desc,  SocialContainer, SocialIcon, Center, Title, List, ListItem, ContactItem, Payment} from './styles'



const Footer = () => {

  const handleOpenNewTab = (url) => {
    window.open(url, '_blank');
  }

  return (
    <Container>
      <Left>
        <Logo>DUCK</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <IconButton color='inherit' >
              <Facebook />
            </IconButton>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <IconButton color='inherit'>
              <Instagram /> 
            </IconButton>
          </SocialIcon>
          <SocialIcon color='212121'>
            <IconButton color='inherit' onClick={() => handleOpenNewTab('https://github.com/DucllOwO')}>
              <GitHubIcon />
            </IconButton>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> VietNam
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 234 56 789
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> nguyenduc147862@Gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;

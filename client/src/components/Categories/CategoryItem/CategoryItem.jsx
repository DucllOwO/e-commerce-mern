import { Button, LinkRouter } from '../../../Utils/styles/styles';
import { Container, Image, Info, Title } from './styles'

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <LinkRouter to={`/products/${item.category}`}>
          <Button variant='outlined'>SHOP NOW</Button>
        </LinkRouter>
      </Info>
    </Container>
  );
};

export default CategoryItem;

import { Button } from '../../../Utils/styles/styles';
import { Container, Image, Info, Title } from './styles'

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button variant='outlined'>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;

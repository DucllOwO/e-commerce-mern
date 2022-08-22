import { Button, LinkRouter } from '../../../Utils/styles/styles';
import { Container, Image, Info, Title } from './styles'
import { PRODUCT_CATEGORY_ROUTE } from '../../../Utils/constant'

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <LinkRouter to={`${PRODUCT_CATEGORY_ROUTE}${item.category}`}>
          <Button variant='outlined'>SHOP NOW</Button>
        </LinkRouter>
      </Info>
    </Container>
  );
};

export default CategoryItem;

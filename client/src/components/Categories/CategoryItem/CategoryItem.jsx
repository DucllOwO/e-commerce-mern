import { Button } from '../../../Utils/styles/styles';
import { Container, Image, Info, Title } from './styles'
import { Link } from 'react-router-dom';

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link to={`/products/${item.category}`} style={{ textDecoration: 'none'}}>
          <Button variant='outlined'>SHOP NOW</Button>
        </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;

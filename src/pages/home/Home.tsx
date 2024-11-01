import { Grid } from '@mui/material';
import { ProductCard } from './components/ProductCard';

const Home = () => {
  const products = [
    {
      id: 1,
      title: '상품 1',
      description: '상품 설명입니다.',
      price: 29000,
    },
    // ... 더 많은 상품
  ];

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <ProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;

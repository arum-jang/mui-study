import { Typography } from '@mui/material';
import { CustomCard } from '../../../components/common/card/CustomCard';

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
}

export const ProductCard = ({ title, description, price }: ProductCardProps) => {
  return (
    <CustomCard>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        ₩{price.toLocaleString()}
      </Typography>
    </CustomCard>
  );
};
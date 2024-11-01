import { Card, CardContent, CardProps, styled } from '@mui/material';

const StyledCard = styled(Card)<CardProps>(({ theme }) => ({
  borderRadius: '16px',
  boxShadow: theme.shadows[3],
  '&:hover': {
    boxShadow: theme.shadows[6],
    transform: 'translateY(-4px)',
    transition: 'all 0.3s ease-in-out',
  },
}));

interface CustomCardProps extends CardProps {
  children: React.ReactNode;
}

export const CustomCard = ({ children, ...props }: CustomCardProps) => {
  return (
    <StyledCard {...props}>
      <CardContent>{children}</CardContent>
    </StyledCard>
  );
};
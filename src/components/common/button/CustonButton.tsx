import { Button, ButtonProps, styled } from '@mui/material';

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  padding: '8px 16px',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const CustomButton = ({ children, ...props }: CustomButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

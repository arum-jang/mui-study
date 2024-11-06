import { useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import {
  StyledAppBar,
  StyledToolbar,
  NavContainer,
  LogoContainer,
  NavButton
} from './navigation.styles';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <StyledAppBar position="sticky">
      <StyledToolbar>
        <NavContainer maxWidth="lg">
          <LogoContainer>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                cursor: 'pointer'
              }}
            >
              LOGO
            </Typography>
          </LogoContainer>

          <nav>
            <NavButton
              component={RouterLink}
              to="/"
              className={isActive('/') ? 'active' : ''}
            >
              홈
            </NavButton>
            <NavButton
              component={RouterLink}
              to="/about"
              className={isActive('/about') ? 'active' : ''}
            >
              소개
            </NavButton>

            
            <NavButton
              variant="contained"
              component={RouterLink}
              to="/contact"
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              }}
            >
              문의하기
            </NavButton>
          </nav>
        </NavContainer>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navigation;
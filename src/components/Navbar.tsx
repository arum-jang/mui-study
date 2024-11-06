import { AppBar, Toolbar, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={RouterLink} to="/">
          홈
        </Button>
        <Button color="inherit" component={RouterLink} to="/about">
          소개
        </Button>
        <Button color="inherit" component={RouterLink} to="/contact">
          문의하기
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
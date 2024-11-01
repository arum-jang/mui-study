import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navigation from '../navigation/Navigation';

const Layout = () => {
  return (
    <Box>
      <Navigation />
      <Box component="main" sx={{ 
        p: { xs: 2, sm: 4 },
        maxWidth: 'lg',
        mx: 'auto',
        mt: 3
      }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
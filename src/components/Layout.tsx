import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Navigation from './navigation/Navigation';

const Layout = () => {
  return (
    <Box>
    <Navigation />
    <Box
      component="main"
      sx={{
        paddingTop: '64px',  // Navigation 높이만큼 상단 패딩 추가
        minHeight: 'calc(100vh - 64px)', // 최소 높이 설정
        width: '100%',
        maxWidth: '1200px', // 컨텐츠 최대 너비
        margin: '0 auto',   // 중앙 정렬
        padding: {
          xs: '24px 16px',  // 모바일
          sm: '32px 24px',  // 태블릿
          md: '40px 32px'   // 데스크탑
        }
      }}
    >
      <Outlet />
    </Box>
  </Box>
  );
};

export default Layout;
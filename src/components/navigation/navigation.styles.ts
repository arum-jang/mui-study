import { styled, alpha } from '@mui/material/styles';
import { AppBar, Button, Container, Toolbar } from '@mui/material';
import { ButtonProps } from '@mui/material';

// NavButton의 타입을 확장
interface NavButtonProps extends ButtonProps {
  component?: React.ElementType;
  to?: string;
}

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 2px 4px rgba(0,0,0,0.08)', // 미세한 그림자 추가
  position: 'fixed',  // 상단에 고정
  top: 0,            // 최상단에 위치
  left: 0,
  right: 0,
  width: '100%'
}));

export const StyledToolbar = styled(Toolbar)({
  minHeight: '64px', // 네비게이션 높이 고정
  padding: '0 24px', // 좌우 패딩
});

export const NavContainer = styled(Container)({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px', // 최대 너비 설정
  margin: '0 auto',   // 중앙 정렬
});

export const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

// NavButton 타입 수정
export const NavButton = styled(Button)<NavButtonProps>(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 500,
  fontSize: '1rem',
  padding: '8px 16px',
  marginLeft: '8px',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
  '&.active': {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
}));
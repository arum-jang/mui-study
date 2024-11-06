import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Checkbox,
  Divider,
} from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const TodoContainer = styled(Paper)(({ theme }) => ({
  maxWidth: '600px',
  margin: '0 auto',
  marginTop: theme.spacing(4),
  padding: theme.spacing(3),
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
}));

const TodoHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  textAlign: 'center',
}));

const TodoInputContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(3),
}));

const TodoList = () => {
  // 실제 기능 구현은 나중에 하고 UI만 먼저 구성
  const mockTodos = [
    { id: 1, text: '리액트 공부하기', completed: false },
    { id: 2, text: 'TypeScript 공부하기', completed: true },
    { id: 3, text: 'MUI 컴포넌트 스타일링 연습', completed: false },
  ];

  return (
    <TodoContainer elevation={0}>
      <TodoHeader>
        <Typography variant="h4" component="h1" gutterBottom>
          Todo List
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          오늘의 할 일을 관리해보세요
        </Typography>
      </TodoHeader>

      <TodoInputContainer>
        <TextField fullWidth size="small" placeholder="할 일을 입력하세요" variant="outlined" />
        <Button
          variant="contained"
          sx={{
            minWidth: '80px',
            textTransform: 'none',
          }}
        >
          추가
        </Button>
      </TodoInputContainer>

      <List>
        {mockTodos.map((todo, index) => (
          <Box key={todo.id}>
            <ListItem
              disableGutters
              secondaryAction={
                <Box>
                  <IconButton size="small">
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              }
            >
              <Checkbox edge="start" checked={todo.completed} sx={{ marginRight: 1 }} />
              <ListItemText
                primary={todo.text}
                sx={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? 'text.secondary' : 'text.primary',
                }}
              />
            </ListItem>
            {index < mockTodos.length - 1 && <Divider variant="fullWidth" component="li" />}
          </Box>
        ))}
      </List>

      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body2" color="text.secondary">
          총 {mockTodos.length}개의 할 일
        </Typography>
        <Typography variant="body2" color="text.secondary">
          완료: {mockTodos.filter((todo) => todo.completed).length}개
        </Typography>
      </Box>
    </TodoContainer>
  );
};

export default TodoList;

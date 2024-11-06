import { Box } from '@mui/material';
import TodoList from '../components/todo/TodoList';

const Home = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <TodoList />
    </Box>
  );
};

export default Home;
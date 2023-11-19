import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import theme from './theme/theme';
import HomeView from './views/HomeView';
import { QuizView } from './views/QuizView';

const router = createBrowserRouter([
  { path: '/', element: <HomeView /> },
  { path: '/quiz', element: <QuizView /> },
  // { path: 'dashboard', element: <Dashboard /> },
  // { path: '404', element: <NotFound /> },
  // { path: '*', element: <Navigate to="/404" /> },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import theme from './theme/theme';
import Home from './views/Home';
import Quiz from './views/quiz';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/quiz', element: <Quiz /> },
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

import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import theme from './theme/theme';
import Home from './views/Home';
import Survey from './views/Survey';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/survey', element: <Survey /> },
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

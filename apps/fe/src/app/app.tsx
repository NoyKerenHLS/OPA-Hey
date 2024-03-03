import { ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import AppRoutes from './routes';
import { theme } from '../styles/typography.style';

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;

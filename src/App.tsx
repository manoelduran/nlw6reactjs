import { BrowserRouter as Router } from 'react-router-dom';
import Rotas from './routes/index';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { GlobalStyle } from './styles/global';
import { AuthContextProvider } from './contexts/AuthContext';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <GlobalStyle />
        <Router>
          <Rotas />
        </Router>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;

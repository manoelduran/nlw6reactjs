import { BrowserRouter as Router } from 'react-router-dom';
import Rotas from './routes/index';
import {ThemeProvider} from 'styled-components';
import theme from './styles/theme';
import { GlobalStyle } from './styles/global';


function App() {

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <Router>
      <Rotas/>
    </Router>
    </ThemeProvider>
  );
}

export default App;

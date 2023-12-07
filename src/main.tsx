
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle'; 

interface Theme {
  colors: {
    heading: string;
    text: string;
    white: string;
    black: string;
    helper: string;
    bg: string;
    footer_bg: string;
    btn: string;
    border: string;
    hr: string;
    gradient: string;
    shadow: string;
  };
}

const theme: Theme = {
  colors: {
    heading: 'rgb(24 24 29)',
    text: 'rgb(24 24 29)',
    white: '#fff',
    black: '#000',
    helper: '#182ce0',
    bg: 'rgb(173, 216, 230)',
    footer_bg: '#8490ff',
    btn: 'rgb(98 84 243)',
    border: 'rgba(98,84,243,0.5)',
    hr: '#ffffff',
    gradient: 'linear-gradient(0deg,rgb(132 144 255) 0%, rgb(98 189 252)100%)',
    shadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

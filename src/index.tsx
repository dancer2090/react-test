import '@fontsource/noto-sans/300.css';
import '@fontsource/noto-sans/400.css';
import '@fontsource/noto-sans/500.css';
import '@fontsource/noto-sans/700.css';
import '@fontsource/noto-sans/900.css';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import App from 'app/App';
import store from 'app/store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from 'reportWebVitals';
import theme from 'themes/default';
import { ThemeProvider as StyledThemeProvider} from 'styled-components';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <StyledThemeProvider theme={theme}>
              <CssBaseline />
              <App />
            </StyledThemeProvider>
            
          </ThemeProvider>
        </StyledEngineProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

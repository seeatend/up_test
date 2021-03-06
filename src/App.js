import React from 'react';
import Router from './router'
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import theme from './theme';
import './app.scss'

const useStyles = makeStyles(theme => ({
  appContent: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appContent}>
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;

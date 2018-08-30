import React, { Component } from 'react';
import logo from './logo.svg';
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';

import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class App extends Component {
  render() {
    return (
        <Button variant="contained" color="primary">
          Super Secret Password
        </Button>  
    );
  }
}

export default withRoot(withStyles(styles)(App));

import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import { Link, TextField, Grid, Button, Typography, Radio, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#D9407C',
    },
  },
});

const styles = theme => ({
  container: {
    marginTop: "10rem",
  },
  button: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    fontWeight: "bold"
  },
  typography: {
    fontSize: '13.5px'
  },
  link: {
    fontWeight: "bold"
  }
});


class Main extends Component {
  state = {
    radioOption: '',
    email: '',
    senha: '',
    buttonDisabled: false
  };

  handleChange = (field) => e => {
    this.setState({ [field]: e.target.value });
  }

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Grid
          className={classes.container}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <img src={logo} alt="logo" width="200px" />
          <FormControl>
            <RadioGroup aria-label="position" name="position" value={this.state.radioOption} onChange={this.handleChange('radioOption')} row>
              <FormControlLabel
                value="medico"
                control={<Radio color="primary" />}
                label="Médico"
                labelPlacement="end"
              />
              <FormControlLabel
                value="paciente"
                control={<Radio color="primary" />}
                label="Paciente"
                labelPlacement="end"
              />
            </RadioGroup>
            <TextField
              label="E-mail"
              type="email"
              name="email"
              autoComplete="email"
              margin="dense"
              variant="outlined"
              onChange={this.handleChange('email')}
            />
            <TextField
              label="Senha"
              type="password"
              name="password"
              autoComplete="password"
              margin="dense"
              variant="outlined"
              onChange={this.handleChange('senha')}
            />
            <Button 
              className={classes.button} 
              color="primary" 
              variant="contained"
              disabled={this.state.buttonDisabled}
              onClick={() => {}}
            >
              Enviar
            </Button>
          </FormControl>
          <Typography className={classes.typography}>Não tem uma conta? <Link href="/cadastro" className={classes.link}>Registre-se</Link></Typography> 
        </Grid>
      </MuiThemeProvider>
    );
  }
}
export default withStyles(styles)(Main);
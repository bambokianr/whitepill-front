import React, { Component } from 'react';
import logo from '../../assets/logo_cadastro.png';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { Grid, BottomNavigation, BottomNavigationAction, FormControl, TextField, Button } from '@material-ui/core';
import { FaUserMd, FaUser } from 'react-icons/fa';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#D9407C',
    },
  }
});

const styles = theme => ({
  container: {
    marginTop: "100px"
  },
  bottomNavigation: {
    width: 400,
    height: 80,
    marginTop: "20px",
    borderRadius: '4px',
    border: "1.5px solid",
    color: "#D9407C"
  },
  textBottomNavigation: {
    fontSize: '30px',
    padding: '0 100px',
  },
  form: {
    width: '400px',
    marginTop: '10px'
  },
  button: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    fontWeight: "bold"
  },
});

class Cadastro extends Component {
  state = {
    registrationType: '',
    nome: '',
    cpf: 0,
    crm: 0,
    email: '',
    senha: '',
    buttonDisabled: false

  };

  handleChange = (field) => e => {
    this.setState({ [field]: e.target.value });
  }

  render() {
    console.log(this.state)
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.container}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <img src={logo} alt="logo" width="200px" />
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <BottomNavigation
                value={this.state.registrationType}
                onChange={(event, newValue) => this.setState({registrationType: newValue})}
                showLabels
                className={classes.bottomNavigation}
              >
                <BottomNavigationAction className={classes.textBottomNavigation} label="Médico" icon={<FaUserMd />}></BottomNavigationAction>
                <BottomNavigationAction className={classes.textBottomNavigation} label="Paciente" icon={<FaUser />}></BottomNavigationAction>
              </BottomNavigation>

            </Grid>
            {
              this.state.registrationType === 0 ? (
                <>
                <FormControl className={classes.form}>
                  <TextField
                    label="Nome completo"
                    type="text"
                    name="nome"
                    autoComplete="nome"
                    margin="dense"
                    variant="outlined"
                    onChange={this.handleChange('nome')}
                  />
                  <TextField
                    label="CPF"
                    type="number"
                    name="cpf"
                    autoComplete="cpf"
                    margin="dense"
                    variant="outlined"
                    onChange={this.handleChange('cpf')}
                  />
                  <TextField
                    label="CRM"
                    type="number"
                    name="crm"
                    autoComplete="crm"
                    margin="dense"
                    variant="outlined"
                    onChange={this.handleChange('crm')}
                  />
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
                    Cadastrar
                  </Button>
                </FormControl>
                </>
              ) : (<></>)
            }
            {
              this.state.registrationType === 1 ? (
                <FormControl className={classes.form}>
                  <TextField
                    label="Nome completo"
                    type="text"
                    name="nome"
                    autoComplete="nome"
                    margin="dense"
                    variant="outlined"
                    onChange={this.handleChange('nome')}
                  />
                  <TextField
                    label="CPF"
                    type="number"
                    name="cpf"
                    autoComplete="cpf"
                    margin="dense"
                    variant="outlined"
                    onChange={this.handleChange('cpf')}
                  />
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
                    Cadastrar
                  </Button>
                </FormControl>
              ) : (<></>)
            }
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default withStyles(styles)(Cadastro);

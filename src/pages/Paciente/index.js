import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { IconButton, Typography, Slider, TextField, Button, Grid, Badge, MenuItem, AppBar, Toolbar, Menu, Modal } from '@material-ui/core';
import { FaRegFrown, FaRegMeh, FaRegSmile, FaRegLaughBeam, FaRegSadCry, FaRegStickyNote } from 'react-icons/fa';
import MailIcon from '@material-ui/icons/Mail';
import { FaSignOutAlt } from 'react-icons/fa';
import logo from '../../assets/logobranco.png';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#D9407C',
    },
    secondary: {
      main: '#FFAB22'
    }
  }
});

const marks = [
  {
    value: 0,
    tag: 'Troste',
    label: <FaRegSadCry size={24} color="#FFAB22" />,
    label2: <FaRegSadCry size={80} color="#FFAB22" />,
  },
  {
    value: 25,
    tag: 'Semi troste',
    label: <FaRegFrown size={24} color="#FFAB22" />,
    label2: <FaRegFrown size={80} color="#FFAB22" />,
  },
  {
    value: 50,
    tag: 'De boa até',
    label: <FaRegMeh size={24} color="#FFAB22" />,
    label2: <FaRegMeh size={80} color="#FFAB22" />,
  },
  {
    value: 75,
    tag: 'OK',
    label: <FaRegSmile size={24} color="#FFAB22" />,
    label2: <FaRegSmile size={80} color="#FFAB22" />,
  },
  {
    value: 100,
    tag: 'Radiante',
    label: <FaRegLaughBeam size={24} color="#FFAB22" />,
    label2: <FaRegLaughBeam size={80} color="#FFAB22" />,
  },
];

const pills = [
  {
    name: 'Remédio 1',
    dosage: '1 comprimido 2 vezes ao dia'
  },
  {
    name: 'Remédio 2',
    dosage: '1 comprimido 3 vezes por semana'
  },
  {
    name: 'Remédio 23',
    dosage: '1 comprimido 32 vezes por semana'
  },
  {
    name: 'Remédio 4',
    dosage: '1 comprimido 32 vezes por semana'
  },
  {
    name: 'Remédio 12',
    dosage: '21 comprimido 3 vezes por semana'
  },
];

const doctors = [
  {
    name: 'Médico 1',
    phone: '(12) 24343-3433'
  },
  {
    name: 'Médico 2',
    phone: '(13) 24343-1232'
  },
];

const moods = [
  {
    date: 'TER',
    value: 75,
    description: 'Teste, testandooooo! aosdkaspo opakd'
  },
  {
    date: 'QUA',
    value: 75,
    description: ''
  },
  {
    date: 'QUI',
    value: 25,
    description: ''
  },
  {
    date: 'SEX',
    value: 50,
    description: 'aspod opakdsao posakappqwjrfoid posdkc'
  },
  {
    date: 'SAB',
    value: 75,
    description: ''
  },
  {
    date: 'DOM',
    value: 50,
    description: ''
  },
  {
    date: 'SEG',
    value: 0,
    description: ''
  },
  {
    date: 'TER',
    value: 100,
    description: 'sa[doslcp psokd'
  },
  {
    date: 'QUA',
    value: 100,
    description: 'asodk poaks'
  },
  {
    date: 'QUI',
    value: 75,
    description: 'asdkasd poaskd'
  },
]
// falta adicionar o mood diário ao objeto de moods

const styles = theme => ({
  cardBox: {
    width: 400,
    margin: '0 100px',
    marginTop: '60px',
    borderRadius: '4px',
    padding: '40px',
    background: 'rgba(255, 230, 200, 0.5)'
  },
  cardBox2: {
    width: 400,
    margin: '0 100px',
    marginTop: '100px',
    borderRadius: '4px',
    padding: '40px 20px',
    background: 'rgba(255, 230, 200, 0.5)'
  },
  cardBox3: {
    width: 400,
    margin: '0 100px',
    marginTop: '100px',
    borderRadius: '4px',
    padding: '40px 20px',
    // background: 'rgba(255, 230, 200, 0.5)'
  },
  cardBorderBox: {
    width: 400,
    margin: '100px',
    borderRadius: '4px',
    padding: '40px',
    border: "1px solid #FFAB22"
    // background: 'rgba(255, 230, 200, 0.5)'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '19px',
    color: '#999'
  },
  title2: {
    fontWeight: 'bold',
    fontSize: '19px',
    color: '#999',
    paddingLeft: '20px',
    paddingBottom: '15px'
  },
  title3: {
    fontWeight: 'bold',
    fontSize: '22px',
    color: '#FFAB22',
    paddingBottom: '10px',
  },
  subtitle: {
    fontSize: '13.5px',
    marginBottom: '20px'
  },
  description: {
    marginBottom: theme.spacing(3)
  },
  textField: {
    width: 322,
  },
  buttonText: {
    marginTop: "30px",
    fontWeight: "bold",
    // cursor: 'pointer'
  },
  buttonIcon: {
    padding: '10px 0'
  },
  buttonMood: {
    padding: '10px',
    minWidth: 0,
    border: '2px solid',
  },
  typography: {
    padding: theme.spacing(2),
  },
  calendar: {
    fontWeight: "bold",
    margin: '0 auto',
    width: '65%',
    color: '#FFAB22'
  },
  divMiddle: {
    paddingLeft: '10px'
  },
  popover: {
    boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.1), 0px 5px 5px -3px rgba(0,0,0,0.1), 0px 2px 2px -3px rgba(0,0,0,0.1)'
  }, 
  comments: {
    paddingLeft: '15px',
    fontSize: '16px',
    fontStyle: 'italic',
    color: '#999'
  }, 
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: '#FFF',
    borderRadius: '4px',
    padding: theme.spacing(2, 4, 3),
  },
  modal: {
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  titleModal: {
    color: "#999",
    marginBottom: '10px'
  },
  miniBox: {
    marginBottom: '15px'
  },
  titleMiniBox: {
    fontStyle: 'italic',
    color: '#D9407C'
  },
  subtitleMiniBox: {
    fontSize: '15px'
  },
  phone: {
    color: '#D9407C',
    marginRight: '5px',
    paddingTop: '3px'
  },
  bottomNavigation: {
    // width: 400,
    height: 80,
    marginTop: "20px",
    borderRadius: '4px',
    border: "1.5px solid",
    color: "#D9407C"
  },
  form: {
    width: '335px',
    marginTop: '10px'
    // margin: theme.spacing(1),
    // minWidth: 120,
  },
  marginInput: {
    marginTop: '10px'
  },
  calendar: {
    fontWeight: "bold",
    margin: '0 auto',
    width: '65%',
    color: '#FFAB22'
  },
  buttonMood: {
    padding: '10px',
    minWidth: 0,
    border: '2px solid',
  },
  typography: {
    padding: theme.spacing(2),
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  infos: {
    paddingLeft: '350px',
    // paddingTop: '40px',
     marginTop: '40px',
     paddingRight: '350px',

  },
  infoTitle: {
    fontWeight: 'bold',
    fontSize: '22px',
    color: '#D9407C'
  },
  infoSubtitle: {
    fontSize: '16px',
    color: '#7D7D7D',
  },
  infoSpan: {
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#D9407C'
  }
});

class Paciente extends Component {
  state = {
    filled: false,
    sliderValue: 75,
    comments: '',
    openModal: false,
    openPopover: false,
    badgetContent: 2,
    pillsType: '',
    namePill: '',
    dosagePill: '',
    logout: false,
    targetMessages: '',
    showMessages: false

  };

  valueLabelFormat = (value) => {
    return marks.findIndex(mark => mark.value === value) + 1;
  }

  handleChange = e => {
    this.setState({ sliderValue: (e.target.innerText-1)*25 });
  }

  handleTextChange = e => {
    this.setState({ comments: e.target.value });
  }

  handleClick = () => {
    this.setState({ filled: !this.state.filled })
  }

  handleClickPopover = (e) => {
    this.setState({ openPopover: true })
  }

  handleClosePopover = () => {
    this.setState({ openPopover: false })
  }

  handleOpen = () => {
    this.setState({ openModal: true })
  }

  handleClose = () => {
    this.setState({ openModal: false })
  }

  handleSave = () => {
    if (this.state.pillsType === 0) {
      pills.unshift({name: this.state.namePill, dosage: this.state.dosagePill});
    }
    if (this.state.pillsType === 1) {
      pills.map(pill => {
        if (pill.name === this.state.namePill) {
          pill.dosage = this.state.dosagePill
        }
      })
    }
    this.setState({openModal: false, namePill: '', dosagePill: '', pillsType: ''});
  }

  handleInputChange = (field) => e => {
    this.setState({ [field]: e.target.value });
  }

  handleLogout = () => {
    this.setState({ logout: true })
  }

  handleShowMessages = (e) => {
    this.setState({ targetMessages: e.currentTarget, showMessages: !this.state.showMessages  })
  }

  render() {
    const { classes } = this.props;
    
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <img src={logo} alt="logo" width="70px" />
            <div>
              <IconButton 
                color="inherit"
                onClick={this.handleShowMessages}
                aria-controls="simple-menu" aria-haspopup="true" 
              >
                <Badge badgeContent={this.state.badgetContent} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <Menu
                open={this.state.showMessages}
                id="simple-menu"
                keepMounted
                onClose={this.handleShowMessages}
                anchorEl={this.state.targetMessages}
              >
                <MenuItem>teste</MenuItem>
                <MenuItem>teste</MenuItem>
                <MenuItem>teste</MenuItem>
              </Menu>
              <IconButton
                onClick={this.handleLogout}
                color="secondary"
              >
                <FaSignOutAlt />
              </IconButton>
            </div>

          </Toolbar>
        </AppBar>

        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid
            container
            justify="space-between"
            alignItems="center"
            className={classes.infos}
          >
            <div>
              <Typography className={classes.infoTitle}>Geovanna Nobre</Typography>
              <Typography className={classes.infoSubtitle}>Médico responsável: <span className={classes.infoSpan}>Tana Nina da Silva</span></Typography>
            </div>  
            <Button
              // onClick={this.handleOpen}
            >
              <FaRegStickyNote color="#FFAB22" size={40} />
            </Button>
          </Grid>
            
            
          <Grid
            container
            direction="row"
            justify="center"
          >
            <div>
              <div className={classes.cardBox}>
                <Typography className={classes.title}>Como você está se sentindo hoje?</Typography>
                <Typography className={classes.subtitle}>25 de outubro de 2019</Typography>
                {this.state.filled ? (
                  <>
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    className={classes.div}
                  >
                    {marks.map(mark => mark.value === this.state.sliderValue && (<div>{mark.label2}</div>))}
                    <div className={classes.comments}>{this.state.comments}</div>
                  </Grid>
                  <Button 
                    className={classes.buttonText} 
                    color="primary" 
                    variant="contained"
                    onClick={this.handleClick}
                  >
                    Editar
                  </Button>
                  </>
                ) : (
                  <>
                    <Slider
                      color="primary"
                      defaultValue={this.state.sliderValue}
                      valueLabelFormat={this.valueLabelFormat}
                      onChangeCommitted={this.handleChange}
                      aria-labelledby="discrete-slider-restrict"
                      step={null}
                      valueLabelDisplay="auto"
                      marks={marks}
                    />
                    <TextField
                      // id="standard-multiline-flexible"
                      label="Conta mais..."
                      multiline
                      rowsMax="3"
                      value={this.state.comments}
                      onChange={this.handleTextChange}
                      className={classes.textField}
                      margin="normal"
                    />
                    <Button 
                      className={classes.buttonText} 
                      color="primary" 
                      variant="contained"
                      onClick={this.handleClick}
                    >
                      Salvar
                    </Button>
                  </>
                )}
              </div>
              <div className={classes.cardBox2}>
              <Typography className={classes.title2}>Histórico de Mood Diário</Typography>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                
                {/* FAZER OS BAGULHO AQUI */}
                {/* tem a lista de mood diário (data, mood e comentario) -> pegar os 7 ultimos */}
                {moods.slice(moods.length-7,moods.length+1).map((mood) => (
                  <div>
                    <Typography className={classes.calendar}>{mood.date}</Typography>
                    <Button 
                      // variant="contained" 
                      onClick={this.handleClickPopover} 
                      className={classes.buttonMood} 
                      color="primary"
                    >
                      {marks.map(mark => (
                        mark.value === mood.value ? (
                          <>{mark.label}</>
                        ) : (<></>)
                      ))}
                    </Button>
                    {/* <Popover
                      className={classes.popover}
                      // id={id}
                      open={this.state.openPopover}
                      onClose={this.handleClosePopover}
                      // anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                    >
                      <Typography className={classes.typography}>{mood.description}</Typography>
                    </Popover> */}

                  </div>
                ))}
                </Grid>
              </div>
            </div>
        
            <div className={classes.cardBox3}>
              <Typography className={classes.title3}>Medicamentos atuais</Typography>
              {
                pills.map(pill => (
                  <div className={classes.miniBox}>
                    <Typography className={classes.titleMiniBox}>{pill.name}</Typography>
                    <Typography className={classes.subtitleMiniBox}>{pill.dosage}</Typography>
                  </div>
                ))
              }
            </div>
          </Grid>
        </Grid>

      </MuiThemeProvider>
    );
  }
}
export default withStyles(styles)(Paciente);

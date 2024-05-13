// Container ->> Helps in making our container responsive to, containing all the components in our set width
// Toolbar
//Typography -->whenever we have to add text our something to material-ui 
//history hook --> whenever we click on the title(Crpto Hunter) it redirects us to the homepage.
// for redirecting back to the home page 
// const handleRedirect = () => {
//     window.location.href = '/'; 
//   };

// ContextApiHook  -->  is used because in this we want the selected currency example UDS or INR it should be available to the whole app
//contextApiHook --> To lift our state to the top of the app and to provide the state to whole app



import { AppBar, Container, MenuItem, Select, ThemeProvider, Toolbar, Typography, createTheme, makeStyles } from '@material-ui/core'
import React from 'react'
import { CryptoState } from '../CryptoContext';
// import {useHistory} from 'react-router-dom'

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const Header = () => {

  const classes = useStyles();

  // const history = useHistory();
  const handleRedirect = () => {
    window.location.href = '/'; // Redirect to homepage
  };
 
  const {currency, setCurrency} = CryptoState()
  // console.log(currency)

  const darkTheme = createTheme({
    palette:{
      primary:{
        main:"#fff",
      },
      type:"dark",
    }
  })

   

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color="transparent" position='static'>
       <Container> 
          <Toolbar>
             <Typography
              onClick={handleRedirect}
              className={classes.title}
              variant='h6'
             >
                Crypto Hunter
             </Typography>

             <Select 
              variant="outlined"
              style={{
                width:100,
                height:40,
                marginRight:15,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
             > 
               <MenuItem value={"USD"}>USD</MenuItem>
               <MenuItem value={"INR"}>INR</MenuItem>
             </Select>
          </Toolbar>
       </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header

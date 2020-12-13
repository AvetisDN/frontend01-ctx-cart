import React, {useState} from 'react'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import { red, teal, blueGrey, grey } from '@material-ui/core/colors'
import { AppBar, Button, Container, CssBaseline, Switch as Toggler, Toolbar, Typography, withStyles} from '@material-ui/core'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import CategoryGrid from './components/category/CategoryGrid'
import Product from './components/product/Product'
import Home from './components/home/Home'
import StoreProvider from './context/StoreProvider'
import { Brightness4, Brightness7 } from '@material-ui/icons'

const ThemeSwitcher = withStyles({
  switchBase: {
    color: blueGrey[50],
    '&$checked': {
      color: blueGrey[200],
    },
    '&$checked + $track': {
      backgroundColor: blueGrey[100],
    },
  },
  checked: {},
  track: {},
})(Toggler);

const styles = (theme) => ({
  main: {
    marginTop: theme.spacing(3)
  },
  togglerBox: {
      position: 'fixed',
      top: theme.spacing(1),
      right: theme.spacing(1),
      padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
  },
  btnLight: {
    color: blueGrey[50]
  },
  btnDark: {
    color: blueGrey[900]
  }
})

function App(props) {

  const {classes} = props

  const [themeType, setThemeType] = useState(localStorage.getItem('cart-app-theme') || 'light')

  const theme = createMuiTheme({
    palette: {
      type: themeType,
      primary: {
        main: themeType === 'light' ? teal[500] : teal[700]
      },
      secondary: {
        main: red[400]
      }
    }
  })

  const handleToggler = (event) => {
    setThemeType(event.target.checked ? 'dark' : 'light')
    localStorage.setItem('cart-app-theme', event.target.checked ? 'dark' : 'light')
  }
  const handleToggler2 = (event) => {
    setThemeType(themeType === 'light' ? 'dark' : 'light')
    localStorage.setItem('cart-app-theme', themeType === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <StoreProvider>
        <BrowserRouter>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='h5'>
                <Link to='/'>
                  <img src='/assets/images/logo.svg' height='60' alt='logo'/>
                </Link>
              </Typography>
              <div style={{flexGrow:1}}></div>
              <div>
                <ThemeSwitcher onClick={handleToggler} checked={themeType === 'dark'} />
                {themeType === 'dark' && 
                  <Button onClick={handleToggler2} className={classes.btnLight}>
                    <Brightness7/>
                  </Button>
                }
                {themeType === 'light' && 
                  <Button onClick={handleToggler2} className={classes.btnDark}>
                    <Brightness4/>
                  </Button>
                }
              </div>
            </Toolbar>
          </AppBar>
          <Container className={classes.main}>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/category/:slug' component={CategoryGrid}/>
                <Route exact path='/product/:slug' component={Product}/>
              </Switch>
          </Container>
        </BrowserRouter>
      </StoreProvider>
    </ThemeProvider>
  )
}

export default withStyles(styles)(App)
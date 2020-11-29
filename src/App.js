import React from 'react'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import { red, teal } from '@material-ui/core/colors'
import { Container, CssBaseline } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CategoryGrid from './components/category/CategoryGrid'
import Product from './components/product/Product'
import Home from './components/home/Home'
import StoreProvider from './context/StoreProvider'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[500]
    },
    secondary: {
      main: red[400]
    }
  }
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <StoreProvider>
        <Container>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/category/:slug' component={CategoryGrid}/>
              <Route exact path='/product/:slug' component={Product}/>
            </Switch>
          </BrowserRouter>
        </Container>
      </StoreProvider>
    </ThemeProvider>
  )
}

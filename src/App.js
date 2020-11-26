import React from 'react'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import { red, teal } from '@material-ui/core/colors'
import { CssBaseline } from '@material-ui/core'
import { BrowserRouter, Switch } from 'react-router-dom'

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
      <BrowserRouter>
        <Switch>

        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

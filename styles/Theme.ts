import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    primary: {
      main: '#F15025',
      light: '#ff5e33',
      dark: '#de471f',
      contrastText: '#FFFFFF'
    },
    secondary: {
      light: '#ededed',
      main: '#E6E8E6',
      dark: '#CED0CE',
      contrastText: '#191919'
    }
  }
})

export default Theme

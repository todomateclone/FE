import Router from "./shared/Router"
import { ThemeProvider } from "styled-components"
import theme from "./styles/theme"
import GlobalStyle from "./shared/GlobalStyle"
import "normalize.css"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}

export default App

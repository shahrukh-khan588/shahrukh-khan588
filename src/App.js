import React from "react"
import { ThemeProvider } from "@mui/material"
import theme from "./theme/index"
import Routes from "./routes"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  )
}

export default App

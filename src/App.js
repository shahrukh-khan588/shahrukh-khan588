import React from "react"
import { ThemeProvider } from "@mui/material"
import theme from "./theme/index"
import Routes from "./routes"
import { QueryClient, QueryClientProvider, useQuery } from "react-query"
const queryClient = new QueryClient()
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      </div>
    </ThemeProvider>
  )
}

export default App

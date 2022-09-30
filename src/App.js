import React from "react";
import theme from "./theme/index";
import { ToastProvider } from "./store/responseMessage";
import Routes from "./routes";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ThemeProvider } from "@mui/material/styles";
const queryClient = new QueryClient();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ToastProvider>
          <QueryClientProvider client={queryClient}>
            <Routes />
          </QueryClientProvider>
        </ToastProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;

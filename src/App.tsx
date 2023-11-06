import theme from "./theme/theme";
import { Content } from "./components/pages/Content";
import { ContactCompleted } from "./components/pages/ContactCompleted";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ContactConfirm } from "./components/pages/ContactConfirm";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/complete" element={<ContactCompleted />}></Route>
          <Route path="/" element={<Content />}></Route>
          <Route path="/confirm" element={<ContactConfirm />}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

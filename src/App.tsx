import theme from "./theme/theme";
import { Content } from "./components/Content";
import { ContactCompleted } from "./components/ContactCompleted";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />}></Route>
          <Route path="complete" element={<ContactCompleted />}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

import theme from "./theme/theme";
import { Contact } from "./components/pages/Contact";
import { ContactCompleted } from "./components/pages/ContactCompleted";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Reserve } from "./components/pages/Reserve";
import { ContactForm } from "./components/pages/ContactForm";
import OfficeDetail from "./components/pages/OfficeDetail";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/complete" element={<ContactCompleted />}></Route>
          {/* <Route path="/" element={<Contact />}></Route> */}
          <Route path="/" element={<ContactForm />}></Route>
          <Route path="/reserve" element={<Reserve />}></Route>
          <Route path="/office_detail" element={<OfficeDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

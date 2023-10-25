import "./App.css";
import { Content } from "./components/Content";
import { ContactCompleted } from "./components/ContactCompleted";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content />}></Route>
        <Route path="complete" element={<ContactCompleted />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

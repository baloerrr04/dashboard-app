import Dashboard from "./components/pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

export default App;

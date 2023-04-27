import "./App.css"

import { Route, Routes } from "react-router-dom"
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Stock from "./pages/Stock";
import Nav from "./components/Nav";
import stocks from "./data";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks/:symbol" element={<Stock stocks={stocks}/>} />
      </Routes>
    </div>
  );
}

export default App;

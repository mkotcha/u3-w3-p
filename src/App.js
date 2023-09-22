import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/SideBar";
import Player from "./components/Player";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Player />
    </BrowserRouter>
  );
}

export default App;

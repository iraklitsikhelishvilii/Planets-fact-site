import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Main from "./pages/Main/Main";
import Planets from "./pages/planets/Planets";
import Header from "./components/__organisms/header/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/planets/:planetName" element={<Planets />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

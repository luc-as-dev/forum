import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { ProvideAuth } from "./hooks/useAuth";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <ProvideAuth>
      <div className="App">
        <Navbar />
        <Routes className="app-routes">
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </ProvideAuth>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { ProvideAuth } from "./hooks/useAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import User from "./pages/User";

function App() {
  return (
    <ProvideAuth>
      <div className="App">
        <Navbar />
        <Routes className="app-routes">
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </ProvideAuth>
  );
}

export default App;

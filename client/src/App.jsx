import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { ProvideAuth } from "./hooks/useAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserId from "./pages/UserId";
import UserMe from "./pages/UserMe";
import Users from "./pages/Users";

function App() {
  return (
    <ProvideAuth>
      <div className="App">
        <Navbar />
        <Routes className="app-routes">
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/users">
            <Route path="" element={<Users />} />
            <Route path="me" element={<UserMe />} />
            <Route path=":id" element={<UserId />} />
          </Route>
        </Routes>
      </div>
    </ProvideAuth>
  );
}

export default App;

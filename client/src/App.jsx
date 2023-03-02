import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { ProvideAuth } from "./hooks/useAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserId from "./pages/UserId";
import UserMe from "./pages/UserMe";
import Users from "./pages/Users";

const NO_FOOTER = ["/login", "/signUp"];

function App() {
  const location = useLocation();

  return (
    <ProvideAuth>
      <div className="App">
        <Navbar />
        <div className="app-content">
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
          {!NO_FOOTER.includes(location.pathname) && <Footer />}
        </div>
      </div>
    </ProvideAuth>
  );
}

export default App;

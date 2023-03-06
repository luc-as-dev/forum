import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { ProvideAuth } from "./hooks/useAuth";
import Home from "./views/Home";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import UserId from "./views/UserId";
import UserMe from "./views/UserMe";
import Users from "./views/Users";

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

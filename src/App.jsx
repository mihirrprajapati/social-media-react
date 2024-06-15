import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./component/Home";
import LoginSignupPage from "./component/LoginSignUp/LoginSignUpPage";
import Cookies from "js-cookie";
import "./App.css";

const App = () => {
  const userToken = Cookies.get("userToken");

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={userToken ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<LoginSignupPage />} />
          {/* <Route path="/*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;

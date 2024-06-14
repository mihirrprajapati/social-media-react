import "./App.css";

import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignupPage from "./component/LoginSignUp/LoginSignUpPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<div>Page Not Found </div>} />
          <Route path="/login" element={<LoginSignupPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

import { useState } from "react";
import Login from "./Login";
import "./LoginSignUpPage.css";
import SignUp from "./SignUp";

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div className="row">
        <div className="col-6 d-flex justify-content-center align-items-center">
          {isLogin ? (
            <Login setIsLogin={setIsLogin} />
          ) : (
            <SignUp setIsLogin={setIsLogin} />
          )}
        </div>
        <div className="col-6 position-relative vh-100 overflow-hidden">
          <p className="app-name">ULook</p>
          <p className="app-desc">
            See the World through ULook: Your Social Lens
          </p>

          <div className="design-card-1"></div>
          <div className="design-card-2"></div>
          <div className="design-card-3"></div>
          <div className="design-card-4"></div>
          <div className="design-card-5"></div>
          <div className="design-card-6"></div>
        </div>
      </div>
    </>
  );
};

export default LoginSignupPage;

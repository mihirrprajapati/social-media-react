import { IoMdArrowRoundForward } from "react-icons/io";

const Login = ({ setIsLogin }) => {
  return (
    <>
      <div className="w-50">
        <h1 className="login-heading">Login</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <div>
          <input
            type="text"
            placeholder="Enter Username"
            className="my-3 p-2 fs-5 custom-input"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            className="my-3 p-2 fs-5 custom-input"
          />
        </div>
        <div>
          <button className="my-3 py-2 rounded-5 d-flex align-items-center login-btn">
            <span className="ms-5 me-2 fs-5">Login</span>{" "}
            <IoMdArrowRoundForward className="ms-3 me-2 fs-4" />
          </button>
        </div>
        <p>
          Don't have an Account?
          <span
            className="cursor-pointer ms-2 mt-2 new-text-color"
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </span>
        </p>
      </div>
    </>
  );
};

export default Login;

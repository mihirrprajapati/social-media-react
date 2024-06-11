import { IoMdArrowRoundForward } from "react-icons/io";

const SignUp = ({ setIsLogin }) => {
  return (
    <>
      <div className="w-50">
        <h1 className="login-heading">Sign Up</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            className="my-3 p-2 fs-5 custom-input"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter Email"
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
          <input
            type="password"
            placeholder="Enter Confirm Password"
            className="my-3 p-2 fs-5 custom-input"
          />
        </div>
        <div>
          <button className="my-3 py-2 rounded-5 d-flex align-items-center login-btn">
            <span className="ms-5 me-2 fs-5">Sign Up</span>{" "}
            <IoMdArrowRoundForward className="ms-3 me-2 fs-4" />
          </button>
        </div>
        <p>
          Already have an Account?
          <span
            className="cursor-pointer ms-2 mt-2 new-text-color"
            onClick={() => setIsLogin(true)}
          >
            Login
          </span>
        </p>
      </div>
    </>
  );
};

export default SignUp;

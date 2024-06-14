import { IoMdArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  pass: "",
};

const Login = ({ setIsLogin }) => {
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please Enter valid Email")
      .required("Please Enter Email"),
    pass: Yup.string()
      .min(6, "Password must be atleast 6 characters")
      .required("Please Enter Password"),
  });

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      navigate("/");
    },
  });

  return (
    <>
      <form className="w-50" onSubmit={formik.handleSubmit}>
        <h1 className="login-heading">Login</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <div>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="off"
            placeholder="Enter Email"
            className="my-3 p-2 fs-5 custom-input"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="input-error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <input
            type="password"
            name="pass"
            value={formik.values.pass}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="off"
            placeholder="Enter Password"
            className="my-3 p-2 fs-5 custom-input"
          />
          {formik.touched.pass && formik.errors.pass ? (
            <div className="input-error">{formik.errors.pass}</div>
          ) : null}
        </div>
        <div>
          <button
            type="submit"
            className="my-3 py-2 rounded-5 d-flex align-items-center login-btn"
          >
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
      </form>
    </>
  );
};

export default Login;

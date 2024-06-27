import { IoMdArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { useContext, useEffect } from "react";
import { MyContext } from "../../context/ContextProvider";

const initialValues = {
  email: "",
  pass: "",
};

const Login = ({ setIsLogin }) => {
  const { dataArr, setCurrentUserId, currentUserId } = useContext(MyContext);

  useEffect(() => {
    console.log(currentUserId);
  }, [currentUserId]);

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
    onSubmit: (values, error) => {
      const isEmailPresent = dataArr.filter(
        (val) => val.userEmail == values.email
      );

      if (isEmailPresent.length > 0) {
        if (isEmailPresent[0].userPassword == values.pass) {
          console.log(isEmailPresent);
          setCurrentUserId(isEmailPresent[0].userId);
          // Cookies.set("userToken", "HHHSSSSEE", { expires: 7 });
          navigate("/");
        } else {
          error.setErrors({ email: "", pass: "Invalid Password" });
        }
      } else {
        error.setErrors({ email: "Invalid Email", pass: "Invalid Password" });
      }
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

import { IoMdArrowRoundForward } from "react-icons/io";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  pass: "",
  cpass: "",
};

const SignUp = ({ setIsLogin }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    pass: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    cpass: Yup.string()
      .oneOf([Yup.ref("pass"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="w-50">
      <h1 className="login-heading">Sign Up</h1>
      <form onSubmit={formik.handleSubmit}>
        <p>Lorem ipsum dolor sit amet.</p>
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            autoComplete="off"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="my-3 p-2 fs-5 custom-input"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="input-error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            autoComplete="off"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="my-3 p-2 fs-5 custom-input"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="input-error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            name="pass"
            value={formik.values.pass}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="my-3 p-2 fs-5 custom-input"
          />
          {formik.touched.pass && formik.errors.pass ? (
            <div className="input-error">{formik.errors.pass}</div>
          ) : null}
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter Confirm Password"
            name="cpass"
            value={formik.values.cpass}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="my-3 p-2 fs-5 custom-input"
          />
          {formik.touched.cpass && formik.errors.cpass ? (
            <div className="input-error">{formik.errors.cpass}</div>
          ) : null}
        </div>
        <div>
          <button
            className="my-3 py-2 rounded-5 d-flex align-items-center login-btn"
            type="submit"
          >
            <span className="ms-5 me-2 fs-5">Sign Up</span>{" "}
            <IoMdArrowRoundForward className="ms-3 me-2 fs-4" />
          </button>
        </div>
      </form>
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
  );
};

export default SignUp;

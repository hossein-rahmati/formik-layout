import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  passwordConfirm: "",
};

const onSubmit = (values) => {};

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(6, "Name must be at least 6 characters"), // the length of the name must be at least 6 characters

  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),

  phone: yup
    .string()
    .required("Phone is required")
    .matches(/^[0-9]{11}$/, "Invalid phone number") //set a limit to the length of the phone number
    .nullable(),

  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),

  passwordConfirm: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"), // for checking if the password is the same
});

const SignUpForm = () => {
  const formik = useFormik({
    initialValues, //initial values of the form
    onSubmit, //function to run when the form is submitted
    validationSchema, //validation schema for the form
    validateOnMount: true, //validate the forms when the component is mounted
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {/* name section */}
        <div className="formControl">
          <label>Name</label>
          <input
            {...formik.getFieldProps("name")}
            placeholder="your nickName"
            type="text"
            name="name"
          />
          {formik.errors.name && formik.touched.name && (
            <div className="error">{formik.errors.name}</div>
          )}
        </div>

        {/* email section */}
        <div className="formControl">
          <label>Email</label>
          <input
            {...formik.getFieldProps("email")}
            placeholder="formik@ex.com"
            type="text"
            name="email"
          />
          {formik.errors.email && formik.touched.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>

        {/* number section */}
        <div className="formControl">
          <label>Phone Number</label>
          <input
            {...formik.getFieldProps("phone")}
            placeholder="(123) 456-7890"
            type="text"
            name="phone"
          />
          {formik.errors.phone && formik.touched.phone && (
            <div className="error">{formik.errors.phone}</div>
          )}
        </div>

        {/* password section */}
        <div className="formControl">
          <label>Password</label>
          <input
            {...formik.getFieldProps("password")}
            placeholder="enter your password"
            type="password"
            name="password"
          />
          {formik.errors.password && formik.touched.password && (
            <div className="error">{formik.errors.password}</div>
          )}
        </div>

        {/* password confirmation section */}
        <div className="formControl">
          <label>Password confirmation</label>
          <input
            {...formik.getFieldProps("passwordConfirm")}
            placeholder="enter your password again"
            type="password"
            name="passwordConfirm"
          />
          {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
            <div className="error">{formik.errors.passwordConfirm}</div>
          )}
        </div>

        <button
          disabled={!formik.isValid} //disable the button if the form had errors
          type="submit"
          className="px-6 py-2 bg-indigo-500 text-white w-full rounded-lg"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;

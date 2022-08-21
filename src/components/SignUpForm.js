import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = { name: "", email: "", password: "" };

const onSubmit = (values) => console.log(values);

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const SignUpForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="formControl">
          <label>Name</label>
          <input
            onChange={formik.handleChange}
            placeholder="name..."
            onBlur={formik.handleBlur}
            type="text"
            value={formik.values.name}
            name="name"
          />
          {formik.errors.name && formik.touched.name && (
            <div className="error">{formik.errors.name}</div>
          )}
        </div>

        <div className="formControl">
          <label>Email</label>
          <input
            onChange={formik.handleChange}
            placeholder="example@ex.com"
            onBlur={formik.handleBlur}
            type="t ext"
            value={formik.values.email}
            name="email"
          />
          {formik.errors.email && formik.touched.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>

        <div className="formControl">
          <label>Password</label>
          <input
            onChange={formik.handleChange}
            placeholder="********"
            onBlur={formik.handleBlur}
            type="text"
            value={formik.values.password}
            name="password"
          />
          {formik.errors.password && formik.touched.password && (
            <div className="error">{formik.errors.password}</div>
          )}
        </div>

        <button
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

import { useState } from "react";
import { useFormik } from "formik";

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
  });
  console.log(formik.values);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submited");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="formControl">
          <label>Name</label>
          <input
            onChange={formik.handleChange}
            placeholder="name..."
            type="text"
            value={formik.values.name}
            name="name"
          />
        </div>

        <div className="formControl">
          <label>Email</label>
          <input
            onChange={formik.handleChange}
            placeholder="example@ex.com"
            type="t ext"
            value={formik.values.email}
            name="email"
          />
        </div>

        <div className="formControl">
          <label>Password</label>
          <input
            onChange={formik.handleChange}
            placeholder="********"
            type="text"
            value={formik.values.password}
            name="password"
          />
        </div>

        <button className="px-6 py-2 bg-indigo-500 text-white w-full rounded-lg">
          submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;

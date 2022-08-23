import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import RadioInput from "./common/RadioInput";
import Input from "./common/Input";
import * as yup from "yup";

const radioOptions = [
  { label: "male", value: "0" },
  { label: "female", value: "1" },
];

const initialValues = {
  name: "",
  email: "",
  phone: "",
  gender: "",
  password: "",
  passwordConfirm: "",
};

const onSubmit = (values) => {};

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(4, "Name must be at least 6 characters"), // the length of the name must be at least 4 characters

  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),

  phone: yup
    .string()
    .required("Phone is required")
    .matches(/^[0-9]{11}$/, "Invalid phone number") //set a limit to the length of the phone number
    .nullable(),

  gender: yup.string().required("Gender is required"),

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
  const [formValue, setFormValue] = useState(null);

  const formik = useFormik({
    initialValues: formValue || initialValues, //initial values of the form
    onSubmit, //function to run when the form is submitted
    validationSchema, //validation schema for the form
    validateOnMount: true, //validate the forms when the component is mounted
    enableReinitialize: true, // load the last datas if it exists
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/user/1")
      .then((res) => setFormValue(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {/* name section */}
        <Input
          formik={formik}
          name="name"
          label="Name"
          placeHolder="Your name"
        />

        {/* email section */}
        <Input
          formik={formik}
          name="email"
          label="Email"
          placeHolder="test@ex.com"
        />

        {/*phone number section */}
        <Input
          formik={formik}
          name="phone"
          label="Phone Number"
          placeHolder="09xxxxxxxxx"
        />

        {/* password section */}
        <Input
          formik={formik}
          name="password"
          label="Password"
          type="password"
          placeHolder="*********"
        />

        {/* password confirmation section */}
        <Input
          formik={formik}
          name="passwordConfirm"
          label="Password Confirmation"
          type="password"
          placeHolder="enter password again"
        />

        {/* gender selection */}
        <RadioInput formik={formik} radioOptions={radioOptions} />

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

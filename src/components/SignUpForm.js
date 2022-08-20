import { useState } from "react";

const SignUpForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

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
            onChange={changeHandler}
            placeholder="name..."
            type="text"
            value={userData.name}
            name="name"
          />
        </div>

        <div className="formControl">
          <label>Email</label>
          <input
            onChange={changeHandler}
            placeholder="example@ex.com"
            type="t ext"
            value={userData.email}
            name="email"
          />
        </div>

        <div className="formControl">
          <label>Password</label>
          <input
            onChange={changeHandler}
            placeholder="********"
            type="text"
            value={userData.password}
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

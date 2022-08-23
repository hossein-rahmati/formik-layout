const Input = ({ label, name, placeHolder, formik, type = "text" }) => {
  return (
    <div className="formControl">
      <label>{label}</label>
      <input
        {...formik.getFieldProps(name)}
        type={type}
        id={name}
        name={name}
        placeholder={placeHolder}
      />
      {formik.errors[name] &&
        formik.touched[name] && ( // with bracket notation we can make objects dynamic
          <div className="error">{formik.errors[name]}</div>
        )}
    </div>
  );
};

export default Input;

const SelectInput = ({ selectOptions, formik, name }) => {
  return (
    <div className="formControl">
      <select name={name} {...formik.getFieldProps(name)}>
        {selectOptions.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {formik.errors[name] &&
        formik.touched[name] && ( // with bracket notation we can make objects dynamic
          <div className="error">{formik.errors[name]}</div>
        )}
    </div>
  );
};

export default SelectInput;

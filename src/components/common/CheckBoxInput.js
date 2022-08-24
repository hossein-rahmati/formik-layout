const CheckBoxInput = ({ formik, checkBoxOptions, name }) => {
  return (
    <div className="flex mb-6">
      {checkBoxOptions.map((item) => {
        return (
          <div className="flex items-center mr-4" key={item.value}>
            <input
              type="checkbox"
              id={item.value}
              name={name}
              value={item.value}
              onChange={formik.handleChange}
              checked={formik.values[name].includes(item.value)}
              className="w-4 h-4 mr-1"
            />
            <label htmlFor={item.value}>{item.label}</label>
            {formik.errors[name] &&
              formik.touched[name] && ( // with bracket notation we can make objects dynamic
                <div className="error">{formik.errors[name]}</div>
              )}
          </div>
        );
      })}
    </div>
  );
};

export default CheckBoxInput;

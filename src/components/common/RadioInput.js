const RadioInput = ({ formik, radioOptions }) => {
  return (
    <div className="flex mb-6">
      {radioOptions.map((item) => {
        return (
          <div className="flex items-center mr-4" key={item.value}>
            <input
              type="radio"
              id={item.value}
              name="gender"
              value={item.value}
              onChange={formik.handleChange}
              checked={formik.values.gender === item.value}
              className="w-4 h-4 mr-1"
            />
            <label htmlFor={item.value}>{item.label}</label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioInput;

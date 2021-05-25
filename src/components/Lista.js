import React from "react";

const Lista = ({
  id,

  name,

  options,

  title,

  handleChange,

  selectedValue
}) => (
  <div>
    <h1>{title}</h1>

    <select id={id} name={name} onChange={handleChange} value={selectedValue}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Lista;

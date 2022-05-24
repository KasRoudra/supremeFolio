import React from "react";
import "./Input.css";

const Input = ({ name, type, placeholder, height, onChange }) => {
  return (
    <div className="mb-1 col-md-12 input-main">
      <div className="form-floating">
        <textarea
          required
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          type={type}
          className="form-control form-control-lg"
          style={{ height: height }}
        ></textarea>
        <label></label>
      </div>
    </div>
  );
};

export default Input;

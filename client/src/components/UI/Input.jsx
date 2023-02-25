import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef(
  ({ id, label, type, value, onChange, onBlur, min, max }, ref) => {
    return (
      <div className={classes["input-container"]}>
        <label htmlFor={id}>{label}</label>
        <input
          ref={ref}
          id={id}
          type={type}
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
  }
);

export default Input;

import React from "react";
import classes from "./Input.module.css";

export default function Input({
  id,
  label,
  type,
  value,
  onChange,
  onBlur,
  min,
  max,
}) {
  return (
    <div className={classes["input-container"]}>
      <label htmlFor={id}>{label}</label>
      <input
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

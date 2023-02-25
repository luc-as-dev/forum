import classes from "./Button.module.css";

export default function Button({ type, onClick, children, className }) {
  const mergedClassName = `${classes["button"]} ${!className ? "" : className}`;
  return (
    <button type={type} className={mergedClassName} onClick={onClick}>
      {children}
    </button>
  );
}

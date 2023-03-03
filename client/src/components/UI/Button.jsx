import classes from "./Button.module.css";

export default function Button({
  type,
  onClick,
  children,
  className,
  outlined,
}) {
  const mergedClassName = `${
    classes[!outlined ? "button" : "button-outlined"]
  } ${!className ? "" : className}`;
  return (
    <button type={type} className={mergedClassName} onClick={onClick}>
      {children}
    </button>
  );
}

const MyButton = (props) => {
  return <button className="btn" {...props} />;
};

export default MyButton;

// Or

const MyButtonNotReplacedClassName = ({ className, ...props }) => {
  let newClassName = ["btn", className].join(" ");

  return <button className={newClassName} {...props} />;
};

export { MyButtonNotReplacedClassName };

const MyButtonUsedToUndefined = ({ className, ...props }) => {
  let classNames = ["btn", className].filter(Boolean).join(" ").trim();

  return <button className={classNames} {...props} />;
};

export { MyButtonUsedToUndefined }
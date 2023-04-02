const Button = (props) => {
  return (
    <button type="submit" onClick={props.onClick} className={props.className}>
      {props.children}
    </button>
  );
};

export default Button;

import "./button.css";

type PrimaryButtonProps = {
  buttonText?: string;
  onClick?: any;
  iconLeft?: string;
  iconRight?: string;
  className?: string;
};

// Here onClick prop is a function which defines what to do on a button click
// If onClick is not passed it takes a function which does nothing
const PrimaryButton = ({
  buttonText = "",
  onClick = () => {},
  iconLeft = "",
  iconRight = "",
  className = "",
}: PrimaryButtonProps) => {
  return (
    <button
      className={`button button-primary flex-center-horizontal-vertical ${className}`}
      onClick={onClick}
    >
      {iconLeft !== "" ? iconLeft : <></>}
      {buttonText}
      {iconRight !== "" ? iconRight : <></>}
    </button>
  );
};

export default PrimaryButton;

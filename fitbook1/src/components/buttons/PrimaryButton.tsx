import "./button.css";

type PrimaryButtonProps = {
  buttonText?: string;
  onClick?: any;
  iconLeft?: string;
  iconRight?: string;
  className?: string;
  isDisabled?: boolean;
};

// Here onClick prop is a function which defines what to do on a button click
// If onClick is not passed it takes a function which does nothing
const PrimaryButton = ({
  buttonText = "",
  onClick = () => {},
  iconLeft = "",
  iconRight = "",
  className = "",
  isDisabled = false,
}: PrimaryButtonProps) => {
  return (
    <button
      className={`button button-primary flex-center-horizontal-vertical ${className} ${
        isDisabled && "button-primary-disabled"
      }`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {iconLeft !== "" ? iconLeft : <></>}
      {buttonText}
      {iconRight !== "" ? iconRight : <></>}
    </button>
  );
};

export default PrimaryButton;

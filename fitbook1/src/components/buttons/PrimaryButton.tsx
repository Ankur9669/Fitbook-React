import "./button.css";
import { ThreeDots } from "react-loader-spinner";

type PrimaryButtonProps = {
  buttonText?: string;
  onClick?: any;
  iconLeft?: any;
  iconRight?: any;
  className?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
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
  isLoading = false,
}: PrimaryButtonProps) => {
  return (
    <button
      className={`button button-primary flex-center-horizontal-vertical ${className} ${
        isDisabled && "button-primary-disabled"
      }`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {isLoading && (
        <div className="button-loader">
          <ThreeDots
            color={"var(--color-white)"}
            width={"50px"}
            height={"20px"}
          />
        </div>
      )}
      {iconLeft !== "" ? (
        <span className={`button-icon ${isLoading && "button-loading"}`}>
          {iconLeft()}
        </span>
      ) : (
        <></>
      )}
      <span className={`${isLoading && "button-loading"}`}>{buttonText}</span>
      {iconRight !== "" ? (
        <span className={`button-icon ${isLoading && "button-loading"}`}>
          {iconRight()}
        </span>
      ) : (
        <></>
      )}
    </button>
  );
};

export default PrimaryButton;

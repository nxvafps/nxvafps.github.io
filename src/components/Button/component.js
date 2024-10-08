import React from "react";
import StyledButton from "./styles";
import PropTypes from "prop-types";

const Button = ({
  height,
  width,
  fontSize,
  margin,
  text,
  onClick,
  disabled,
}) => {
  return (
    <StyledButton
      height={height}
      width={width}
      fontSize={fontSize}
      margin={margin}
      onClick={onClick}
      disabled={disabled} // Pass the disabled prop to StyledButton
    >
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  fontSize: PropTypes.string,
  margin: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool, // Define the disabled prop type
};

Button.defaultProps = {
  disabled: false, // Set default value for disabled prop
};

export default Button;

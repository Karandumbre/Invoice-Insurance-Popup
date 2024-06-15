import PropTypes from "prop-types";
// styles
import { IconWrapperStyled } from "./styled";

export const Icon = ({ name, handleClick, size, color, className }) => {
  return (
    <IconWrapperStyled
      className={`fa ${name} ${className}`}
      size={size}
      onClick={handleClick}
      color={color}
    />
  );
};

Icon.defaultProps = {
  size: "20px",
  color: "black",
};

Icon.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

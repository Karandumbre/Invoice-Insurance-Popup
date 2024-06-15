import PropTypes from "prop-types";

// styles
import {
  ButtonStyled,
  ButtonLabelStyled,
  ButtonLeftIconStyled,
} from "./styled";

// components
import { Icon } from "../../index";

export const Button = (props) => {
  const { children, onClick, leftIconconfig } = props;

  const handleClick = (evt) => {
    if (onClick) {
      evt && evt.stopPropagation();
      onClick(evt);
    }
  };

  return (
    <ButtonStyled {...props} onClick={handleClick}>
      {!!leftIconconfig && (
        <ButtonLeftIconStyled>
          <Icon {...leftIconconfig} />
        </ButtonLeftIconStyled>
      )}
      <ButtonLabelStyled>{children}</ButtonLabelStyled>
    </ButtonStyled>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  leftIconconfig: PropTypes.object,
};

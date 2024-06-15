// vendor
import PropTypes from "prop-types";

// styles
import {
  InputComponentWrapperStyled,
  InputStyled,
  InputErrorMessageStyled,
  InputLabelStyled,
  InputLabelChildrenStyled,
} from "./styled";

export const Input = (props) => {
  const {
    type = "text",
    placeholder,
    name,
    value,
    onChange,
    error,
    label,
    children,
  } = props;
  const newType = type.split(":")[1];

  return (
    <InputComponentWrapperStyled>
      {label && <InputLabelStyled for={name}>{label}</InputLabelStyled>}
      <InputLabelChildrenStyled>
        <InputStyled
          isError={error}
          type={newType || type}
          placeholder={placeholder}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          autoComplete="off"
        />
        {children}
      </InputLabelChildrenStyled>

      {error && <InputErrorMessageStyled>{error}</InputErrorMessageStyled>}
    </InputComponentWrapperStyled>
  );
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  value: "",
  error: "",
  label: "",
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
};

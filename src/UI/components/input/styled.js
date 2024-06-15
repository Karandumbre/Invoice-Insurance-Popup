import styled from "styled-components";
import baseTheme from "../../../themes";

export const InputComponentWrapperStyled = styled.div`
  margin-bottom: 1.5rem;
`;

export const InputStyled = styled.input`
  font-family: ${baseTheme.bodyFont};
  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
  max-width: 100%;
  width: 100%;
  background-color: ${baseTheme.colors.light};
  border-color: ${(props) =>
    props.isError
      ? baseTheme.colors.inputErrorBorderColor
      : baseTheme.colors.inputBorderColor};
  border-radius: ${baseTheme.spaces.space_4};
  color: ${baseTheme.colors.primaryText};
`;

export const InputErrorMessageStyled = styled.div`
  font-family: ${baseTheme.bodyFont};
  margin-top: 5px;
  color: ${baseTheme.colors.errorHelperTextColor};
`;

export const InputLabelStyled = styled.label`
  font-family: ${baseTheme.bodyFont};
  color: ${baseTheme.colors.primaryText};
  margin-bottom: ${baseTheme.spaces.space_10};
  display: inline-block;
`;

export const InputLabelChildrenStyled = styled.div`
  display: flex;
`;

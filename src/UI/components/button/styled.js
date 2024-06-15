import styled, { css } from "styled-components";
import baseTheme from "../../../themes";

const primary = css`
  background-color: ${baseTheme.colors.primary};
  color: ${baseTheme.colors.light};
  min-height: 40px;
  min-width: 74px;
  ${(props) =>
    props.showFullWidth &&
    css`
      width: 100%;
    `};
`;

export const ButtonStyled = styled.button`
  padding: 0 20px;
  outline: none !important;
  position: relative;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  white-space: normal;
  border-radius: 6px;
  font-size: 14px;
  font-family: ${baseTheme.headingFont};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  box-sizing: border-box;

  ${(props) => {
    switch (props.type) {
      case "primary":
        return primary;

      default:
        return primary;
    }
  }};
`;

export const ButtonLabelStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonLeftIconStyled = styled.span`
  display: inline;
  float: left;
`;

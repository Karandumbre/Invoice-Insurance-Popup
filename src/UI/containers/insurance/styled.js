import styled from "styled-components";
import baseTheme from "../../../themes";

export const ModalHeaderImageStyled = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
`;

export const StepTitleStyled = styled.div`
  font-family: ${baseTheme.headingFont};
  color: ${baseTheme.colors.primary};
  font-size: 20px;
  line-height 26px;
  margin-bottom: 10px;
`;

export const StepSubTitleStyled = styled.div`
  font-family: ${baseTheme.bodyFont};
  color: ${baseTheme.colors.primaryText};
  font-size: 16px;
  line-height 22px;
  margin-bottom: 15px;
`;

export const Step2QuoteStyled = styled.div`
  height: 355px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${baseTheme.headingFont};
  color: ${baseTheme.colors.primary};
  font-size: 44px;
  line-height 50px;
`;

export const Step1MergeInputStyled = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: auto auto;
`;

export const Step1CheckboxWrapperStyled = styled.div`
  display: flex;
  input[type="checkbox"] {
    width: 20px;
  }
`;

export const Step1CheckboxTextStyled = styled.div`
  font-family: ${baseTheme.headingFont};
  color: ${baseTheme.colors.primaryText};
  font-size: 14px;
  line-height 22px;
  margin-bottom: 10px;
  margin-left: 15px;
  position: relative;
  top: 5px;
`;

export const CheckImageStyled = styled.img`
  height: 70px;
  width: 70px;
  margin-bottom: 40px;
`;

export const Step3WrapperStyled = styled.div`
  padding: 40px;
`;

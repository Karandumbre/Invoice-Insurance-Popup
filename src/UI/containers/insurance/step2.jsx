// vendor
import PropTypes from "prop-types";

// styles
import {
  StepTitleStyled,
  StepSubTitleStyled,
  Step2QuoteStyled,
} from "./styled";

// components
import { Button } from "../../index";

export const Step2 = ({ totalQuotationValue, handleClick }) => {
  const leftIconconfig = {
    name: "fa-lock",
    color: "white",
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handleClick && handleClick();
  };

  return (
    <div>
      <StepTitleStyled>Credit Insurance Quote</StepTitleStyled>
      <StepSubTitleStyled>
        Credit Insurance premium for insuring this invoice for this debtor:
      </StepSubTitleStyled>
      <Step2QuoteStyled>€{totalQuotationValue}</Step2QuoteStyled>
      <Button
        onClick={submitHandler}
        leftIconconfig={leftIconconfig}
        showFullWidth
      >
        <span>Continue</span>
      </Button>
    </div>
  );
};

Step2.propTypes = {
  totalQuotationValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  handleClick: PropTypes.func,
};

import Check from "../../../assets/images/check.png";

// styles
import {
  StepTitleStyled,
  StepSubTitleStyled,
  CheckImageStyled,
  Step3WrapperStyled,
} from "./styled";

export const Step3 = () => {
  return (
    <Step3WrapperStyled>
      <CheckImageStyled src={Check} alt="Header Icon" />
      <StepTitleStyled>
        Thank you for purchasing the credit insurance
      </StepTitleStyled>
      <StepSubTitleStyled>
        Once your payment has been proceed successfully, we will email you the
        insurance policy.
      </StepSubTitleStyled>
      <StepSubTitleStyled>
        [you can view the insurance policy from your accout page]
      </StepSubTitleStyled>
    </Step3WrapperStyled>
  );
};

Step3.displayName = "Step3";

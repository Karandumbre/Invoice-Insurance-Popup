// vendor
import { useState } from "react";
// components
import { Button, Modal } from "../../index";
import { Step1 } from "./step1";
import { Step2 } from "./step2";
import { Step3 } from "./step3";

// styles
import { ModalHeaderImageStyled } from "./styled";

// assets
import { Box } from "@mui/material";

export const Insurance = () => {
  const [OpenModal, setOpenModal] = useState(false);
  const [step, setStep] = useState(1);
  const [totalQuotationValue, setTotalQuotationValue] = useState(0);

  const toggleModal = () => {
    setOpenModal(!OpenModal);
  };

  const changeStep = (next = 1) => {
    setStep(step + next);
  };

  const handleFormChange = (values) => {
    console.log(values);
    setTotalQuotationValue(12.12);
    changeStep();
  };

  return (
    <Box textAlign="center">
      <Button onClick={toggleModal}>
        <span>Get Credit Insurance</span>
      </Button>

      <Modal modalOpen={OpenModal} handleClose={toggleModal}>
        {step !== 3 && (
          <a href="https://evermont.netlify.app/">
            <ModalHeaderImageStyled
              src="https://yralcgckodgemrozhvhn.supabase.co/storage/v1/object/public/websites-data/logo/RZjkxce9SMhxVVwX"
              alt="Header Icon"
            />
          </a>
        )}
        {step === 1 && <Step1 handleClick={handleFormChange} />}
        {step === 2 && (
          <Step2
            handleClick={changeStep}
            totalQuotationValue={totalQuotationValue}
          />
        )}
        {step === 3 && <Step3 handleClick={() => setOpenModal(!OpenModal)} />}
      </Modal>
    </Box>
  );
};

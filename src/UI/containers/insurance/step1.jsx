// vendor
import { useState } from "react";
import PropTypes from "prop-types";

// styles
import {
  StepTitleStyled,
  StepSubTitleStyled,
  Step1MergeInputStyled,
  Step1CheckboxWrapperStyled,
  Step1CheckboxTextStyled,
} from "./styled";

// components
import { Input, Button } from "../../index";

// utils
import { validate } from "../../../utils";

export const Step1 = ({ handleClick }) => {
  const leftIconconfig = {
    name: "fa-lock",
    color: "white",
  };

  const [formData, setFormData] = useState({
    invoiceValue: {
      value: "",
      required: true,
      type: "input",
      placeholder: "€",
      label: "Invoice value:",
      name: "invoiceValue",
    },
    invoiceNumber: {
      value: "",
      required: true,
      type: "input",
      placeholder: "#",
      label: "Invoice Number:",
      name: "invoiceNumber",
    },
    debtor: {
      value: "",
      required: true,
      type: "input",
      placeholder: "Name",
      label: "Your Debtor:",
      name: "debtor",
      fullname: true,
    },
    invoiceIssueDate: {
      value: "",
      type: "input:date",
      label: "Invoice Issue Date:",
      placeholder: "DD-MM-YYYY",
      name: "invoiceIssueDate",
    },
    invoiceDueDate: {
      value: "",
      type: "input:date",
      label: "Invoice Due Date:",
      placeholder: "DD-MM-YYYY",
      name: "invoiceDueDate",
    },
    termsAndCondition: {
      value: "",
      checked: false,
      type: "input:checkbox",
      name: "termsAndCondition",
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();

    for (let key in formData) {
      if (formData[key].error && formData[key].error !== "") {
        formData[key].error = "";
      }
    }
    const newErrors = validate(formData);
    const newData = { ...formData };

    for (let key in newErrors) {
      newData[key].error = newErrors[key];
    }

    setFormData(newData);
    if (Object.keys(newErrors).length === 0) {
      const data = new FormData();
      data.append("invoiceValue", formData.invoiceValue.value);
      data.append("invoiceNumber", formData.invoiceNumber.value);
      data.append("debtor", formData.debtor.value);
      data.append("invoiceIssueDate", formData.invoiceIssueDate.value);
      data.append("invoiceDueDate", formData.invoiceDueDate.value);

      handleClick?.(formData);
    }
  };

  const changeHandler = (e) => {
    e.persist();
    if (e.target.type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: {
          ...prev[e.target.name],
          checked: e.target.checked,
          value: e.target.checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: {
          ...prev[e.target.name],
          value: e.target.value,
        },
      }));
    }
  };

  return (
    <div>
      <StepTitleStyled>Get Credit Insurance</StepTitleStyled>
      <StepSubTitleStyled>
        To purchase credit insurance for your invoice, fill out the form below
        to start the process
      </StepSubTitleStyled>
      <Step1MergeInputStyled>
        <Input {...formData.invoiceValue} onChange={changeHandler} />
        <Input {...formData.invoiceNumber} onChange={changeHandler} />
      </Step1MergeInputStyled>
      <Input {...formData.debtor} onChange={changeHandler} />
      <Step1MergeInputStyled>
        <Input {...formData.invoiceIssueDate} onChange={changeHandler} />
        <Input {...formData.invoiceDueDate} onChange={changeHandler} />
      </Step1MergeInputStyled>
      <Step1CheckboxWrapperStyled>
        <Input {...formData.termsAndCondition} onChange={changeHandler}>
          <Step1CheckboxTextStyled>
            By clicking on &quot;Calculate Quote&quot;, I agree to
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of use
            </a>
            ,{" "}
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policies
            </a>
            , and{" "}
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Choices
            </a>
          </Step1CheckboxTextStyled>
        </Input>
      </Step1CheckboxWrapperStyled>
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

Step1.displayName = "Step1";
Step1.propTypes = {
  handleClick: PropTypes.func,
};

import styled from "styled-components";
import Modal from "react-modal";

// utils
import { hexToRGB } from "../../../utils";

// constants
import { isMobile } from "../../../constants/device";

export const ModalStyled = styled(Modal)`
  min-height: 550px;
  max-height: 750px;
  min-width: 600px;
  max-width: 850px;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: ${({ theme, clearPadding }) =>
    clearPadding ? 0 : theme.spaces.space_30};
  transform: translate(-50%, -50%);
  border-radius: 2px;
  outline: none;
  background: ${(props) => props.theme.colors.light};
  box-shadow: 0 7px 14px 0 ${(props) => hexToRGB(props.theme.colors.dark, 0.2)};

  @media only screen and ${isMobile} {
    height: 100vh;
    max-height: none;
    width: 100%;
    min-width: 100vw;
  }

  .close-icon {
    position: absolute;
    top: 30px;
    right: 30px;
  }
`;

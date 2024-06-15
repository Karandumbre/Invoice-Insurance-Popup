// vendor
import { Box, Dialog } from "@mui/material";
import PropTypes from "prop-types";

// components
import { Title } from "./title";

const MIN_MODAL_MAX_WIDTH = "500px";

export const Modal = (props) => {
  const {
    title,
    titleIcon,
    children,
    modalOpen,
    handleClose,
    maxWidth,
    boxPosition,
  } = props;

  return (
    <Dialog
      sx={{
        "& .MuiPaper-root": {
          maxWidth: MIN_MODAL_MAX_WIDTH,
        },
      }}
      fullWidth={true}
      open={modalOpen}
      maxWidth={maxWidth}
      onClose={handleClose}
    >
      <Box position={boxPosition || "initial"}>
        <Title onClose={handleClose}>
          {titleIcon}
          {title}
        </Title>
        <Box padding="0 32px">{children}</Box>
      </Box>
    </Dialog>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  titleIcon: PropTypes.node,
  children: PropTypes.node.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  boxPosition: PropTypes.oneOf([
    "relative",
    "initial",
    "absolute",
    "fixed",
    "sticky",
    "static",
    "inherit",
  ]),
};

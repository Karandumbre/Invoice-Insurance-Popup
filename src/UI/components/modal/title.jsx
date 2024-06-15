// vendor
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

// icons
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

// styles
import { grey } from "../../../themes/colors";

export const Title = ({ children, onClose }) => {
  return (
    <Box sx={{ margin: 0, padding: "32px 32px 0" }}>
      <Typography
        fontSize="20px"
        fontWeight={600}
        lineHeight="32px"
        color={grey[700]}
      >
        {children}
      </Typography>
      {onClose ? (
        <Box
          sx={{
            position: "absolute",
            top: "32px",
            right: "32px",
            height: "12px",
            width: "12px",
            cursor: "pointer",
          }}
          data-sdet="modal-close"
          onClick={onClose}
        >
          <CloseRoundedIcon />
        </Box>
      ) : null}
    </Box>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
};

// vendors
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import baseTheme from "./index";

import { blue, green, red, yellow, WHITE, grey } from "./colors";

const muiTheme = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: blue[400],
      contrastText: WHITE,
    },
    secondary: {
      main: grey[700],
    },
    error: {
      light: red[100],
      main: red[500],
    },
    warning: {
      light: yellow[100],
      main: yellow[500],
    },
    info: {
      light: blue[100],
      main: blue[400],
    },
    success: {
      light: green[100],
      main: green[500],
    },
  },
  typography: {
    h1: {
      fontSize: 24,
      color: grey[700],
      fontFamily: "Space Grotesk",
    },
    h2: {
      fontSize: 22,
      fontFamily: "Space Grotesk",
    },
    h3: {
      fontSize: 20,
      color: grey[700],
      fontFamily: "Space Grotesk",
    },
    h4: {
      fontSize: 18,
    },
    body1: {
      fontSize: 14,
      fontFamily: "Inter",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: baseTheme.bodyFont,
          "&.MuiButton-outlinedSecondary": {
            borderColor: grey[300],
            textTransform: "none",
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          fontFamily: baseTheme.bodyFont,
          minWidth: "1040px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: `1px solid ${grey[300]} !important`,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: grey[700],
          "&.MuiTypography-h3": {
            svg: {
              position: "relative",
              top: "5px",
              marginRight: "10px",
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: baseTheme.bodyFont,
          verticalAlign: "initial",
          "&.MuiTablePagination-root": {
            border: "none",
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: grey[300],
          "&.Mui-checked": {
            color: blue[400],
          },
        },
      },
    },
  },
});

export const CustomThemeProvider = (props) => {
  return <ThemeProvider theme={muiTheme}>{props.children}</ThemeProvider>;
};

CustomThemeProvider.propTypes = {
  children: PropTypes.node,
};

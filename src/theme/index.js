import React, { useState } from "react";
import {
  alpha,
  createTheme,
  CssBaseline,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material";
import { useContext } from "react";
import { useEffect } from "react";


const COMPONENTS = {
  MuiInputLabel: {
    defaultProps: {
      sx: {
        fontSize: "16px",
        top: 2,
      },
    },
  },
};

const PRIMARY = {
  main: "#CB904D",
  dark: "#93EA71",
  light: "#C9F4B8",
};
const SECONDARY = {
  main: "#ED315D",
  dark: "#F58EA6",
  light: "#FAC7D3",
};

const TYPOGRAPHY = {
  body1: {
    fontFamily: "EB Garamond",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "120%",
    // letterSpacing:
  },
  body2: {
    fontFamily: "EB Garamond",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "110%",
    // letterSpacing:
  },
  body3: {
    fontFamily: "EB Garamond",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "25px",
    lineHeight: "150%",
    // letterSpacing:
  },
  body4: {
    fontFamily: "EB Garamond",
    fontStyle: "italic",
    fontWeight: 400,
    fontSize: "32px",
    lineHeight: "120%",
    // letterSpacing:
  },
  button: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "13px",
    lineHeight: "120%",
    // letterSpacing:
  },
  h1: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "23px",
    lineHeight: "120%",
    // letterSpacing:
  },
  h2: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "32px",
    lineHeight: "120%",
    // letterSpacing:
  },
  h3: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "45px",
    lineHeight: "120%",
    // letterSpacing:
  },
  h4: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "64px",
    lineHeight: "120%",
    // letterSpacing:
  },
  h6: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "90px",
    lineHeight: "120%",
    // letterSpacing:
  },

  h7: {
    fontFamily: "EB Garamond",
    fontStyle: "italic",
    fontWeight: 400,
    fontSize: "32px",
    lineHeight: "120%",
    // letterSpacing:
  },
  h8: {
    fontFamily: "EB Garamond",
    fontStyle: "italic",
    fontWeight: 400,
    fontSize: "60px",
    lineHeight: "120%",
    // letterSpacing:
  },
};

function ThemeProvider({ children }) {
  const theme = {
    components: COMPONENTS,
    palette: {
      primary: PRIMARY,
      secondary: SECONDARY,
      background: {
        default: "#fafafa",
        paper: "../public/white-paper-texture.jpg",
      },
    },
    typography: TYPOGRAPHY,
  };

  const mainTheme = createTheme(theme);
  // theme.components = customizeComponents(theme);

  return (
    <MUIThemeProvider theme={mainTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default ThemeProvider;
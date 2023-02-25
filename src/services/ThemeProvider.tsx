import React from "react";
import { MantineProvider } from "@mantine/core";
import theme from "../styles/mantineDesignSystem.js";

interface Props {
  children?: React.ReactNode;
}

function ThemeProvider({ children }: Props) {
  return (
    <MantineProvider
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
      theme={theme}
    >
      {children}
    </MantineProvider>
  );
}

export default ThemeProvider;

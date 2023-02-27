import { MantineThemeOverride } from "@mantine/core";

// Define spacing
const spacing = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  32: "8rem",
  40: "10rem",
  48: "12rem",
  56: "14rem",
  64: "16rem",
};

// Define border radius
const borderRadius = {
  none: "0",
  sm: "0.125rem",
  md: "0.375rem",
  lg: "0.5rem",
};

// Define font sizes
const fontSize = {
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
};

// Define font weights
const fontWeight = {
  normal: "400",
  semibold: "600",
  bold: "700",
};

// Define letter spacing
const letterSpacing = {
  tighter: "-0.05em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
};

// Define theme
const theme = {
  colorScheme: "dark",
  primaryShade: 6,
  primaryColor: "blue",
  headings: {
    fontFamily: "Pally, sans-serif",
  },
  fontFamily: "Poppins, sans-serif",
  spacing,
  borderRadius,
  fontSize,
  fontWeight,
  letterSpacing,
  colors: {
    // background: ["#f6f6f6"],
    // foreground: ["#27292d"],
    neutral: [
      // "#fafafa",
      "#f5f5f6",
      "#e7e8e9",
      "#d6d7d9",
      "#a4a5a8",
      "#737578",
      "#545659",
      "#414246",
      "#27292d",
      "#16181c",
    ],
    blue: [
      // "#2e3749",
      "#f9fafb",
      "#eeeff1",
      "#dcdee2",
      "#c5c9cf",
      "#9096a3",
      "#606676",
      "#414a5a",
      "#2e3749",
      "#1c2534",
      "#121827",
    ],
    purple: [
      // "#4e4b86",
      "#fafafa",
      "#f4f4f6",
      "#e4e4ea",
      "#d4d4de",
      "#9f9fbf",
      "#6e6e98",
      "#4e4b86",
      "#3d3d56",
      "#27272c",
      "#18181b",
    ],
    yellow: [
      // "#fcfde9",
      "#fdffc7",
      "#fefb8e",
      "#ffef44",
      "#fad900",
      "#e9bd00",
      "#c89100",
      "#9f6700",
      "#835002",
      "#6f410b",
    ],
  },
  // Define other design elements
  boxShadow: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  },
  zIndex: {
    0: 0,
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
  },
  opacity: {
    0: "0",
    25: "0.25",
    50: "0.5",
    75: "0.75",
    100: "1",
  },
  // Define colors (omitted as per your request)
} as MantineThemeOverride;

export default theme;

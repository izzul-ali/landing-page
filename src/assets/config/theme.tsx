import { createTheme } from "@mui/material"

export const theme = createTheme({
  typography: {
    fontFamily: "var(--font-inter), sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
})

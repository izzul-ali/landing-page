"use client"

import React, { ReactNode } from "react"
import { ThemeProvider } from "@mui/material"
import { theme } from "@/assets/config/theme"

interface Props {
  children: ReactNode
}

export default function ContainerProvider({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

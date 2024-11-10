"use client"

import React from "react"
import { FormLabel, OutlinedInput, OutlinedInputProps } from "@mui/material"

interface Props extends OutlinedInputProps {
  label?: string
  placeholder?: string
  htmlFor?: string
}

export default function InputForm({
  label,
  placeholder,
  htmlFor,
  ...props
}: Readonly<Props>) {
  return (
    <div className={`flex flex-col w-full gap-[6px]`}>
      <FormLabel
        htmlFor={htmlFor}
        sx={{ color: "#bbbcc0", fontSize: 14, fontWeight: 500 }}
      >
        {label}
      </FormLabel>
      <OutlinedInput
        {...props}
        placeholder={placeholder}
        inputProps={{
          name: htmlFor,
          id: htmlFor,
        }}
        sx={{
          borderWidth: "1px",
          backgroundColor: "transparent",
          borderRadius: "8px",
          color: "white",

          "& .MuiInputBase-input": {
            fontSize: 14,
            color: "#bbbcc0",
            padding: "10px 14px",
            "::placeholder": {
              color: "#bbbcc0",
            },
          },

          [`& #${htmlFor}`]: {
            padding: "8px 14px",
            fontSize: 14,
            color: "#bbbcc0",
          },
        }}
      />
    </div>
  )
}

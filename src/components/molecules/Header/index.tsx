import React from "react"
import { IconButton } from "@mui/material"
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined"
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined"
import PhoneCallbackOutlinedIcon from "@mui/icons-material/PhoneCallbackOutlined"

export default function Header() {
  return (
    <header className="bg-secondaryBackground">
      <div className="w-full py-3 px-5 md:w-[75%] lg:w-[65%] mx-auto flex items-center justify-between">
        <h1 className="text-white font-bold text-xl">LOGO</h1>

        <div className="flex items-center gap-2">
          <IconButton>
            <ErrorOutlineOutlinedIcon className="text-gold" />
          </IconButton>
          <IconButton>
            <DescriptionOutlinedIcon className="text-gold" />
          </IconButton>
          <IconButton>
            <PhoneCallbackOutlinedIcon className="text-gold" />
          </IconButton>
        </div>
      </div>
    </header>
  )
}

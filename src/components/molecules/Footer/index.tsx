import React, { ReactNode } from "react"
import { IconButton } from "@mui/material"
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined"
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined"
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"

export default function Footer() {
  const _renderButton = (
    icon: ReactNode,
    title: string,
    isActive?: boolean
  ) => {
    return (
      <IconButton className="flex flex-col gap-1 items-center justify-center">
        {icon}
        <span className={`${isActive ? "text-gold" : "text-gray-300"} text-sm`}>
          {title}
        </span>
      </IconButton>
    )
  }
  return (
    <footer className="bg-secondaryBackground">
      <div className="w-full py-3 px-5 md:w-[75%] lg:w-[65%] mx-auto flex items-center justify-between">
        <div className="flex items-center justify-around w-full gap-5">
          {_renderButton(
            <CottageOutlinedIcon className="text-gray-300" />,
            "Home"
          )}
          {_renderButton(
            <DirectionsCarOutlinedIcon className="text-gray-300" />,
            "Vehicle"
          )}
          {_renderButton(
            <AutoStoriesOutlinedIcon className="text-gray-300" />,
            "Booking"
          )}
          {_renderButton(
            <AccountCircleOutlinedIcon className="text-gold" />,
            "Profile",
            true
          )}
        </div>
      </div>
    </footer>
  )
}

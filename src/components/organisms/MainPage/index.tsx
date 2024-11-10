import React from "react"
import InputForm from "@/components/atoms/InputForm"
import { Button } from "@mui/material"

export default function MainPage() {
  return (
    <div className="w-full h-full overflow-auto px-5 md:w-[50%] lg:w-[40%] lg:max-w-[500px] mx-auto flex flex-col items-center justify-center">
      <h1 className="font-bold text-4xl">LOGO</h1>

      <div className="w-full my-10">
        <h2 className="text-left text-gray-200 font-medium text-2xl ">
          Get Started Now!
        </h2>
      </div>

      <div className="w-full space-y-5">
        <InputForm
          label="Email"
          type="email"
          placeholder="example@gmail.com"
          className="w-full"
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="********"
          className="w-full"
        />

        <div className="w-full flex justify-end">
          <button className="outline-none text-gold font-semibold text-sm">
            Forgot Password
          </button>
        </div>

        <Button className="text-sm text-white bg-gold w-full py-3 rounded-xl">
          Login
        </Button>

        <div className="w-full flex gap-1 justify-center font-semibold text-sm">
          <span className="text-gray-300">Don't have an account?</span>
          <button className="outline-none text-gold">Create New Account</button>
        </div>
      </div>
    </div>
  )
}

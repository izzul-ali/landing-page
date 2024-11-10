import React, { ReactNode } from "react"
import Header from "@/components/molecules/Header"
import Footer from "@/components/molecules/Footer"

interface Props {
  children: ReactNode
}

export default function MainContainer({ children }: Props) {
  return (
    <main className="h-screen flex flex-col bg-primaryBackground text-white">
      <Header />
      <section className="flex-1 h-full">{children}</section>
      <Footer />
    </main>
  )
}

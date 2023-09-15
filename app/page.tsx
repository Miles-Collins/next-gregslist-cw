'use client'

import Button from "@/components/Buttons/Button";
import usePersonModal from "@/hooks/usePersonModal";
import { useCallback, useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const personModal = usePersonModal()

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
    console.log(isOpen)
  }, [isOpen])
  return (
    <main>
      <div className="">
      <h1>Hello, and welcome to Gregs List</h1>
      </div>
      <div className="flex h-[85dvh] items-center justify-center">
      <div className="w-32">
        <Button onOpen={personModal.onOpen} label={"Form Modal"} type={"button"} outline />
      </div>
        </div>
    </main>
  )
}

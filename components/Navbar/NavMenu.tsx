import React, { useCallback, useState } from 'react'

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])
  return (
    <div>NavMenu</div>
  )
}

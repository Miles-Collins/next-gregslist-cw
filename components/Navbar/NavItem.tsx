import Link from 'next/link'
import React from 'react'

interface NavItemProps {
  title: string
}

export default function NavItem({title}: NavItemProps) {
  return (
    <div className='flex items-center gap-3 px-4 uppercase'>
      <Link href={`/${title}/`}>
      {title}
      </Link>
    </div>
  )
}

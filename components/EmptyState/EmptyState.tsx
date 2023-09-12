import Link from 'next/link'
import React from 'react'
import Button from '../Buttons/Button'
import Heading from '../Heading/Heading'

interface EmptyStateProps {
  title?: string
  subtitle?: string
  showReset?: boolean
}

export default function EmptyState({title = "No exact matches", subtitle, showReset}: EmptyStateProps) {
  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center text-white">
      <Heading title={title} subtitle={subtitle} center />
      <div className="w-48 mt-4">
        {showReset && (
          <Link href={'/'}>
          <Button type='button'
            outline
            label="Home"
          />
          </Link>
        )}
      </div>
    </div>
  )
}

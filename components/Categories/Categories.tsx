import React from 'react'
import Container from '../Container/Container'
import { categories } from '@/libs/Categories'
import CategoryBox from './CategoryBox'

export default function Categories() {
  return (
        <Container>
      <div
className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            // selected={category == item.label}
          />
        ))}
      </div>
    </Container>
  )
}

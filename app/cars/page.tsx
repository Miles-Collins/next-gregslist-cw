import React from 'react'
import CarInfo from '@/components/Cars/CarInfo'
import EmptyState from '@/components/EmptyState/EmptyState'
import { log } from 'console'
import getAllCars from '../actions/Cars/getAllCars'

type Car = {
  id: number
  car: string
  car_model: string
  car_color: string
  car_model_year: number
  car_vin: string
  price: string
  availability: boolean
}

export default async function CarsPage() {

  const cars = await getAllCars()
  console.log('CARS LENGTH', Object.entries(cars).forEach(car => {
    const [key, value] = car
    console.log('key', )
  }))

  if(cars.length > 0) {
    return (
      <EmptyState title='No cars found' showReset />
    )
  }
  return (
    <div>
      {Object.keys(cars)}
    </div>
  )
}

import React from 'react'

interface CarInfoProp {
  id: number
  car: string
  car_model: string
  car_color: string
  car_model_year: number
  car_vin: string
  price: string
  availability: boolean
}

export default function CarInfo({id, car, car_color, car_model_year, car_vin, price, availability}: CarInfoProp) {
  return (
    <div>

    </div>
  )
}

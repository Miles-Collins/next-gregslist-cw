import React from 'react'
import toast from 'react-hot-toast'
const DATA_SOURCE_URL = "https://myfakeapi.com/api/cars"

export default async function getCarById(carId: string) {
console.log(`[CAR ID] ${DATA_SOURCE_URL}/${carId}`)
  const res = await fetch(`${DATA_SOURCE_URL}/${carId}`)

  const car = await res.json()
  // console.log('[car]', car.Car.id)
  return car.Car
}

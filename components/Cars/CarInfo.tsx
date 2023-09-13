import Link from 'next/link'
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

export default function CarInfo({id, car, car_model, car_color, car_model_year, car_vin, price, availability}: CarInfoProp) {

  return (
    <Link href={`cars/${id}`}>
    <div className='col-span-1 cursor-pointer group'>
      <div className='flex flex-col gap-2 w-full'>
        <div>
          {car_color} {car_model_year} {car} {car_model}
        </div>
        <div>
          {price}
        </div>
        {availability ? (
          <h1 className='text-green-500'>Available</h1>
        ) : (<h1 className='text-red-500'>Not Available</h1>)}
      </div>
      <div>

      </div>
    </div>
    </Link>
  )
}

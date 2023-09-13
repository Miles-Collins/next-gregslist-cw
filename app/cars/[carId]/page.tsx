import getCarById from '@/app/actions/Cars/getCarById'
import Button from '@/components/Buttons/Button'
import Container from '@/components/Container/Container'
import Link from 'next/link'
import React from 'react'
import toast from 'react-hot-toast'

interface IParams {
  carId?: string
}

export default async function CarPage({params}: {params: IParams}) {
  const {carId} = params
  const car: Car = await getCarById(carId as string)
  // console.log('[GETTING CAR]', car.car)
  
  if(!car.id) {
    return (
      <Container>
        <div className='w-36'>
        <Link href={'/cars'}>
          <Button label={'Go Back'} type={'button'} outline />
        </Link>
      </div>
        <div>
          No car found with id {carId}
        </div>
      </Container>
    )
  }
  return (
    <Container>
      <div className='w-36'>
        <Link href={'/cars'}>
          <Button label={'Go Back'} type={'button'} outline />
        </Link>
      </div>
      <div>
        I have a {car.car_model_year} {car.car_color} {car.car} {car.car_model} for sale
      </div>
      <div>
        Asking {car.price}
      </div>
      <div>
        I know what i have, no tire kickers.
      </div>
      {!car.availability && (
        <p className='text-red-500 uppercase'>sold</p>
      )}
    </Container>
  )
}

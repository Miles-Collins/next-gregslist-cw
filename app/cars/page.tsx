import React from 'react'
import CarInfo from '@/components/Cars/CarInfo'
import EmptyState from '@/components/EmptyState/EmptyState'
import getAllCars from '../actions/Cars/getAllCars'
import Container from '@/components/Container/Container'

export default async function CarsPage() {

  const cars = await getAllCars()
  

  if(cars.length == 0) {
    return (
      <EmptyState title='No cars found' showReset />
    )
  }
  return (
    <Container>
      <div className='grid grid-cols-1 sm:grid-cols-2 mg:grid-cols-3 lg:grid-cols-4 xl:grid-cols5 2xl:grid-cols-6 gap-8 pt-10'>
      {cars &&  (
        cars.map((car) => (
          <CarInfo key={car.id} id={car.id} car={car.car} car_model={car.car_model} car_color={car.car_color} car_model_year={car.car_model_year} car_vin={car.car_vin} price={car.price} availability={car.availability} />
        ))
      )}
      </div>
    </Container>
  )
}

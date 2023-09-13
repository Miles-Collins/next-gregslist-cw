import { NextResponse } from "next/server"
import toast from "react-hot-toast"

const DATA_SOURCE_URL = "https://myfakeapi.com/api/cars/"

export default async function getAllCars() {
  try {
    const res = await fetch(DATA_SOURCE_URL)

    const cars = await res.json()
    const firstCarMake: Car[] = cars.cars

    // console.log(firstCarMake)
    

    return firstCarMake

  } catch (error) {
    throw new Error(`[GETTING ALL CARS] ${error}`)
  }
 
}
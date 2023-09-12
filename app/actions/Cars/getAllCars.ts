import { NextResponse } from "next/server"

const DATA_SOURCE_URL = "https://myfakeapi.com/api/cars/"

export default async function getAllCars() {
  try {
    const res = await fetch(DATA_SOURCE_URL)

    const cars: any = await res.json()

    // console.log(cars)

    return cars

  } catch (error) {
    throw new Error(`[GETTING ALL CARS] ${error}`)
  }
 
}
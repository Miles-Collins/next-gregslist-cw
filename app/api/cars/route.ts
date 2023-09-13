import { NextResponse } from "next/server"

const DATA_SOURCE_URL = "https://myfakeapi.com/api/cars"

export async function GET() {
  const res = await fetch(DATA_SOURCE_URL)
  // console.log('Type', res.type)

  const cars = await res.json()

  return NextResponse.json(cars)
}
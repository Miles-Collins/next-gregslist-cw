import { NextResponse } from "next/server"

const DATA_SOURCE_URL = "https://myfakeapi.com/api/contactus"

export async function POST(request: Request) {

console.log('[REQUEST]',request)

 const person: Person = await request.json()

 if(!person.contact || !person.firstName || !person.lastName || !person.message) {
  return NextResponse.json({"message": "Missing required information."})
 }
 const res = await fetch(DATA_SOURCE_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(person)
 })

 const message = await res.json()

 return NextResponse.json(message)
}

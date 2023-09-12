import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Home() {

  return (
    <div>
      <Link href={"/"}>
        <Image src={"/images/Gregslist.png"} alt={'Gregslist Logo'} height={60} width={300}className='hidden md:block cursor-pointer' />
      </Link>
    </div>
  )
}
